import ScrollAnimations from '@/components/common/ScrollAnimations';
import PageHero from '@/components/common/PageHero';
import PanelServicesContent from '@/components/panel-services/PanelServicesContent';
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
