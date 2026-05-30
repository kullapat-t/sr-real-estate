import { useState, useEffect } from 'react';
import BrandLogo from './BrandLogo';

const links = [
  { href: '#properties', label: 'Properties' },
  { href: '#about',      label: 'About'      },
  { href: '#why-us',     label: 'Why Us'     },
  { href: '#contact',    label: 'Contact'    },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(prev => {
      const next = window.scrollY > 70;
      return prev !== next ? next : prev;
    });
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#FAF8F5]/96 backdrop-blur-md border-b border-sand/70' : ''}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 h-[74px] flex items-center justify-between">
        <BrandLogo
          href="#"
          titleClassName={`transition-colors duration-300 ${scrolled ? 'text-charcoal' : 'text-white'}`}
          subtitleClassName={`transition-colors duration-300 ${scrolled ? 'text-sage' : 'text-white/40'}`}
        />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <a key={l.href} href={l.href} className={`nav-link ${scrolled ? 'nav-dark' : 'nav-light'}`}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-sage ml-2">Book Consultation</a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[6px] p-1 cursor-pointer bg-transparent border-0"
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-white'} ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block h-px transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-white'} ${open ? 'opacity-0 w-0' : 'w-4'}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-white'} ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-cream ${open ? 'max-h-72 border-b border-sand' : 'max-h-0'}`}>
        <div className="px-6 py-8 flex flex-col gap-5">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body font-light text-xs tracking-[0.26em] text-charcoal uppercase hover:text-sage transition-colors no-underline"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-sage w-fit mt-3">
            Book Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
