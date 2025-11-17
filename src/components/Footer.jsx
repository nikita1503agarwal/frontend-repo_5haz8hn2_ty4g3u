import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const links = ['About','Contact','Careers','Pharmacy Partners','Terms','Privacy']
  return (
    <footer className="bg-[#061A2B] text-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-[#0FB9B1] flex items-center justify-center text-white font-bold">M</div>
            <span className="text-lg font-semibold">MediSwift</span>
          </div>
          <div className="flex gap-6 text-white/80">
            {links.map(l => <a key={l} href="#" className="hover:text-white">{l}</a>)}
          </div>
          <div className="flex gap-4 text-white/80">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>
        <p className="mt-8 text-sm text-white/60">© {new Date().getFullYear()} MediSwift. All rights reserved.</p>
      </div>
    </footer>
  )
}
