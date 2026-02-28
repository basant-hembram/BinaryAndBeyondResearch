import Banner from '@/components/common/Banner';
import ResearchSidebar from '@/components/mfresearch/ResearchSidebar';
import TrailingReturns from '@/components/mfresearch/TrailingReturns';
import { data } from '@/data';

export default function MFResearch() {
  const mfresearchData = data.mfresearch;
  
  return (
    <div className="bg-white">
      <Banner 
        title={mfresearchData.banner.title}
        breadcrumbs={mfresearchData.banner.breadcrumbs}
        backgroundImage={mfresearchData.banner.backgroundImage}
      />
      <div className="py-16 bg-white">
        <div className="container max-md:px-4 mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-[14px]">
            <div className="xl:col-span-3">
              <ResearchSidebar />
            </div>
            <div className="xl:col-span-9">
              <TrailingReturns />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
