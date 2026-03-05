import type { Metadata } from 'next';
import ScrollAnimations from '@/components/common/ScrollAnimations';
import PageHero from '@/components/common/PageHero';
import PanelServicesContent from '@/components/panel-services/PanelServicesContent';

export const metadata: Metadata = {
  title: 'Panel Services | Binary and Beyond Research',
  description: 'Access our high-quality research panels across consumer, B2B, and healthcare segments. Binary and Beyond Research connects you with the right respondents for accurate, actionable insights.',
  keywords: 'panel services, research panels, consumer panels, B2B panels, healthcare panels, online survey panels, Binary and Beyond Research',
};

import { data } from '@/data';

export default function PanelServices() {
  const panelServicesData = (data as any).panelServices;

  return (
    <div className="bg-none">
      <ScrollAnimations />
      <PageHero
        title={panelServicesData.banner.title}
        subtitle={panelServicesData.banner.subtitle}
      />
      <PanelServicesContent />
    </div>
  );
}
