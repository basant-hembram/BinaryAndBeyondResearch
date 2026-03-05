// Data loading utilities for JSON content management
import heroData from './hero.json';
import aboutData from './about.json';
import blogData from './blog.json';
import disclaimerData from './disclaimer.json';
import privacyPolicyData from './privacyPolicy.json';
import termsOfUseData from './termsOfUse.json';
import testimonialsData from './testimonials.json';
import servicesData from './services.json';
import contactData from './contact.json';
import homeData from './home.json';
import headerData from './header.json';
import footerData from './footer.json';
import ourWorkData from './ourWork.json';
import panelServicesData from './panelServices.json';
import careerData from './career.json';
import membershipData from './membership.json';

export const data = {
  hero: heroData,
  about: aboutData,
  blog: blogData,
  disclaimer: disclaimerData,
  privacyPolicy: privacyPolicyData,
  termsOfUse: termsOfUseData,
  testimonials: testimonialsData,
  services: servicesData,
  contact: contactData,
  home: homeData,
  header: headerData,
  footer: footerData,
  ourWork: ourWorkData,
  panelServices: panelServicesData,
  career: careerData,
  membership: membershipData,
};

// Type definitions for the data
export interface HeroData {
  title: string;
  subtitle: string;
  ctaButton: {
    text: string;
    icon: string;
  };
  image: {
    src: string;
    alt: string;
  };
  branding: {
    title: string;
    companyName: string;
  };
  stats: Array<{
    value: string;
    label: string;
  }>;
  whatsapp: {
    number: string;
    url: string;
  };
}

export interface AboutData {
  title: string;
  description: string[];
  stats: Array<{
    value: string;
    label: string;
  }>;
  image: {
    src: string;
    alt: string;
  };
}

export interface BlogData {
  title: string;
  blogs: Array<{
    id: number;
    image: string;
    date: string;
    title: string;
    description: string;
  }>;
}

export interface PageSection {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface BreadcrumbItem {
  label: string;
  path: string;
}

export interface DisclaimerData {
  title: string;
  titleHighlight: string;
  sections: PageSection[];
  breadcrumbs: BreadcrumbItem[];
  backgroundImage: string;
}

export interface PrivacyPolicyData {
  title: string;
  titleHighlight: string;
  sections: PageSection[];
  breadcrumbs: BreadcrumbItem[];
  backgroundImage: string;
}

export interface TermsOfUseData {
  title: string;
  titleHighlight: string;
  sections: PageSection[];
  breadcrumbs: BreadcrumbItem[];
  backgroundImage: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface TestimonialsData {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage: string;
  sectionTitle: string;
  sectionTitleHighlight: string;
  sectionDescription: string;
  testimonials: Testimonial[];
}

export interface ServicesData {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage: string;
}

export interface ContactData {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage: string;
}

