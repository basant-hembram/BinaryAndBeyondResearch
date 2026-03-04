import { data } from '@/data';

interface ContactCard {
  icon: string;
  title: string;
  description: string;
  contact: string;
  link: string;
}

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="M2 8l10 6 10-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.29 21 3 13.71 3 4.5a1 1 0 011-1H7.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
  </svg>
);

const ContactInfo = () => {
  const contactData = (data as any).contact;
  const rightPanel = contactData?.rightPanel;
  const cards = (rightPanel?.cards ?? []) as ContactCard[];

  return (
    <div data-gsap="fade-left">
      <div className="flex items-center gap-3 mb-3">
        <h2 className="text-[#151D26] text-[28px] md:text-[34px] font-semibold">{rightPanel?.heading}</h2>
      </div>

      <p className="text-[#575455] text-[15px] mb-8 leading-relaxed">{rightPanel?.subheading}</p>

      <div className="space-y-0 divide-y divide-[#E5E5E5] border-t border-[#E5E5E5]">
        {cards.map((card) => (
          <div key={card.title} className="py-6 flex items-start gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
              card.icon === 'email' ? 'bg-[#FEF0EE] text-[#F04438]' : 'bg-[#EDE9FF] text-[#6941C6]'
            }`}>
              {card.icon === 'email' ? <EmailIcon /> : <PhoneIcon />}
            </div>
            <div>
              <h3 className="text-[#151D26] text-[17px] font-semibold mb-1">{card.title}</h3>
              <p className="text-[#575455] text-[14px] mb-2">{card.description}</p>
              <a href={card.link} className="text-[#4D3D84] text-[14px] font-medium hover:underline">
                {card.contact}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
