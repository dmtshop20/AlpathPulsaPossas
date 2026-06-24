import React from 'react';
import {
  Zap, LayoutDashboard, Users, Box, ArrowRightLeft, UserCircle, ShoppingCart,
  FileText, Settings, Search, Bell, ChevronDown, TrendingUp, TrendingDown,
  AlertCircle, CheckCircle2, X, Plus, Wallet, PackageOpen, MoreHorizontal
} from 'lucide-react';
import './_group.css';

export function DarkCommand() {
  return (
    <div className="dark-command-theme min-h-screen bg-[#020617] text-slate-200 flex relative overflow-hidden selection:bg-blue-500/30">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Sidebar */}
      <aside className="w-64 glass-panel border-r border-white/5 flex flex-col z-10 relative">
        <div className="h-20 flex items-center px-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">Alfath <span className="text-blue-400">Pulsa</span></span>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-2">Menu Utama</div>
          
          <NavItem icon={<LayoutDashboard />} label="Dashboard" active />
          <NavItem icon={<UserCircle />} label="Kasir" />
          <NavItem icon={<Box />} label="Stok Produk" />
          <NavItem icon={<ArrowRightLeft />} label="Transaksi" />
          <NavItem icon={<Users />} label="Karyawan" />
          
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 mt-8 px-2">Lainnya</div>
          
          <NavItem icon={<ShoppingCart />} label="Belanja" />
          <NavItem icon={<FileText />} label="Laporan" />
          <NavItem icon={<Settings />} label="Pengaturan" />
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/10 overflow-hidden">
              <img src="https://i.pravatar.cc/100?img=11" alt="Admin" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-white truncate">Ahmad Fauzi</div>
              <div className="text-xs text-slate-400 truncate">Administrator</div>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-500" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col z-10 relative overflow-hidden">
        {/* Topbar */}
        <header className="h-20 glass-panel border-b border-white/5 flex items-center justify-between px-8 z-20 sticky top-0">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-semibold text-white">Dashboard</h1>
            <div className="h-6 w-px bg-white/10"></div>
            <div className="flex items-center gap-2 bg-slate-800/50 border border-white/5 px-3 py-1.5 rounded-full cursor-pointer hover:bg-slate-800 transition-colors">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
              <span className="text-sm font-medium text-slate-300">Cabang Utama</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Cari transaksi, produk..." 
                className="w-64 bg-slate-900/50 border border-white/10 rounded-full py-2 pl-9 pr-4 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
              />
            </div>
            
            <button className="relative p-2 rounded-full hover:bg-white/5 transition-colors text-slate-400 hover:text-white">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border-2 border-[#0f172a]"></span>
            </button>
            
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-400 p-[2px] cursor-pointer">
              <div className="w-full h-full bg-slate-900 rounded-full border border-slate-900 overflow-hidden">
                <img src="https://i.pravatar.cc/100?img=11" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          
          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              title="Omset Hari Ini" 
              value="Rp 4.250.000" 
              trend="+12%" 
              trendUp={true} 
              icon={<Wallet className="text-blue-400 w-5 h-5" />}
              iconBg="bg-blue-500/10"
              iconBorder="border-blue-500/20"
            />
            <StatCard 
              title="Laba Bersih" 
              value="Rp 612.000" 
              trend="+8%" 
              trendUp={true} 
              icon={<TrendingUp className="text-emerald-400 w-5 h-5" />}
              iconBg="bg-emerald-500/10"
              iconBorder="border-emerald-500/20"
            />
            <StatCard 
              title="Total Transaksi" 
              value="87" 
              trend="+5" 
              trendUp={true} 
              icon={<ArrowRightLeft className="text-purple-400 w-5 h-5" />}
              iconBg="bg-purple-500/10"
              iconBorder="border-purple-500/20"
            />
            <StatCard 
              title="Stok Menipis" 
              value="5 Produk" 
              trend="-2" 
              trendUp={false} 
              isWarning={true}
              icon={<AlertCircle className="text-amber-400 w-5 h-5" />}
              iconBg="bg-amber-500/10"
              iconBorder="border-amber-500/20"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Section */}
            <div className="lg:col-span-2 glass-panel border border-white/5 rounded-3xl p-6 flex flex-col relative overflow-hidden">
              {/* Subtle background glow for chart */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-blue-500/5 blur-[80px] pointer-events-none" />
              
              <div className="flex items-center justify-between mb-8 z-10 relative">
                <div>
                  <h2 className="text-lg font-semibold text-white">Tren Penjualan 7 Hari</h2>
                  <p className="text-sm text-slate-400">Total omset dari seluruh cabang</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 text-xs font-medium bg-blue-500 text-white rounded-lg shadow-[0_0_10px_rgba(59,130,246,0.3)]">Grafik Batang</button>
                  <button className="px-3 py-1.5 text-xs font-medium bg-slate-800 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors border border-white/5">Area</button>
                </div>
              </div>

              <div className="flex-1 min-h-[240px] flex items-end gap-2 pb-6 relative z-10">
                {/* Y-Axis lines */}
                <div className="absolute inset-0 flex flex-col justify-between z-0 pointer-events-none opacity-20">
                  <div className="w-full h-px bg-slate-500"></div>
                  <div className="w-full h-px bg-slate-500"></div>
                  <div className="w-full h-px bg-slate-500"></div>
                  <div className="w-full h-px bg-slate-500"></div>
                  <div className="w-full h-px bg-slate-500"></div>
                </div>
                
                {/* Y-Axis Labels */}
                <div className="absolute left-0 top-0 bottom-6 w-12 flex flex-col justify-between text-[10px] text-slate-500 -ml-2 pb-1 z-10">
                  <span>6M</span>
                  <span>4.5M</span>
                  <span>3M</span>
                  <span>1.5M</span>
                  <span>0</span>
                </div>

                {/* Bars */}
                <div className="flex-1 h-full flex items-end justify-between px-10 z-10 relative">
                  <ChartBar day="Sen" value="4.1M" height="45%" />
                  <ChartBar day="Sel" value="4.8M" height="55%" />
                  <ChartBar day="Rab" value="4.2M" height="48%" />
                  <ChartBar day="Kam" value="5.1M" height="65%" active />
                  <ChartBar day="Jum" value="4.9M" height="60%" />
                  <ChartBar day="Sab" value="6.2M" height="85%" />
                  <ChartBar day="Min" value="5.8M" height="75%" />
                </div>
              </div>
            </div>

            {/* Quick Actions / Summary */}
            <div className="glass-panel border border-white/5 rounded-3xl p-6 flex flex-col">
              <h2 className="text-lg font-semibold text-white mb-1">Aksi Cepat</h2>
              <p className="text-sm text-slate-400 mb-6">Pintasan menu operasional</p>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <QuickAction icon={<ShoppingCart className="w-5 h-5 text-blue-400" />} label="Kasir POS" />
                <QuickAction icon={<PackageOpen className="w-5 h-5 text-emerald-400" />} label="Restok" />
                <QuickAction icon={<FileText className="w-5 h-5 text-purple-400" />} label="Laporan" />
                <QuickAction icon={<Users className="w-5 h-5 text-amber-400" />} label="Absensi" />
              </div>

              <div className="mt-auto p-4 bg-slate-900/80 rounded-2xl border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-300">Target Bulanan</span>
                  <span className="text-sm font-bold text-white">78%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 w-[78%] rounded-full relative">
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">Rp 117.000.000 / Rp 150.000.000</p>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="glass-panel border border-white/5 rounded-3xl overflow-hidden flex flex-col relative">
            <div className="p-6 border-b border-white/5 flex items-center justify-between z-10 relative">
              <div>
                <h2 className="text-lg font-semibold text-white">Transaksi Terbaru</h2>
                <p className="text-sm text-slate-400">Riwayat penjualan real-time</p>
              </div>
              <button className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">Lihat Semua</button>
            </div>
            
            <div className="overflow-x-auto z-10 relative">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900/50 text-xs uppercase tracking-wider text-slate-500">
                    <th className="px-6 py-4 font-medium">Waktu</th>
                    <th className="px-6 py-4 font-medium">Produk</th>
                    <th className="px-6 py-4 font-medium">Cabang</th>
                    <th className="px-6 py-4 font-medium">Kasir</th>
                    <th className="px-6 py-4 font-medium">Nominal</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  <TableRow 
                    time="14:32" 
                    product="Pulsa Telkomsel 50rb" 
                    branch="Cabang Utama" 
                    cashier="Andi" 
                    amount="Rp 51.500" 
                    status="Berhasil" 
                  />
                  <TableRow 
                    time="14:28" 
                    product="Token PLN 100rb" 
                    branch="Cabang Pasar" 
                    cashier="Siti" 
                    amount="Rp 102.000" 
                    status="Pending" 
                  />
                  <TableRow 
                    time="14:15" 
                    product="Paket Data XL 25rb" 
                    branch="Cabang Timur" 
                    cashier="Budi" 
                    amount="Rp 26.000" 
                    status="Berhasil" 
                  />
                  <TableRow 
                    time="14:02" 
                    product="Pulsa Indosat 20rb" 
                    branch="Cabang Utama" 
                    cashier="Andi" 
                    amount="Rp 21.000" 
                    status="Berhasil" 
                  />
                  <TableRow 
                    time="13:55" 
                    product="Voucher Game ML 86 Diamond" 
                    branch="Cabang Timur" 
                    cashier="Budi" 
                    amount="Rp 24.500" 
                    status="Berhasil" 
                  />
                  <TableRow 
                    time="13:40" 
                    product="BPJS Kesehatan" 
                    branch="Cabang Pasar" 
                    cashier="Siti" 
                    amount="Rp 152.500" 
                    status="Berhasil" 
                  />
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
      </main>

      {/* --- STATIC MODAL OVERLAY MOCKUP --- */}
      <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm pointer-events-auto"></div>
        
        {/* Modal Content */}
        <div className="bg-slate-900 border border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl w-full max-w-md relative z-10 pointer-events-auto overflow-hidden">
          {/* Accent Line top */}
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-emerald-400"></div>
          
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white tracking-tight">Tambah Produk</h3>
              <button className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Nama Produk</label>
                <input 
                  type="text" 
                  defaultValue="Voucher Garena Shell 33"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Harga Modal</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">Rp</span>
                    <input 
                      type="text" 
                      defaultValue="9.500"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Harga Jual</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">Rp</span>
                    <input 
                      type="text" 
                      defaultValue="12.000"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex gap-3 justify-end">
              <button className="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors border border-transparent">Batal</button>
              <button className="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all">Simpan Produk</button>
            </div>
          </div>
        </div>

        {/* Success Toast */}
        <div className="absolute top-8 right-8 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 shadow-[0_10px_30px_rgba(16,185,129,0.15)] rounded-xl p-4 flex items-start gap-3 pointer-events-auto max-w-sm">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="flex-1 pr-4">
            <h4 className="text-sm font-semibold text-emerald-400">Berhasil Disimpan</h4>
            <p className="text-xs text-emerald-200/70 mt-0.5">Produk "Voucher Garena Shell 33" telah ditambahkan ke database.</p>
          </div>
          <button className="text-emerald-500/50 hover:text-emerald-400 transition-colors shrink-0">
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}

// --- Subcomponents ---

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all ${
      active 
        ? 'bg-blue-500/10 text-blue-400 font-medium' 
        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
    }`}>
      <div className={`[&>svg]:w-5 [&>svg]:h-5 ${active ? 'text-blue-400' : 'text-slate-500'}`}>
        {icon}
      </div>
      <span>{label}</span>
      {active && (
        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
      )}
    </div>
  );
}

function StatCard({ title, value, trend, trendUp, icon, iconBg, iconBorder, isWarning = false }: any) {
  return (
    <div className="glass-panel border border-white/5 rounded-3xl p-5 relative overflow-hidden group">
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${isWarning ? 'from-amber-500/10' : 'from-blue-500/10'} to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className={`w-10 h-10 rounded-xl ${iconBg} border ${iconBorder} flex items-center justify-center`}>
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
          isWarning 
            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
            : trendUp 
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
              : 'bg-red-500/10 text-red-400 border border-red-500/20'
        }`}>
          {trendUp ? <TrendingUp className="w-3 h-3" /> : (isWarning ? <AlertCircle className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />)}
          <span>{trend}</span>
        </div>
      </div>
      <div className="relative z-10">
        <h3 className="text-slate-400 text-sm font-medium mb-1">{title}</h3>
        <div className="text-2xl font-bold text-white tracking-tight">{value}</div>
      </div>
    </div>
  );
}

