#!/bin/sh
# Automated PostgreSQL backups for AlfathPOS (runs inside the "backup" container).
# Dumps the database on a fixed interval, writes a timestamped gzip file to
# /backups (bind-mounted to ./backups on the host), and deletes old dumps.
set -eu

INTERVAL="${BACKUP_INTERVAL_SECONDS:-21600}"   # default: every 6 hours
KEEP_DAYS="${BACKUP_KEEP_DAYS:-14}"            # default: keep 14 days

mkdir -p /backups
echo "[backup] started; interval=${INTERVAL}s keep=${KEEP_DAYS}d target=/backups"

while true; do
  TS="$(date +%Y%m%d-%H%M%S)"
  FILE="/backups/alfath-${TS}.sql.gz"
  TMP="${FILE}.tmp"

  echo "[backup] $(date '+%Y-%m-%d %H:%M:%S') dumping -> ${FILE}"
  # Write to a temp file first, then rename, so a partial/failed dump is never
  # mistaken for a valid backup.
  if pg_dump --clean --if-exists --no-owner --no-privileges | gzip -c > "${TMP}"; then
    mv "${TMP}" "${FILE}"
    echo "[backup] ok: ${FILE} ($(du -h "${FILE}" | cut -f1))"
  else
    echo "[backup] FAILED dump at ${TS}" >&2
    rm -f "${TMP}"
  fi

  # Rotation: remove dumps older than KEEP_DAYS.
  find /backups -name 'alfath-*.sql.gz' -type f -mtime +"${KEEP_DAYS}" -delete 2>/dev/null || true

  sleep "${INTERVAL}"
done
