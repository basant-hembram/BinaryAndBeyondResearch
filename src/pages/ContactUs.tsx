import Banner from '../components/common/Banner';
import ContactForm from '../components/contact-us/ContactForm';
import ContactInfo from '../components/contact-us/ContactInfo';
import ContactMap from '../components/contact-us/ContactMap';

const ContactUs = () => {
  return (
    <div className="bg-white">
      <Banner 
        title="We're here! Let's have a talk"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact Us', path: '/contact' }
        ]}
        backgroundImage="/images/contact-banner.jpg"
      />
      
      {/* Contact Form and Info Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] lg:gap-[184px]">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

      {/* Map Section */}
      <ContactMap />
    </div>
  );
};

export default ContactUs;