function QuickAction({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-slate-900/50 hover:bg-slate-800 border border-white/5 hover:border-white/10 transition-all group">
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="text-xs font-medium text-slate-300">{label}</span>
    </button>
  );
}

function ChartBar({ day, value, height, active = false }: { day: string, value: string, height: string, active?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-3 w-10 group relative">
      <div className="opacity-0 group-hover:opacity-100 absolute -top-8 text-[10px] font-bold bg-slate-800 text-white px-2 py-1 rounded-md transition-opacity border border-slate-700 z-20">
        {value}
      </div>
      <div className="w-full h-40 flex items-end justify-center relative">
        <div 
          className={`w-6 rounded-t-sm transition-all duration-500 ${
            active 
              ? 'bg-gradient-to-t from-blue-600 to-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
              : 'bg-slate-800 group-hover:bg-slate-700'
          }`}
          style={{ height }}
        >
          {active && <div className="w-full h-full bg-[linear-gradient(180deg,rgba(255,255,255,0.2)0%,transparent_100%)]"></div>}
        </div>
      </div>
      <span className={`text-xs font-medium ${active ? 'text-blue-400' : 'text-slate-400'}`}>{day}</span>
    </div>
  );
}

function TableRow({ time, product, branch, cashier, amount, status }: any) {
  const isSuccess = status === "Berhasil";
  return (
    <tr className="hover:bg-white/[0.02] transition-colors group">
      <td className="px-6 py-4 whitespace-nowrap text-slate-400">{time}</td>
      <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-200">{product}</td>
      <td className="px-6 py-4 whitespace-nowrap text-slate-400">{branch}</td>
      <td className="px-6 py-4 whitespace-nowrap text-slate-400">{cashier}</td>
      <td className="px-6 py-4 whitespace-nowrap font-medium text-white">{amount}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
          isSuccess 
            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
            : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${isSuccess ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
          {status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <button className="text-slate-500 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors opacity-0 group-hover:opacity-100">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
}
