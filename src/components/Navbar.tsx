import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar(){
  const [open,setOpen]=useState(false);
  const links=[['Home','/'],['About','/about'],['Services','/services'],['Gallery','/gallery'],['Contact','/contact']];
  return <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#071d38]/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-slate-950/10">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center"><img src="/kam-logo.png" className="h-14 w-auto max-w-[270px] object-contain" alt="KAM Internal Auditors Inc."/></Link>
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(([label,to])=><NavLink key={to} to={to} className={({isActive})=>`px-3 py-2 rounded-lg text-sm font-semibold transition ${isActive?'text-cyan-300 bg-white/5':'text-slate-200 hover:text-cyan-300 hover:bg-white/5'}`}>{label}</NavLink>)}
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+27151010500" className="hidden md:inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#06172e] px-4 py-2.5 rounded-xl text-sm font-bold transition"><Phone size={15}/> +27 15 101 0500</a>
          <button aria-label="Open menu" className="lg:hidden text-white p-2" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
        </div>
      </div>
      {open&&<div className="lg:hidden bg-[#071d38] border-t border-white/10 px-5 pb-5">{links.map(([label,to])=><NavLink key={to} to={to} onClick={()=>setOpen(false)} className="block py-3 text-white border-b border-white/5">{label}</NavLink>)}</div>}
    </header>
  </>
}
