import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Linkedin, Youtube, ArrowRight } from 'lucide-react';

export default function Navbar(){
  const [open,setOpen]=useState(false);
  const links=[['Home','/'],['About Us','/about'],['Our Services','/services'],['Gallery','/gallery'],['Resources','/about'],['Contact Us','/contact']];
  return <>
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#062440] text-white text-xs hidden md:block">
      <div className="max-w-7xl mx-auto px-4 h-9 flex items-center justify-between gap-4">
        <div className="flex items-center gap-5 min-w-0">
          <a href="tel:+27151010500" className="flex items-center gap-1.5 hover:text-emerald-300"><Phone size={13}/> +27 15 101 0500</a>
          <a href="mailto:info@kaminternalauditors.com" className="flex items-center gap-1.5 hover:text-emerald-300"><Mail size={13}/> info@kaminternalauditors.com</a>
          <span className="hidden xl:flex items-center gap-1.5 truncate"><MapPin size={13}/> 58–60 Landros Mare Street, Thabakgolo Building, 3rd Floor, Polokwane, 0700</span>
        </div>
        <div className="flex items-center gap-2">
          <a href="#" aria-label="Facebook" className="hover:text-emerald-300"><Facebook size={15}/></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-emerald-300"><Linkedin size={15}/></a>
          <a href="#" aria-label="YouTube" className="hover:text-emerald-300"><Youtube size={15}/></a>
        </div>
      </div>
    </div>

    <header className="fixed top-0 md:top-9 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center shrink-0"><img src="/kam-logo.png" className="h-16 md:h-20 w-auto max-w-[280px] object-contain" alt="KAM Internal Auditors Inc."/></Link>
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {links.map(([label,to])=><NavLink key={`${label}-${to}`} to={to} className={({isActive})=>`relative px-3 py-3 text-sm font-semibold transition ${isActive?'text-[#08213f]':'text-slate-700 hover:text-emerald-600'} after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-0.5 after:bg-[#08213f] after:scale-x-0 after:transition ${isActive?'after:scale-x-100':''}`}>{label}</NavLink>)}
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <Link to="/contact" className="hidden xl:inline-flex items-center gap-2 bg-[#0aa35b] hover:bg-[#07884c] text-white px-5 py-3 rounded-lg text-sm font-bold transition shadow-sm">Request a Consultation <ArrowRight size={16}/></Link>
          <button aria-label="Open menu" className="lg:hidden text-[#08213f] p-2" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
        </div>
      </div>
      {open&&<div className="lg:hidden bg-white border-t border-slate-100 px-5 pb-5 shadow-xl">{links.map(([label,to])=><NavLink key={`${label}-${to}`} to={to} onClick={()=>setOpen(false)} className="block py-3 text-[#08213f] font-semibold border-b border-slate-100">{label}</NavLink>)}<Link to="/contact" onClick={()=>setOpen(false)} className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-[#0aa35b] text-white px-5 py-3 rounded-lg font-bold">Request a Consultation <ArrowRight size={16}/></Link></div>}
    </header>
  </>
}
