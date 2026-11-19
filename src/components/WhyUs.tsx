import type { ReactNode } from 'react';
import useReveal from '../hooks/useReveal';
import { IcStar, IcSearch, IcHeart } from './Icons';

interface WhyItemProps {
  icon: ReactNode;
  en: string;
  th: string;
  desc: string;
}

const WhyItem = ({ icon, en, th, desc }: WhyItemProps) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal flex flex-col items-center text-center">
      <div className="w-[62px] h-[62px] rounded-full border border-sage/30 flex items-center justify-center mb-7 transition-all duration-300 hover:border-sage hover:bg-sage/10 cursor-default">
        {icon}
      </div>
      <h3 className="font-display font-bold text-charcoal text-[0.8rem] tracking-[0.15em] uppercase mb-2">{en}</h3>
      <p className="font-body text-[0.58rem] text-sage tracking-[0.28em] mb-5">{th}</p>
      <p className="font-body font-light text-warm-gray text-sm leading-relaxed max-w-[260px]">{desc}</p>
    </div>
  );
};

const items: WhyItemProps[] = [
  {
    icon: <IcStar />,
    en: 'Trusted Expertise',
    th: 'ความเชี่ยวชาญที่ไว้วางใจได้',
    desc: "Years of experience navigating Bangkok's luxury property market with precision and integrity.",
  },
  {
    icon: <IcSearch />,
    en: 'Curated Listings',
    th: 'คัดสรรอสังหาริมทรัพย์อย่างพิถีพิถัน',
    desc: 'Every property is personally vetted for quality, location, and investment potential.',
  },
  {
    icon: <IcHeart />,
    en: 'Client-First Approach',
    th: 'ลูกค้าคือหัวใจของเรา',
    desc: 'Your vision is our mission. We listen, advise, and act with your best interests always in mind.',
  },
];

const stats = [
  { num: '200+', label: 'Properties Sold',     labelTh: 'อสังหาฯ ที่ขายแล้ว'    },
  { num: '98%',  label: 'Client Satisfaction', labelTh: 'ความพึงพอใจของลูกค้า' },
  { num: '10+',  label: 'Years Experience',    labelTh: 'ปีแห่งประสบการณ์'      },
];

const WhyUs = () => {
  const headRef  = useReveal<HTMLDivElement>();
  const statsRef = useReveal<HTMLDivElement>();

  return (
    <section id="why-us" className="bg-cream py-28 lg:py-44">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div ref={headRef} className="reveal text-center mb-20 lg:mb-28">
          <div className="section-label justify-center">Why Choose Us · ทำไมต้องเลือกเรา</div>
          <h2
            className="font-display font-black text-charcoal uppercase"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 0.9 }}
          >
            BEYOND EXPECTATIONS
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-14 lg:gap-20">
          {items.map((item) => <WhyItem key={item.en} {...item} />)}
        </div>

        {/* Stats bar */}
        <div ref={statsRef} className="reveal grid grid-cols-3 gap-px bg-sand mt-24 lg:mt-36">
          {stats.map((s) => (
            <div key={s.label} className="bg-cream py-10 px-4 text-center">
              <div
                className="font-display font-black text-sage"
                style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}
              >
                {s.num}
              </div>
              <div className="font-body font-light text-charcoal text-[0.7rem] tracking-[0.14em] uppercase mt-2">
                {s.label}
              </div>
              <div className="font-body font-light text-warm-gray/[0.45] text-[0.6rem] mt-1">
                {s.labelTh}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
