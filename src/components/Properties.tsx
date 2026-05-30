import useReveal from '../hooks/useReveal';

interface Property {
  name: string;
  nameTh: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqm: number;
  tag: string;
  img: string;
}

const PROPS: Property[] = [
  {
    name: 'The Residences at Sathorn',
    nameTh: 'เดอะ เรสซิเดนซ์ แอท สาทร',
    location: 'Sathorn, Bangkok',
    price: '฿45,000,000',
    beds: 3, baths: 3, sqm: 285,
    tag: 'FEATURED',
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Silom Grand Residence',
    nameTh: 'สีลม แกรนด์ เรสซิเดนซ์',
    location: 'Silom, Bangkok',
    price: '฿28,500,000',
    beds: 2, baths: 2, sqm: 180,
    tag: 'NEW',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sukhumvit Sky Penthouse',
    nameTh: 'สุขุมวิท สกาย เพนท์เฮาส์',
    location: 'Sukhumvit, Bangkok',
    price: '฿72,000,000',
    beds: 4, baths: 4, sqm: 420,
    tag: 'EXCLUSIVE',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  },
];

const PropCard = ({ p }: { p: Property }) => (
  <div className="property-card bg-white flex flex-col" style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.05)' }}>
    <div className="aspect-[3/2] relative overflow-hidden bg-sand">
      <img
        src={p.img}
        alt={p.name}
        loading="lazy"
        decoding="async"
        className="card-img w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      <span className="absolute top-4 left-4 font-body text-[0.57rem] tracking-[0.25em] bg-sage text-white px-3 py-1.5">
        {p.tag}
      </span>
    </div>
    <div className="p-7 flex flex-col flex-1">
      <p className="font-body text-[0.58rem] tracking-[0.28em] text-sage uppercase mb-2">{p.location}</p>
      <h3 className="font-display font-bold text-charcoal leading-tight mb-1" style={{ fontSize: '1.08rem' }}>
        {p.name}
      </h3>
      <p className="font-body font-light text-warm-gray/50 text-xs mb-5">{p.nameTh}</p>
      <div className="h-px bg-beige mb-5" />
      <div className="flex items-end justify-between mt-auto">
        <span className="font-display font-black text-charcoal" style={{ fontSize: '1.28rem' }}>
          {p.price}
        </span>
        <div className="flex gap-2 font-body font-light text-warm-gray text-xs items-center">
          <span>{p.beds} bd</span>
          <span className="text-sand">·</span>
          <span>{p.baths} ba</span>
          <span className="text-sand">·</span>
          <span>{p.sqm} m²</span>
        </div>
      </div>
      <a href="#contact" className="btn-dark text-center mt-6 block">View Property</a>
    </div>
  </div>
);

const Properties = () => {
  const headRef  = useReveal<HTMLDivElement>();
  const cardsRef = useReveal<HTMLDivElement>();

  return (
    <section id="properties" className="bg-beige py-28 lg:py-44">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div
          ref={headRef}
          className="reveal flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-20"
        >
          <div>
            <div className="section-label">Featured Properties · อสังหาริมทรัพย์แนะนำ</div>
            <h2
              className="font-display font-black text-charcoal uppercase"
              style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 0.9 }}
            >
              PREMIUM<br />SELECTIONS
            </h2>
          </div>
          <a href="#contact" className="btn-dark w-fit flex-shrink-0">View All Properties</a>
        </div>

        <div ref={cardsRef} className="reveal grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROPS.map((p) => <PropCard key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  );
};

export default Properties;
