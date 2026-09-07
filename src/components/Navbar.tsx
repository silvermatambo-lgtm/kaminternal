import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
export default function Navbar(){const [open,setOpen]=useState(false); const links=[['Home','#home'],['About','#about'],['Services','#services'],['Vision & Mission','#vision'],['Contact','#contact']]; return <>
<header className="fixed top-0 left-0 right-0 z-50 bg-[#071d38]/95 backdrop-blur border-b border-white/10"><div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
<a href="#home" className="flex items-center"><img src="/kam-logo.png" className="h-14 w-auto max-w-[270px] object-contain" alt="KAM Internal Auditors Inc."/></a>
<nav className="hidden lg:flex items-center gap-1">{links.map(([l,h])=><a key={h} href={h} className="px-3 py-2 text-sm text-slate-200 hover:text-cyan-300">{l}</a>)}</nav>
<div className="flex items-center gap-3"><a href="tel:+27151010500" className="hidden md:inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2.5 rounded-lg text-sm font-semibold"><Phone size={15}/> +27 15 101 0500</a><button className="lg:hidden text-white" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></div>
{open&&<div className="lg:hidden bg-[#071d38] border-t border-white/10 px-5 pb-5">{links.map(([l,h])=><a key={h} href={h} onClick={()=>setOpen(false)} className="block py-3 text-white border-b border-white/5">{l}</a>)}</div>}</header></>}
