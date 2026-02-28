import Banner from '@/components/common/Banner';
import ContactForm from '@/components/contact-us/ContactForm';
import ContactInfo from '@/components/contact-us/ContactInfo';
import ContactMap from '@/components/contact-us/ContactMap';
import { data } from '@/data';

export default function ContactUs() {
  const contactData = data.contact;

  return (
    <div className="bg-white">
      <Banner 
        title={contactData.title}
        breadcrumbs={contactData.breadcrumbs}
        backgroundImage={contactData.backgroundImage}
      />
      
      {/* Contact Form and Info Section */}
      <section className="container max-md:px-4 mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] lg:gap-[184px]">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

      {/* Map Section */}
      <ContactMap />
    </div>
  );
}
