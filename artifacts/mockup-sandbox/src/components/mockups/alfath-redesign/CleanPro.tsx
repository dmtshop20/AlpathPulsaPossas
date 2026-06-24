import React from 'react';
import {
  LayoutDashboard,
  Wallet,
  Package,
  ShoppingBag,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  Bell,
  Search,
  ChevronDown,
  TrendingUp,
  AlertCircle,
  Plus,
  CheckCircle2,
  X,
  CreditCard,
  Zap,
  MoreHorizontal
} from 'lucide-react';

export function CleanPro() {
  return (
    <div className="font-sans min-h-screen bg-zinc-50 flex overflow-hidden text-zinc-900 relative selection:bg-indigo-100 selection:text-indigo-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-zinc-100 flex flex-col justify-between shrink-0 shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10">
        <div>
          <div className="h-20 flex items-center px-6 border-b border-zinc-100/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-sm shadow-indigo-200">
                <Zap className="w-5 h-5 fill-white" />
              </div>
              <span className="font-semibold text-lg tracking-tight">Alfath Pulsa</span>
            </div>
          </div>
          
          <nav className="p-4 space-y-1">
            {[
              { icon: LayoutDashboard, label: 'Dashboard', active: true },
              { icon: Wallet, label: 'Kasir', active: false },
              { icon: Package, label: 'Stok Produk', active: false },
              { icon: ShoppingBag, label: 'Transaksi', active: false },
              { icon: Users, label: 'Karyawan', active: false },
              { icon: ShoppingCart, label: 'Belanja', active: false },
              { icon: BarChart3, label: 'Laporan', active: false },
              { icon: Settings, label: 'Pengaturan', active: false },
            ].map((item, i) => (
              <a 
                key={i} 
                href="#" 
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  item.active 
                    ? 'bg-indigo-50 text-indigo-700' 
                    : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                <item.icon className={`w-4 h-4 ${item.active ? 'text-indigo-600' : 'text-zinc-400'}`} />
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-zinc-100">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-zinc-50 cursor-pointer transition-colors">
            <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
              AD
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-zinc-900 leading-tight">Admin</span>
              <span className="text-xs text-zinc-500">Administrator</span>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* TOPBAR */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-zinc-100 flex items-center justify-between px-8 shrink-0 sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Dashboard</h1>
            <div className="h-6 w-px bg-zinc-200 mx-2"></div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-100/80 rounded-lg cursor-pointer hover:bg-zinc-200/80 transition-colors">
              <span className="text-sm font-medium text-zinc-700">Cabang Utama</span>
              <ChevronDown className="w-4 h-4 text-zinc-400" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Cari transaksi, produk..." 
                className="w-64 h-10 pl-9 pr-4 rounded-xl bg-zinc-100/80 border-transparent text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all placeholder:text-zinc-400"
              />
            </div>
            
            <button className="relative p-2 text-zinc-400 hover:text-zinc-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* STAT CARDS */}
            <div className="grid grid-cols-4 gap-6">
              {[
                { label: 'Omset Hari Ini', value: 'Rp 4.250.000', trend: '+12% vs kemarin', icon: CreditCard, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                { label: 'Laba Bersih', value: 'Rp 612.000', trend: '+8% vs kemarin', icon: Wallet, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { label: 'Total Transaksi', value: '87', trend: '+5 vs kemarin', icon: ShoppingBag, color: 'text-blue-600', bg: 'bg-blue-50' },
                { label: 'Stok Menipis', value: '5 produk', trend: 'Perlu restock', icon: AlertCircle, color: 'text-amber-600', bg: 'bg-amber-50', isWarning: true },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.bg}`}>
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md ${stat.isWarning ? 'text-amber-700 bg-amber-50' : 'text-emerald-700 bg-emerald-50'}`}>
                      {!stat.isWarning && <TrendingUp className="w-3 h-3" />}
                      {stat.trend}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-zinc-500 text-sm font-medium mb-1">{stat.label}</h3>
                    <p className="text-2xl font-semibold text-zinc-900 tracking-tight">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8">
              {/* CHART AREA */}
              <div className="col-span-2 bg-white rounded-2xl border border-zinc-100 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-lg font-semibold tracking-tight">Tren Penjualan 7 Hari</h2>
                  <select className="text-sm bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-1.5 text-zinc-600 outline-none focus:ring-2 focus:ring-indigo-500/20 cursor-pointer">
                    <option>7 Hari Terakhir</option>
                    <option>30 Hari Terakhir</option>
                  </select>
                </div>
                
                {/* CSS Bar Chart */}
                <div className="h-64 flex items-end justify-between gap-2 px-2 mt-4">
                  {[
                    { day: 'Sen', val: 60 },
                    { day: 'Sel', val: 85 },
                    { day: 'Rab', val: 45 },
                    { day: 'Kam', val: 90 },
                    { day: 'Jum', val: 75 },
                    { day: 'Sab', val: 110 },
                    { day: 'Min', val: 100 },
                  ].map((data, i) => (
                    <div key={i} className="flex flex-col items-center flex-1 group">
                      {/* Tooltip placeholder */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium bg-zinc-800 text-white py-1 px-2 rounded mb-2 pointer-events-none">
                        Rp {data.val * 35}.000
                      </div>
                      <div className="w-full max-w-[48px] bg-zinc-100 rounded-t-lg overflow-hidden relative" style={{ height: '180px' }}>
                        <div 
                          className="absolute bottom-0 w-full bg-indigo-500 hover:bg-indigo-400 transition-colors rounded-t-sm"
                          style={{ height: `${(data.val / 110) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-zinc-500 font-medium mt-3">{data.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* QUICK ACTIONS / ALERTS */}
              <div className="col-span-1 space-y-6">
                <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg shadow-indigo-200">
                  <h3 className="font-semibold text-lg mb-2">Tambah Transaksi</h3>
                  <p className="text-indigo-100 text-sm mb-6 leading-relaxed">Catat penjualan manual atau scan barcode produk langsung.</p>
                  <button className="w-full bg-white text-indigo-600 rounded-xl py-2.5 font-medium text-sm flex items-center justify-center gap-2 hover:bg-indigo-50 transition-colors shadow-sm">
                    <Plus className="w-4 h-4" />
                    Transaksi Baru
                  </button>
                </div>

                <div className="bg-white rounded-2xl border border-zinc-100 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                  <h3 className="font-semibold text-zinc-900 mb-4 tracking-tight">Tugas Tertunda</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-zinc-900">Restock 5 produk</p>
                        <p className="text-xs text-zinc-500 mt-0.5">Stok di bawah batas minimum</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-zinc-900">Setor kas shift pagi</p>
                        <p className="text-xs text-zinc-500 mt-0.5">Andi belum melakukan setoran</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DATA TABLE */}
            <div className="bg-white rounded-2xl border border-zinc-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden">
              <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
                <h2 className="text-lg font-semibold tracking-tight">Transaksi Terbaru</h2>
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">Lihat Semua</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-50/50">
                      <th className="px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider w-32">Waktu</th>
                      <th className="px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Produk</th>
                      <th className="px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Cabang</th>
                      <th className="px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Kasir</th>
                      <th className="px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right">Nominal</th>
                      <th className="px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {[
                      { time: '10:42', prod: 'Pulsa Telkomsel 50rb', branch: 'Cabang Utama', cashier: 'Andi', val: 'Rp 52.000', status: 'Berhasil' },
                      { time: '10:35', prod: 'Token PLN 100rb', branch: 'Cabang Pasar', cashier: 'Siti', val: 'Rp 102.000', status: 'Berhasil' },
                      { time: '10:15', prod: 'Paket Data XL 25rb', branch: 'Cabang Timur', cashier: 'Budi', val: 'Rp 27.000', status: 'Berhasil' },
                      { time: '09:58', prod: 'Pulsa Indosat 20rb', branch: 'Cabang Utama', cashier: 'Andi', val: 'Rp 22.000', status: 'Pending' },
                      { time: '09:40', prod: 'Voucher Game ML 86 Diamond', branch: 'Cabang Pasar', cashier: 'Siti', val: 'Rp 24.500', status: 'Berhasil' },
                      { time: '09:12', prod: 'BPJS Kesehatan', branch: 'Cabang Utama', cashier: 'Andi', val: 'Rp 152.500', status: 'Berhasil' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-zinc-50/50 transition-colors">
                        <td className="px-6 py-4 text-sm text-zinc-500 whitespace-nowrap">{row.time}</td>
                        <td className="px-6 py-4 text-sm font-medium text-zinc-900">{row.prod}</td>
                        <td className="px-6 py-4 text-sm text-zinc-600">{row.branch}</td>
                        <td className="px-6 py-4 text-sm text-zinc-600">{row.cashier}</td>
                        <td className="px-6 py-4 text-sm font-medium text-zinc-900 text-right">{row.val}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                            row.status === 'Berhasil' 
                              ? 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20' 
                              : 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20'
                          }`}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* spacer for scroll */}
            <div className="h-12"></div>
          </div>
        </div>
      </main>

      {/* STATIC OVERLAYS FOR MOCKUP PURPOSES */}

      {/* Dark overlay backdrop */}
      <div className="absolute inset-0 bg-zinc-900/20 backdrop-blur-sm z-40 flex items-center justify-center">
        
        {/* Modal: Tambah Produk */}
        <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] w-[480px] max-w-full overflow-hidden flex flex-col border border-zinc-100">
          <div className="flex items-center justify-between p-6 border-b border-zinc-100">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">Tambah Produk Baru</h2>
            <button className="text-zinc-400 hover:text-zinc-600 transition-colors p-1 rounded-lg hover:bg-zinc-100">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-6 space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-zinc-700">Nama Produk</label>
              <input type="text" defaultValue="Pulsa Telkomsel 100rb" className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-zinc-900" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-zinc-700">Kategori</label>
                <select className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-zinc-900 appearance-none">
                  <option>Pulsa Reguler</option>
                  <option>Paket Data</option>
                  <option>Token PLN</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-zinc-700">Harga Jual</label>
                <input type="text" defaultValue="Rp 102.000" className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-zinc-900" />
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t border-zinc-100 bg-zinc-50/50 flex justify-end gap-3">
            <button className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-xl transition-colors">
              Batal
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 shadow-sm shadow-indigo-200 transition-all">
              Simpan Produk
            </button>
          </div>
        </div>

      </div>

      {/* Toast Notification */}
      <div className="absolute bottom-8 right-8 z-50 bg-zinc-900 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 w-80 translate-y-0 opacity-100 animate-in slide-in-from-bottom-5">
        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
        <div className="flex-1">
          <p className="text-sm font-medium text-zinc-50">Transaksi berhasil disimpan</p>
        </div>
        <button className="text-zinc-400 hover:text-white transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
