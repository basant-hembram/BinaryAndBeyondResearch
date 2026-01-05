import Banner from '../components/common/Banner';
import AboutSection from '../components/about/AboutSection';
import WhyTrustUs from '../components/about/WhyTrustUs';
import WhyChooseUs from '../components/about/WhyChooseUs';
import OurFounders from '../components/about/OurFounders';

const AboutUs = () => {
  return (
    <div className="bg-white">
      <Banner 
        title="India's Fastest Growing Mutual Fund<br />Distributor"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About Us', path: '/about' }
        ]}
        backgroundImage="/images/banner-bg.jpg"
      />
      <AboutSection />
      <WhyTrustUs />
      <WhyChooseUs />
      <OurFounders />
    </div>
  );
};

export default AboutUs;
