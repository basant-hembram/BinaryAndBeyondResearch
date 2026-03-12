import type { Metadata } from 'next';
import ScrollAnimations from '@/components/common/ScrollAnimations';
import MembershipContent from '@/components/membership/MembershipContent';

export const metadata: Metadata = {
  title: 'Membership | Binary and Beyond Research',
  description: 'Join the Binary and Beyond Research membership and participate in market research studies. Share your opinions, earn rewards, and help shape the future of products and services.',
  keywords: 'research membership, paid surveys, market research panel, join research panel, earn rewards, Binary and Beyond Research membership',
};


export default function Membership() {
  return (
    <div className="bg-none">
      <ScrollAnimations />
      <MembershipContent />
    </div>
  );
}
