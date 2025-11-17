import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-[#0FB9B1] flex items-center justify-center text-white font-bold">M</div>
          <span className="text-lg sm:text-xl font-semibold text-[#064663]">MediSwift</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#how" className="hover:text-[#064663]">How it works</a>
          <a href="#features" className="hover:text-[#064663]">Features</a>
          <a href="#membership" className="hover:text-[#064663]">Membership</a>
          <a href="#partners" className="hover:text-[#064663]">Pharmacy Partners</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#get-started" className="hidden sm:inline-flex rounded-md bg-[#0FB9B1] px-4 py-2 text-white font-medium shadow hover:bg-teal-500 transition-colors">Get Started</a>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-700">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
