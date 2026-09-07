import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Landmark, Calculator, Monitor, Search, Building2, Target, Eye, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    image: 'https://www.bavenda.co.za/images/office.png',
    eyebrow: 'Professionalism · Integrity · Innovation · Excellence',
    title: 'Audit. Advisory. Taxation. ICT.',
    accent: 'Business Solutions.',
    text: 'High-quality professional services for municipalities, universities, TVET colleges, NPOs, departments, public entities and private companies.'
  },
  {
    image: 'https://amajuba.gov.za/images/news/683eaed4cc653-499798539_1120245750131832_7390103352881819615_n.jpg',
    eyebrow: 'Public Sector · Municipal Finance · Governance',
    title: 'Stronger Controls. Better Decisions.',
    accent: 'Accountable Institutions.',
    text: 'Supporting public and private sector organisations with governance, budgeting, risk management, financial reporting and audit readiness.'
  },
  {
    image: 'https://www.genetec.com/binaries/content/gallery/genetecweb/blog/2023/10-cybersecurity-tools-for-it-teams/genetec-cybersecurity-tools-it-professional-server-room.jpg',
    eyebrow: 'Technology · Cybersecurity · Digital Enablement',
    title: 'Modern Technology for',
    accent: 'Modern Business.',
    text: 'IT consulting, infrastructure, networks, cloud services, cybersecurity, CCTV, business systems and staff digital training.'
  }
];

const services = [
  ['Internal Audit & Governance','Strengthening governance, internal controls, accountability and operational performance.',ShieldCheck,'https://wyze-ng.com/elevate-your-business-with-wyze-audit-and-assurance/'],
  ['Asset Management','GRAP/IFRS compliant asset registers, verification, condition assessments, optimisation and training.',Building2,'https://images.caxton.co.za/wp-content/uploads/sites/2/2022/02/770_x_430_103_20865_tn.jpg'],
  ['Budgeting & Municipal Finance','GRAP compliant budgeting, cash flow, reconciliations, annual financial statements and audit files.',Landmark,'https://www.emsamonews.co.za/wp-content/uploads/2024/09/CaptionOfficials-from-the-Municipalitys-Finance-Department.jpg'],
  ['Enterprise Risk Management','Integrated risk management, risk infrastructure, enterprise risk assessments and awareness training.',Target,'https://siwnews.com/wp-content/uploads/2025/10/G2QhvVMWsAARY5c.jpeg'],
  ['Investigations & Compliance','Forensic investigations, irregular expenditure investigations and regulatory compliance reviews.',Search,'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg'],
  ['Taxation Services','Corporate tax, individual tax, indirect tax and municipal finance support.',Calculator,'https://www.rawpixel.com/image/17295165/professional-tax-consultant-office'],
  ['IT Systems Services','IT consulting, support, infrastructure, networks, cloud, cybersecurity, CCTV, business systems and staff training.',Monitor,'https://www.gettyimages.com/gi-resources/images/500px/1401460599.jpg'],
] as const;

const gallery = [
  ['Audit & Assurance','https://wyze-ng.com/elevate-your-business-with-wyze-audit-and-assurance/'],
  ['Municipal Finance','https://amajuba.gov.za/images/news/683eaed4cc653-499798539_1120245750131832_7390103352881819615_n.jpg'],
  ['Governance & Compliance','https://siwnews.com/wp-content/uploads/2025/10/G2QhvVMWsAARY5c.jpeg'],
  ['Accounting Advisory','https://www.bavenda.co.za/images/office.png'],
  ['IT & Cybersecurity','https://www.genetec.com/binaries/content/gallery/genetecweb/blog/2023/10-cybersecurity-tools-for-it-teams/genetec-cybersecurity-tools-it-professional-server-room.jpg'],
  ['Financial Strategy','https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg']
] as const;

const values = ['Professionalism','Integrity','Excellence','Commitment and Dedication','Continuous Improvement','Innovation','Teamwork','Client Satisfaction'];

