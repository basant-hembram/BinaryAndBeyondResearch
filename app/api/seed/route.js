import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import CaseStudy from '@/models/CaseStudy';
import OurWork from '@/models/OurWork';
import Service from '@/models/Service';
import PanelService from '@/models/PanelService';

const CASE_STUDIES = [
  { title: 'Online Shopping Behaviour', image: '/images/photo-1629425733761-caae3b5f2e50.avif', slug: 'online-shopping-behaviour', category: 'Consumer Research', description: 'Deep-dive analysis into online shopping patterns across demographics.', thumbnail: '/images/photo-1629425733761-caae3b5f2e50.avif', link: '' },
  { title: 'Mutual Fund Growth Analysis', image: '/images/photo-1713946598501-d6b32e7c2464.avif', slug: 'mutual-fund-growth-analysis', category: 'Financial Research', description: 'Comprehensive study on mutual fund performance over 5 years.', thumbnail: '/images/photo-1713946598501-d6b32e7c2464.avif', link: '' },
  { title: 'SIP Investment Trends', image: '/images/photo-1762341104634-998bbee0ccba.avif', slug: 'sip-investment-trends', category: 'Financial Research', description: 'Trends and insights from SIP investment behaviour study.', thumbnail: '/images/photo-1762341104634-998bbee0ccba.avif', link: '' },
  { title: 'Healthcare Market Insights', image: '/images/photo-1758691736498-422201cc57da.avif', slug: 'healthcare-market-insights', category: 'Healthcare', description: 'Market intelligence report on post-pandemic healthcare consumption.', thumbnail: '/images/photo-1758691736498-422201cc57da.avif', link: '' },
  { title: 'Equity Research Report', image: '/images/photo-1737660739682-238840037537.avif', slug: 'equity-research-report', category: 'Financial Research', description: 'Equity market analysis covering top 50 mid-cap stocks.', thumbnail: '/images/photo-1737660739682-238840037537.avif', link: '' },
  { title: 'Retirement Planning Study', image: '/images/photo-1639616239669-104e51ca79bc.avif', slug: 'retirement-planning-study', category: 'Survey Research', description: 'Survey of 2000+ respondents on retirement readiness.', thumbnail: '/images/photo-1639616239669-104e51ca79bc.avif', link: '' },
];

const OUR_WORKS = [
  { title: 'Questionnaire Designing', image: '/images/photo-1541560052-77ec1bbc09f7.avif', description: 'No survey can achieve success without a well-designed questionnaire. We design questionnaires to ensure accurate data collection so results are interpretable and generalisable.', order: 1 },
  { title: 'Survey Programming', image: '/images/photo-1627599936744-51d288f89af4.avif', description: 'Our Tech Team uses the latest technology to design and execute surveys. We ensure engaging, interactive survey designs with highest levels of quality in back-end coding, logic, and quota work.', order: 2 },
  { title: 'Data Collection', image: '/images/photo-1628348068343-c6a848d2b6dd.avif', description: 'Data collection is a systematic process of gathering observations or measurements. We conduct both in-person and online data collection methods to deliver comprehensive datasets.', order: 3 },
  { title: 'Data Processing and Analysis', image: '/images/photo-1629425733761-caae3b5f2e50.avif', description: 'Our expert team of data scientists processes raw data and converts it into readable formats using machine learning algorithms and statistical analysis methods.', order: 4 },
  { title: 'Reports and Presentation', image: '/images/photo-1762341104634-998bbee0ccba.avif', description: 'Our team presents data using graphical techniques to give clients a clear view of the market place, including visual charts, maps, and comparative data sets.', order: 5 },
];

const SERVICES = [
  { title: 'Product Testing', description: 'We assist our clients to understand customers\' behaviour towards their products by providing pre-product and post-product testing. We guide clients in decisions on new product launches and market positioning.', image: '/images/photo-1713946598501-d6b32e7c2464.avif', icon: '', slug: 'product-testing', category: 'Research' },
  { title: 'Satisfactory and Loyal Approach', description: 'To maintain a firm and leading place in the market, the main key feature is the growth of satisfied and loyal customers. We help clients analyse factors that influence loyalty, advocacy and repeat purchase.', image: '/images/photo-1639616239669-104e51ca79bc.avif', icon: '', slug: 'satisfactory-loyal-approach', category: 'Research' },
  { title: 'Healthcare Market Research', description: 'In healthcare, the purchase of services or products is never optional. Healthcare Market Research helps to innovate by identifying practical and profitable ways to enhance products and services.', image: '/images/photo-1629425733761-caae3b5f2e50.avif', icon: '', slug: 'healthcare-market-research', category: 'Healthcare' },
  { title: 'Market Segmentation', description: 'Customer behaviour varies in respect of time, age, gender and lifestyle. We assist clients to identify the most valuable customer segmentation for their product and service to gain maximum profits and ROI.', image: '/images/photo-1737660739682-238840037537.avif', icon: '', slug: 'market-segmentation', category: 'Research' },
  { title: 'Advertising Testing', description: 'We help clients get the maximum opportunity in achieving their business goals and also help minimise needless risk through rigorous advertising effectiveness testing and analysis.', image: '/images/photo-1758691736498-422201cc57da.avif', icon: '', slug: 'advertising-testing', category: 'Research' },
  { title: 'Brand Assessments', description: 'We help clients know the real value of their brands and positioning through the eyes of their target customers and to make necessary changes to adapt to a changing marketplace.', image: '/images/photo-1762341104634-998bbee0ccba.avif', icon: '', slug: 'brand-assessments', category: 'Research' },
];

const PANEL_SERVICES = [
  { title: 'B2B Industry Panels', description: 'Our B2B panel consists of professionals with different levels of seniority, from entry level to top management from different industry sectors, ensuring accurate B2B research insights.', image: '/images/photo-1639616239683-ca6243ed6a0c.avif', icon: '', slug: 'b2b-industry-panels' },
  { title: 'Consumer Panels', description: 'Our proprietary Consumer Panel is comprised of 1 million members that can deliver a representative sample of the online population, giving you accurate consumer insights at scale.', image: '/images/photo-1541560052-77ec1bbc09f7.avif', icon: '', slug: 'consumer-panels' },
  { title: 'Healthcare Panels', description: 'We have extensive healthcare panel and along with our CATI team we can cater to even niche segments. Our healthcare panelists include doctors, specialists, and medical decision-makers.', image: '/images/photo-1628348068343-c6a848d2b6dd.avif', icon: '', slug: 'healthcare-panels' },
];

export async function POST() {
  try {
    await connectDB();

    // Clear existing data and seed fresh
    await Promise.all([
      CaseStudy.deleteMany({}),
      OurWork.deleteMany({}),
      Service.deleteMany({}),
      PanelService.deleteMany({}),
    ]);

    const [caseStudies, ourWorks, services, panelServices] = await Promise.all([
      CaseStudy.insertMany(CASE_STUDIES),
      OurWork.insertMany(OUR_WORKS),
      Service.insertMany(SERVICES),
      PanelService.insertMany(PANEL_SERVICES),
    ]);

    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully',
      counts: {
        caseStudies: caseStudies.length,
        ourWork: ourWorks.length,
        services: services.length,
        panelServices: panelServices.length,
      },
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
