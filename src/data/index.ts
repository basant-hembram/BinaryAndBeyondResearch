// Data loading utilities for JSON content management
import heroData from './hero.json';
import faqData from './faq.json';
import aboutData from './about.json';
import blogData from './blog.json';
import calculatorData from './calculator.json';
import disclaimerData from './disclaimer.json';
import privacyPolicyData from './privacyPolicy.json';
import termsOfUseData from './termsOfUse.json';
import teamData from './team.json';
import testimonialsData from './testimonials.json';
import servicesData from './services.json';
import contactData from './contact.json';
import importantLinksData from './importantLinks.json';
import homeData from './home.json';
import mfresearchData from './mfresearch.json';
import trailingReturnsData from './trailingReturns.json';
import becomeDistributorData from './becomeDistributor.json';
import headerData from './header.json';
import footerData from './footer.json';

export const data = {
  hero: heroData,
  faq: faqData,
  about: aboutData,
  blog: blogData,
  calculator: calculatorData,
  disclaimer: disclaimerData,
  privacyPolicy: privacyPolicyData,
  termsOfUse: termsOfUseData,
  team: teamData,
  testimonials: testimonialsData,
  services: servicesData,
  contact: contactData,
  importantLinks: importantLinksData,
  home: homeData,
  mfresearch: mfresearchData,
  trailingReturns: trailingReturnsData,
  becomeDistributor: becomeDistributorData,
  header: headerData,
  footer: footerData,
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

export interface FAQData {
  title: string;
  subtitle: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
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

export interface CalculatorData {
  title: string;
  description: string;
  inputs: Array<{
    label: string;
    type: string;
    min: number;
    max: number;
    default: number;
    step: number;
  }>;
  chart: {
    colors: string[];
    labels: string[];
  };
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

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  social: {
    twitter: string;
    linkedin: string;
    dribbble: string;
  };
}

export interface TeamData {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage: string;
  sectionTitle: string;
  sectionTitleHighlight: string;
  sectionDescription: string;
  founders: TeamMember[];
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

export interface ImportantLinksData {
  title: string;
  titleHighlight: string;
  titlePrefix: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage: string;
}

export interface FundData {
  schemeName: string;
  launchDate: string;
  aum: string;
  ter: string;
  year1Rtn: string;
  year1Rank: string;
  year3Rtn: string;
  year3Rank: string;
  year5Rtn: string;
  year5Rank: string;
  year10Rtn: string;
  year10Rank: string;
  rtnPercent: string;
  rtnRank: string;
  sinceLaunch: string;
}

export interface TrailingReturnsData {
  title: string;
  titleHighlight: string;
  periods: string[];
  filters: {
    categories: string[];
    planTypes: string[];
    selectPeriods: string[];
  };
  entriesOptions: string[];
  sampleData: FundData[];
}