export default function Home(){
  const [slide,setSlide]=useState(0);
  useEffect(()=>{
    const timer=window.setInterval(()=>setSlide(s=>(s+1)%heroSlides.length),6500);
    return()=>window.clearInterval(timer);
  },[]);
  const current=heroSlides[slide];
  return <div id="home" className="bg-white">
    <section className="pt-20 min-h-[760px] relative overflow-hidden bg-[#071d38]">
      {heroSlides.map((item,index)=><img key={item.image} src={item.image} alt={item.title} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index===slide?'opacity-55':'opacity-0'}`}/>)}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06172e] via-[#082c49]/90 to-[#008e9e]/25"/>
      <div className="relative max-w-7xl mx-auto px-5 py-28 md:py-40 min-h-[680px] flex items-center">
        <div className="max-w-3xl">
          <p className="text-cyan-300 uppercase tracking-[.25em] text-xs font-bold mb-5 animate-pulse">{current.eyebrow}</p>
          <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-[1.02] mb-6 drop-shadow-xl">{current.title}<br/><span className="text-cyan-400">{current.accent}</span></h1>
          <p className="text-slate-100 text-lg md:text-xl max-w-2xl leading-8 mb-8 drop-shadow">{current.text}</p>
          <div className="flex flex-wrap gap-3"><a href="#services" className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#06172e] font-bold px-6 py-3.5 rounded-lg">Explore Services <ArrowRight size={17}/></a><a href="#contact" className="inline-flex items-center gap-2 border border-white/50 text-white px-6 py-3.5 rounded-lg hover:bg-white/10">Contact Us</a></div>
        </div>
      </div>
      <button aria-label="Previous slide" onClick={()=>setSlide(s=>(s-1+heroSlides.length)%heroSlides.length)} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/25 border border-white/20 text-white flex items-center justify-center hover:bg-black/45"><ChevronLeft/></button>
      <button aria-label="Next slide" onClick={()=>setSlide(s=>(s+1)%heroSlides.length)} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/25 border border-white/20 text-white flex items-center justify-center hover:bg-black/45"><ChevronRight/></button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">{heroSlides.map((_,i)=><button key={i} aria-label={`Go to slide ${i+1}`} onClick={()=>setSlide(i)} className={`h-2.5 rounded-full transition-all ${i===slide?'w-9 bg-cyan-400':'w-2.5 bg-white/50'}`}/>)}</div>
    </section>

    <section className="bg-[#0a3652] text-white"><div className="max-w-7xl mx-auto px-4 py-7 grid grid-cols-2 lg:grid-cols-4 gap-5">{[['100%','Black-Owned'],['2021','Established'],['SAICA & SARS','Registered'],['IIASA','Registered Auditors']].map(x=><div key={x[0]} className="border-l-2 border-cyan-400 pl-4"><strong className="text-xl md:text-2xl">{x[0]}</strong><p className="text-slate-300 text-sm">{x[1]}</p></div>)}</div></section>

    <section id="about" className="py-20"><div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-center"><div className="grid grid-cols-2 gap-4"><img src="https://www.bavenda.co.za/images/office.png" alt="Professional accounting team" className="w-full h-[420px] object-cover rounded-3xl shadow-xl col-span-2"/><img src="https://amajuba.gov.za/images/news/683eaed4cc653-499798539_1120245750131832_7390103352881819615_n.jpg" alt="Municipal finance professionals" className="w-full h-44 object-cover rounded-2xl"/><img src="https://siwnews.com/wp-content/uploads/2025/10/G2QhvVMWsAARY5c.jpeg" alt="Governance meeting" className="w-full h-44 object-cover rounded-2xl"/></div><div><p className="text-cyan-600 uppercase tracking-widest text-xs font-bold">Company Introduction</p><h2 className="text-4xl md:text-5xl font-extrabold text-[#08213f] mt-3 mb-5">KAM Internal Auditors Inc.</h2><p className="text-slate-600 leading-7 mb-4">KAM Internal Auditors Inc. is a fast-growing 100% black-owned professional services firm established in 2021.</p><p className="text-slate-600 leading-7 mb-4">The company is registered with the South African Institute of Chartered Accountants (SAICA) and South African Revenue Services (SARS) as a Tax Practitioner. Our experienced internal auditors are registered members of the Institute of Internal Auditors South Africa (IIASA).</p><p className="text-slate-600 leading-7 mb-6">We provide high-quality audit, advisory, taxation, ICT, and business support services. Our commitment is built around professionalism, integrity, innovation, and excellence.</p><div className="grid sm:grid-cols-2 gap-3">{['Professional expertise','Client-centered service','Modern technology solutions','Public & private sector'].map(v=><div className="flex items-center gap-2 text-sm font-semibold text-[#08213f]" key={v}><CheckCircle2 size={18} className="text-cyan-500"/>{v}</div>)}</div></div></div></section>

    <section id="services" className="py-20 bg-slate-50"><div className="max-w-7xl mx-auto px-5"><div className="text-center max-w-3xl mx-auto mb-12"><p className="text-cyan-600 uppercase tracking-widest text-xs font-bold">Our Services</p><h2 className="text-4xl md:text-5xl font-extrabold text-[#08213f] mt-3">Comprehensive Professional Solutions</h2><p className="mt-4 text-slate-600">Professional support combining financial expertise, governance, risk, compliance and modern technology.</p></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{services.map(([title,desc,Icon,image])=><article key={title} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:-translate-y-1 hover:shadow-xl transition"><div className="h-52 overflow-hidden bg-slate-200"><img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/></div><div className="p-7"><div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-5"><Icon/></div><h3 className="font-bold text-xl text-[#08213f] mb-3">{title}</h3><p className="text-slate-600 text-sm leading-6">{desc}</p></div></article>)}</div></div></section>

    <section id="gallery" className="py-20 bg-white"><div className="max-w-7xl mx-auto px-5"><div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"><div><p className="text-cyan-600 uppercase tracking-widest text-xs font-bold">Gallery</p><h2 className="text-4xl md:text-5xl font-extrabold text-[#08213f] mt-3">Professional Services in Action</h2></div><p className="max-w-xl text-slate-600">A visual representation of the environments and professional work associated with our audit, finance, compliance and technology services.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{gallery.map(([label,image],i)=><div key={label} className={`${i===0?'lg:col-span-2':''} relative rounded-3xl overflow-hidden min-h-[260px] group`}><img src={image} alt={label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"/><div className="absolute inset-0 bg-gradient-to-t from-[#06172e]/85 via-transparent to-transparent"/><div className="absolute left-6 bottom-6 text-white"><p className="text-xs uppercase tracking-widest text-cyan-300 mb-2">KAM Internal Auditors Inc.</p><h3 className="text-2xl font-bold">{label}</h3></div></div>)}</div></div></section>

    <section id="vision" className="py-20 relative text-white overflow-hidden"><div className="absolute inset-0"><img src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg" alt="Financial planning meeting" className="w-full h-full object-cover"/><div className="absolute inset-0 bg-[#06172e]/90"/></div><div className="relative max-w-7xl mx-auto px-5 grid lg:grid-cols-3 gap-8"><div className="p-7 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm"><Eye className="text-cyan-400 mb-4"/><h3 className="text-2xl font-bold mb-3">Our Vision</h3><p className="text-slate-300 leading-7">To become a leading and highly innovative audit, advisory, ICT, and business solutions provider recognized for excellence, professionalism, and client-centered service delivery.</p></div><div className="p-7 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm"><Target className="text-cyan-400 mb-4"/><h3 className="text-2xl font-bold mb-3">Our Mission</h3><p className="text-slate-300 leading-7">To deliver efficient, professional, and innovative solutions that help clients improve governance, strengthen internal controls, enhance operational performance, and embrace modern technology systems.</p></div><div className="p-7 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm"><Star className="text-cyan-400 mb-4"/><h3 className="text-2xl font-bold mb-3">Core Values</h3><div className="grid grid-cols-2 gap-2 text-sm text-slate-300">{values.map(v=><span key={v}>• {v}</span>)}</div></div></div></section>

    <section className="py-20"><div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center"><div><p className="text-cyan-600 uppercase tracking-widest text-xs font-bold">Why Choose Us</p><h2 className="text-4xl font-extrabold text-[#08213f] my-4">Quality. Cost-Effective. Innovative.</h2><p className="text-slate-600 text-lg leading-8">KAM Internal Auditors Inc. delivers professional solutions tailored to each client. Experienced professionals combine technical expertise with modern technology to support operational excellence, accountability and sustainable growth.</p><a href="#contact" className="mt-8 inline-flex items-center gap-2 bg-[#08213f] text-white px-7 py-4 rounded-lg font-bold hover:bg-cyan-700">Request a Consultation <ArrowRight size={18}/></a></div><img src="https://www.genetec.com/binaries/content/gallery/genetecweb/blog/2023/10-cybersecurity-tools-for-it-teams/genetec-cybersecurity-tools-it-professional-server-room.jpg" alt="Technology professional" className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"/></div></section>
  </div>
}
