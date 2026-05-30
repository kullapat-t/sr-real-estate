import useReveal from '../hooks/useReveal';

const features = [
  {
    en: 'Luxury Properties',
    th: 'อสังหาริมทรัพย์หรูระดับพรีเมียม',
    desc: "Curated selection of Bangkok's finest homes and condominiums in the most sought-after locations.",
  },
  {
    en: 'Investment Consulting',
    th: 'ที่ปรึกษาด้านการลงทุนอสังหาฯ',
    desc: 'Strategic guidance tailored to your financial goals and long-term lifestyle aspirations.',
  },
  {
    en: 'Personalized Service',
    th: 'บริการส่วนตัวระดับสูงสุด',
    desc: 'White-glove concierge care from the first viewing to final signing and beyond.',
  },
];

const About = () => {
  const imgRef  = useReveal<HTMLDivElement>();
  const textRef = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="bg-cream py-28 lg:py-44">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">

          {/* Image column */}
          <div ref={imgRef} className="reveal relative">
            <div className="aspect-[4/5] overflow-hidden bg-sand">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80"
                alt="Luxury interior"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-[7000ms] hover:scale-105"
              />
            </div>
            {/* Decorative corner frame */}
            <div className="absolute -bottom-5 -right-5 w-36 h-36 border border-sage/[0.22] -z-10 hidden lg:block" />
          </div>

          {/* Text column */}
          <div ref={textRef} className="reveal">
            <div className="section-label">About Us · เกี่ยวกับเรา</div>
            <h2
              className="font-display font-black text-charcoal uppercase"
              style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 0.9, letterSpacing: '-0.01em' }}
            >
              WE REDEFINE<br />LUXURY LIVING
            </h2>
            <div className="h-px w-10 bg-sage mt-8 mb-7" />
            <p className="font-body font-light text-warm-gray leading-[1.95] mb-2" style={{ fontSize: '1.04rem' }}>
              Sureephak Realestate is a boutique agency dedicated to connecting discerning clients with exceptional properties — combining deep market expertise with refined personal care.
            </p>
            <p className="font-body font-light text-warm-gray/[0.48] text-sm leading-[1.95] mb-12">
              สุรีพักอสังหาริมทรัพย์ คือเอเจนซี่ระดับบูทีค มุ่งมั่นในการนำเสนออสังหาริมทรัพย์คุณภาพสูง ให้แก่ลูกค้าที่ต้องการความพิเศษ ด้วยความเชี่ยวชาญและความใส่ใจในทุกรายละเอียด
            </p>

            <div className="flex flex-col gap-8">
              {features.map((f) => (
                <div key={f.en} className="flex gap-5 items-start group cursor-default">
                  <div className="w-px self-stretch bg-sand group-hover:bg-sage transition-colors duration-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display font-bold text-charcoal text-[0.78rem] tracking-[0.15em] uppercase">
                      {f.en}
                    </h3>
                    <p className="font-body text-[0.58rem] text-sage tracking-[0.28em] mt-0.5 mb-2">{f.th}</p>
                    <p className="font-body font-light text-warm-gray text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
