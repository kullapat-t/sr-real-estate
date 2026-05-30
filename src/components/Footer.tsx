import BrandLogo from './BrandLogo';

const footerLinks = [
  { label: 'Properties', href: '#properties' },
  { label: 'About',      href: '#about'      },
  { label: 'Contact',    href: '#contact'    },
];

const Footer = () => (
  <footer className="bg-footer py-8">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-5">
      <BrandLogo titleSize="text-[0.88rem]" />
      <p className="font-body font-light text-white/[0.42] text-xs tracking-wider text-center">
        © 2026 Sureephak Realestate. All rights reserved.
      </p>
      <div className="flex gap-7">
        {footerLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="font-body text-[0.6rem] tracking-[0.22em] text-white/[0.45] uppercase hover:text-white transition-colors no-underline"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
