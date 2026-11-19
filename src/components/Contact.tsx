import type { ReactNode } from 'react';
import useReveal from '../hooks/useReveal';
import { IcPhone, IcMsg, IcMail, IcIg, IcArrow } from './Icons';

interface ContactItem {
  label: string;
  labelTh: string;
  value: string;
  href: string;
  icon: ReactNode;
}

const contacts: ContactItem[] = [
  { label: 'Phone',     labelTh: 'โทรศัพท์',  value: '095-882-3695',                 href: 'tel:0958823695',                            icon: <IcPhone /> },
  { label: 'LINE',      labelTh: 'ไลน์',        value: 'charming89',                   href: 'https://line.me/R/ti/p/charming89',          icon: <IcMsg />   },
  { label: 'Email',     labelTh: 'อีเมล',       value: 'info@sureephakrealestate.com', href: 'mailto:info@sureephakrealestate.com',        icon: <IcMail />  },
  { label: 'Instagram', labelTh: 'อินสตาแกรม', value: '@sureephakrealestate',          href: 'https://instagram.com/sureephakrealestate', icon: <IcIg />    },
];

const Contact = () => {
  const lRef = useReveal<HTMLDivElement>();
  const rRef = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="bg-charcoal py-28 lg:py-44">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-44 items-center">

          {/* Left — copy */}
          <div ref={lRef} className="reveal">
            <div className="section-label">
              Get In Touch · ติดต่อเรา
            </div>
            <h2
              className="font-display font-black text-white uppercase"
              style={{ fontSize: 'clamp(2.2rem,4.5vw,3.8rem)', lineHeight: 0.88 }}
            >
              LET'S FIND<br />YOUR DREAM<br />PROPERTY
            </h2>
            <div className="h-px w-10 bg-sage/[0.45] my-8" />
            <p className="font-body font-light text-white/80 leading-[1.95]" style={{ fontSize: '1.04rem' }}>
              Ready to take the next step? Reach out through any channel below and our team will respond within 24 hours.
            </p>
            <p className="font-body font-light text-white/[0.52] text-sm leading-[1.95] mt-2">
              พร้อมก้าวสู่การเป็นเจ้าของอสังหาริมทรัพย์ในฝัน? ติดต่อเราผ่านช่องทางด้านล่าง ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
            </p>
            <a href="tel:0958823695" className="btn-sage inline-block mt-12">
              Schedule a Consultation · นัดหมายปรึกษา
            </a>
          </div>

          {/* Right — contact list */}
          <div ref={rRef} className="reveal flex flex-col gap-3">
            {contacts.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-item">
                <span className="ci-icon">{c.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-body text-[0.57rem] tracking-[0.34em] text-white/[0.55] uppercase mb-1">
                    {c.label} · {c.labelTh}
                  </p>
                  <p className="font-body font-light text-white text-sm">{c.value}</p>
                </div>
                <span className="ci-arrow"><IcArrow /></span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
