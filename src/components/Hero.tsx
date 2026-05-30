const Hero = () => (
  <section className="relative min-h-screen flex items-end overflow-hidden">
    {/* Ken Burns background */}
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="animate-kenBurns absolute inset-[-6%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
    </div>

    {/* Overlays */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/[0.38] to-black/10" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/[0.28] to-transparent" />

    {/* Content */}
    <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-16 pb-24 lg:pb-36">
      <div className="max-w-5xl">
        <p
          className="section-label animate-fadeUp1"
          style={{ color: 'rgba(139,158,138,0.88)', marginBottom: 28 }}
        >
          SUREEPHAK REALESTATE &nbsp;·&nbsp; อสังหาริมทรัพย์ระดับพรีเมียม
        </p>

        <h1
          className="font-display font-black text-white uppercase animate-fadeUp2"
          style={{ fontSize: 'clamp(3.6rem,9.5vw,8rem)', lineHeight: 0.88, letterSpacing: '-0.01em' }}
        >
          FIND YOUR<br />SPACE
        </h1>

        <p
          className="font-display font-light text-white/[0.48] uppercase tracking-[0.22em] mt-5 animate-fadeUp2"
          style={{ fontSize: 'clamp(0.72rem,1.8vw,1.08rem)' }}
        >
          CRAFTED FOR MODERN LIVING
        </p>

        <div className="h-px w-10 bg-[#8B9E8A]/60 my-8 animate-fadeUp3" />

        <p
          className="font-body font-light text-white/[0.65] max-w-lg animate-fadeUp3"
          style={{ fontSize: 'clamp(0.9rem,1.6vw,1.04rem)', lineHeight: 1.95 }}
        >
          Boutique real estate agency specializing in premium homes, condos, and investment properties.
        </p>
        <p className="font-body font-light text-white/[0.32] text-sm max-w-lg mt-2 leading-relaxed animate-fadeUp3">
          เอเจนซี่อสังหาริมทรัพย์ระดับบูทีค เชี่ยวชาญในบ้านหรู คอนโดพรีเมียม และอสังหาริมทรัพย์เพื่อการลงทุน
        </p>

        <div className="flex flex-wrap gap-4 mt-12 animate-fadeUp4">
          <a href="#properties" className="btn-white-solid">VIEW PROPERTIES</a>
          <a href="#contact" className="btn-outline-light">CONTACT US</a>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-10 right-8 lg:right-14 flex flex-col items-center gap-3 animate-fadeUp4">
      <div className="scroll-line animate-scrollPulse" />
      <span
        className="font-body text-[0.46rem] text-white/[0.28] tracking-[0.48em] uppercase"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        SCROLL
      </span>
    </div>
  </section>
);

export default Hero;
