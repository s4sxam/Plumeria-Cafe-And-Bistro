
import React, { useState, useEffect, useRef } from 'react';
import { 
  Coffee, 
  Leaf, 
  Triangle, 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Star,
  ChevronRight,
  Menu as MenuIcon,
  X,
  UtensilsCrossed,
  IceCream,
  Calendar,
  Sparkles,
  ArrowRight,
  Copy,
  Check
} from 'lucide-react';
import { MenuCategory } from './types';
import { MENU_DATA, CONTACT_INFO } from './constants';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(MenuCategory.CAFE);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuSticky, setIsMenuSticky] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      if (menuRef.current) {
        const menuTop = menuRef.current.offsetTop;
        setIsMenuSticky(window.scrollY > menuTop - 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(CONTACT_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#1a0f0a] overflow-x-hidden selection:bg-[#D4AF37] selection:text-[#1a0f0a]">
      {/* Navbar */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-[#1a0f0a]/80 backdrop-blur-2xl py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="bg-[#D4AF37] p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-yellow-900/20">
                <Coffee className="text-[#1a0f0a] h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-[#F5F5DC] leading-none uppercase italic">PLUMERIA</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-extrabold">Bistro & Espresso</span>
            </div>
          </div>

          <div className="hidden md:flex gap-10 items-center text-xs font-bold uppercase tracking-[0.2em]">
            {['menu', 'events', 'location'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className="text-[#F5F5DC]/70 hover:text-[#D4AF37] transition-all relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all group-hover:w-full"></span>
              </button>
            ))}
            <a href={`tel:${CONTACT_INFO.phone}`} className="bg-[#D4AF37] text-[#1a0f0a] px-7 py-3 rounded-xl font-black hover:bg-[#F5F5DC] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-gold-glow">
              <Phone size={14} className="fill-current" /> CALL TO ORDER
            </a>
          </div>

          <button className="md:hidden text-[#F5F5DC] p-2 bg-white/5 rounded-lg" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[110] bg-[#1a0f0a] flex flex-col items-center justify-center gap-10 text-[#F5F5DC] transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button className="absolute top-8 right-8 text-[#D4AF37]" onClick={() => setMobileMenuOpen(false)}><X size={36} /></button>
        {['menu', 'events', 'location'].map((item) => (
          <button key={item} onClick={() => scrollToSection(item)} className="text-4xl font-black uppercase tracking-tighter hover:text-[#D4AF37] transition-colors italic">{item}</button>
        ))}
        <a href={`tel:${CONTACT_INFO.phone}`} className="mt-4 bg-[#D4AF37] text-[#1a0f0a] px-8 py-4 rounded-2xl flex items-center gap-3 text-xl font-black shadow-gold-glow">
          <Phone /> {CONTACT_INFO.phone}
        </a>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-20"></div>
          <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/10 rounded-full blur-[150px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-20 pt-20">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] items-center gap-12">
            <div className="text-left animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1a0f0a] px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.2em] mb-8">
                <Sparkles size={12} className="fill-current" />
                NEW: LA VIE BONNEDI FUSION MENU
              </div>
              
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-black text-[#F5F5DC] leading-[0.85] mb-8 tracking-tighter uppercase italic">
                Habra's Most <br /> 
                <span className="text-[#D4AF37] text-outline-white">Craveable</span> <br /> 
                Bistro.
              </h1>
              
              <p className="text-lg md:text-xl text-[#F5F5DC]/50 max-w-xl mb-12 font-medium leading-relaxed">
                Experience the golden standard of gourmet appetizers and artisanal coffee. Every crunch, every sip, a masterclass in flavor.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="group relative px-12 py-5 bg-[#D4AF37] text-[#1a0f0a] font-black rounded-2xl text-xl uppercase tracking-tighter hover:scale-105 transition-all shadow-gold-glow overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    EXPLORE MENU <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                <button 
                   onClick={() => scrollToSection('location')}
                  className="px-12 py-5 border-2 border-white/10 text-white font-black rounded-2xl text-xl uppercase tracking-tighter hover:bg-white hover:text-[#1a0f0a] transition-all backdrop-blur-sm"
                >
                  Find Us
                </button>
              </div>
            </div>

            <div className="relative group lg:h-[700px] flex items-center justify-center animate-in fade-in zoom-in duration-1000 delay-300">
              <div className="absolute w-[120%] h-[120%] bg-[#D4AF37]/5 rounded-full blur-[100px] group-hover:bg-[#D4AF37]/10 transition-colors"></div>
              <div className="relative z-10 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1562607374-046645398d24?auto=format&fit=crop&w=1000&q=80" 
                  className="w-full max-w-[550px] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.8)] rounded-[4rem] lg:translate-x-12 hover:rotate-2 transition-transform duration-500"
                  alt="Golden Fried Prawns"
                />
                <div className="absolute -top-6 -right-4 bg-[#F5F5DC] text-[#1a0f0a] p-6 rounded-full shadow-2xl flex flex-col items-center justify-center rotate-12 group-hover:rotate-0 transition-transform">
                    <span className="text-[10px] font-black uppercase tracking-tighter opacity-50 leading-none mb-1">Starters</span>
                    <span className="text-3xl font-black">₹180</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 relative overflow-hidden bg-[#120905]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-[#1a0f0a] border border-white/5 rounded-[4rem] overflow-hidden shadow-2xl grid md:grid-cols-2">
            <div className="relative h-96 md:h-full min-h-[550px]">
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80" className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000" alt="Event" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a] via-transparent"></div>
              <div className="absolute bottom-12 left-12">
                <div className="flex items-center gap-3 text-[#D4AF37] mb-4">
                  <Calendar size={20} className="fill-current" />
                  <span className="font-black tracking-[0.2em] uppercase text-xs">MAY 30 - JUNE 1</span>
                </div>
                <h3 className="text-5xl font-black text-[#F5F5DC] italic uppercase leading-none tracking-tighter">LA VIE <br /> BONNEDI</h3>
              </div>
            </div>
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <h2 className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-black mb-8 block">Exclusive Showcase</h2>
              <h3 className="text-4xl lg:text-5xl text-[#F5F5DC] mb-8 font-black uppercase tracking-tighter italic">Gourmet Bengali Fusion Feast</h3>
              <p className="text-[#F5F5DC]/40 mb-12 font-medium leading-relaxed">Experience a curated limited-time menu that pays homage to royal Bengali heritage through a modern bistro lens.</p>
              
              <div className="space-y-4 mb-12">
                {["Baked Gandhoraj Vetki", "Calcutta Style Scotch Eggs", "Nalengur Crème Brûlée"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-[#F5F5DC] group">
                    <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#1a0f0a] transition-all">
                      <Sparkles size={16} />
                    </div>
                    <span className="font-bold text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-5 bg-[#D4AF37] text-[#1a0f0a] font-black rounded-2xl hover:bg-[#F5F5DC] transition-all shadow-gold-glow uppercase tracking-widest text-sm italic">
                RESERVE YOUR TABLE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" ref={menuRef} className="py-24 bg-[#F5F5DC] rounded-t-[5rem]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.5em] mb-4 block">Our Culinary Map</span>
            <h2 className="text-5xl md:text-7xl font-black text-[#1a0f0a] mb-6 tracking-tighter uppercase italic">The Menu Explorer</h2>
            <div className="h-1.5 w-24 bg-[#D4AF37] mx-auto rounded-full"></div>
          </div>

          {/* Sticky Category Nav */}
          <div className={`transition-all duration-300 ${isMenuSticky ? 'fixed top-0 left-0 w-full z-50 bg-[#F5F5DC]/90 backdrop-blur-xl py-4 shadow-xl border-b border-[#1a0f0a]/5' : ''}`}>
            <div className="container mx-auto px-6 flex overflow-x-auto gap-4 no-scrollbar justify-start md:justify-center scroll-smooth">
              {Object.values(MenuCategory).map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); if(isMenuSticky) scrollToSection('menu'); }}
                  className={`flex-shrink-0 px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                    activeCategory === cat 
                      ? 'bg-[#1a0f0a] text-[#D4AF37] shadow-xl scale-105' 
                      : 'bg-[#1a0f0a]/5 text-[#1a0f0a]/40 hover:bg-[#1a0f0a]/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div key={activeCategory} className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mt-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {MENU_DATA[activeCategory].subcategories.map((sub, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center gap-4 mb-12">
                  <div className="bg-[#1a0f0a] p-3 rounded-2xl text-[#D4AF37] shadow-xl">
                    {activeCategory === MenuCategory.CAFE ? <Coffee size={24} /> : 
                     activeCategory === MenuCategory.ICE_CREAM ? <IceCream size={24} /> : 
                     <UtensilsCrossed size={24} />}
                  </div>
                  <h3 className="text-2xl font-black text-[#1a0f0a] uppercase tracking-tighter italic">{sub.title}</h3>
                </div>
                <div className="space-y-12">
                  {sub.items.map((item, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between items-start mb-2 gap-4">
                        <div className="flex items-center gap-3">
                          <span className="font-black text-xl text-[#1a0f0a] group-hover:text-[#D4AF37] transition-all tracking-tighter uppercase">{item.name}</span>
                          {item.isVeg ? <Leaf size={14} className="text-green-600 fill-current opacity-30" /> : <Triangle size={14} className="text-red-600 fill-red-600 rotate-180 opacity-30" />}
                          {item.isBestseller && <span className="text-[8px] bg-[#D4AF37] text-[#1a0f0a] px-2 py-0.5 rounded font-black uppercase">BEST</span>}
                        </div>
                        <div className="h-[1px] flex-grow mt-4 border-t border-dashed border-[#1a0f0a]/10 group-hover:border-[#D4AF37]/50 transition-colors"></div>
                        <span className="font-black text-[#D4AF37] text-xl">₹{item.price}</span>
                      </div>
                      {item.description && <p className="text-sm text-[#1a0f0a]/40 italic font-medium leading-relaxed">{item.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-32 bg-[#FDFDF5]">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.5em] mb-4 block">Visit Our Kitchen</span>
            <h2 className="text-6xl font-black text-[#1a0f0a] mb-12 tracking-tighter uppercase italic">Find Us In <br /> Habra</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-[#1a0f0a]/5 shadow-xl group hover:scale-[1.02] transition-all cursor-pointer" onClick={copyAddress}>
                <div className="flex justify-between items-start">
                  <div className="flex gap-6">
                    <div className="bg-[#1a0f0a] p-4 rounded-2xl text-[#D4AF37]"><MapPin size={24} /></div>
                    <div>
                      <h4 className="text-lg font-black text-[#1a0f0a] uppercase tracking-tighter mb-1">Our Address</h4>
                      <p className="text-[#1a0f0a]/50 text-sm font-medium leading-relaxed max-w-xs">{CONTACT_INFO.address}</p>
                    </div>
                  </div>
                  <div className="text-[#D4AF37]">{copied ? <Check size={20} /> : <Copy size={20} className="opacity-20" />}</div>
                </div>
              </div>
              <div className="flex gap-8 px-4">
                <div className="flex gap-4 items-center">
                   <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-[#1a0f0a]/30">Open Daily — Until 10:30 PM</span>
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-wrap gap-6">
              <a href={CONTACT_INFO.googleMaps} target="_blank" rel="noopener noreferrer" className="bg-[#1a0f0a] text-[#F5F5DC] px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:text-[#1a0f0a] transition-all shadow-2xl flex items-center gap-3 italic">
                GET DIRECTIONS <ArrowRight size={18} />
              </a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="px-10 py-5 border-2 border-[#1a0f0a]/10 text-[#1a0f0a] font-black rounded-2xl uppercase tracking-widest text-xs hover:bg-[#1a0f0a] hover:text-white transition-all italic">
                Call Bistro
              </a>
            </div>
          </div>
          <div className="relative h-[600px] bg-[#1a0f0a] rounded-[4rem] p-4 border-[10px] border-[#1a0f0a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)]">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.801646271239!2d88.625686!3d22.846665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bc2773999999%3A0xc0747473727271!2sHabra%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-1000 rounded-[3rem]"></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a0f0a] text-[#F5F5DC] pt-32 pb-12 rounded-t-[5rem]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
            <div>
              <div className="flex items-center gap-3 mb-10 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <div className="bg-[#D4AF37] p-2 rounded-xl group-hover:rotate-12 transition-transform">
                  <Coffee className="text-[#1a0f0a] h-8 w-8" />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black tracking-tighter italic leading-none">PLUMERIA</span>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-extrabold leading-none">Habra's Finest</span>
                </div>
              </div>
              <p className="text-[#F5F5DC]/20 font-medium text-sm leading-relaxed mb-10 italic">Redefining Habra's dining culture through bold flavors and artisanal craftsmanship.</p>
              <div className="flex gap-4">
                {[Instagram, Facebook].map((Icon, i) => (
                  <div key={i} className="h-12 w-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1a0f0a] transition-all cursor-pointer group">
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[#D4AF37] font-black uppercase tracking-[0.4em] text-[10px] mb-10">Bistro Menu</h4>
              <ul className="space-y-6">
                {Object.values(MenuCategory).map(cat => (
                  <li key={cat}>
                    <button onClick={() => { setActiveCategory(cat); scrollToSection('menu'); }} className="text-[#F5F5DC]/40 hover:text-white transition-all font-bold uppercase tracking-[0.2em] text-[9px] flex items-center gap-3 group">
                      <span className="w-0 h-[1px] bg-[#D4AF37] group-hover:w-4 transition-all"></span>
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h4 className="text-[#D4AF37] font-black uppercase tracking-[0.4em] text-[10px] mb-10">Join The Circle</h4>
              <p className="text-[10px] text-[#F5F5DC]/20 mb-8 uppercase tracking-[0.3em] font-black">GET EXCLUSIVE UPDATES & NEW MENU DROPS.</p>
              <div className="flex gap-4">
                <input type="email" placeholder="EMAIL ADDRESS" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 w-full focus:outline-none focus:border-[#D4AF37] transition-all text-[10px] font-black tracking-[0.2em] text-white" />
                <button className="bg-[#D4AF37] text-[#1a0f0a] px-8 rounded-2xl hover:bg-white transition-all shadow-gold-glow">
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[#F5F5DC]/10 text-[9px] font-black uppercase tracking-[0.5em]">
            <p>© 2024 PLUMERIA KITCHEN | ESPRESSO. ARTISANAL BISTRO IN HABRA.</p>
            <div className="flex gap-12">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
              <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
