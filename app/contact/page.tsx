import ScrollAnimations from '@/components/common/ScrollAnimations';
import PageHero from '@/components/common/PageHero';
import ContactForm from '@/components/contact-us/ContactForm';
import ContactInfo from '@/components/contact-us/ContactInfo';
import { data } from '@/data';

export default function ContactUs() {
  const contactData = (data as any).contact;
  const locations = contactData.locations as { country: string; address: string }[];

  return (
    <div className="bg-none">
      <ScrollAnimations />
      <PageHero title={contactData.pageHero.title} subtitle={contactData.pageHero.subtitle} />

      {/* Location cards */}
      <section className="container max-md:px-4 mx-auto pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-gsap="stagger-up">
          {locations.map((loc) => (
            <div key={loc.country} className="rounded-2xl border border-[#E5E5E5] p-6 shadow-sm">
              <div className="mb-3 w-9 h-9 rounded-full bg-[#4D3D84] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.016.069-.04a22.031 22.031 0 003.7-2.987C18.785 16.78 21 13.493 21 9.9a9 9 0 10-18 0c0 3.594 2.214 6.882 4.842 9.424a22.035 22.035 0 003.698 2.987zM12 13.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-[#151D26] text-[18px] font-semibold mb-2">{loc.country}</h3>
              <p className="text-[#575455] text-[14px] leading-relaxed">{loc.address}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Info */}
      <section className="container max-md:px-4 mx-auto py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </div>
  );
}
