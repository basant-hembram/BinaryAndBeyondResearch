import type { Metadata } from 'next';
import ScrollAnimations from '@/components/common/ScrollAnimations';
import CareerContent from '@/components/career/CareerContent';

export const metadata: Metadata = {
  title: 'Careers | Binary and Beyond Research',
  description: 'Join the Binary and Beyond Research team. Explore exciting career opportunities in market research, investment advisory, technology, and more. Grow with a forward-thinking company.',
  keywords: 'careers, jobs, Binary and Beyond Research careers, research jobs, investment advisory jobs, work with us',
};


export default function Career() {
  return (
    <div className="bg-none">
      <ScrollAnimations />
      <CareerContent />
    </div>
  );
}
