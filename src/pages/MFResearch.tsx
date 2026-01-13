import Banner from '../components/common/Banner';
import ResearchSidebar from '../components/mfresearch/ResearchSidebar';
import TrailingReturns from '../components/mfresearch/TrailingReturns';

const MFResearch = () => {
  return (
    <div className="bg-white">
      <Banner 
        title="MF RESEARCH"
        breadcrumbs={[
          { label: 'HOME', path: '/' },
          { label: 'MF RESEARCH', path: '/mf-research' }
        ]}
       backgroundImage="/images/banner-bg.jpg"
      />
      <div className="py-16 bg-white">
        <div className="container mx-auto">
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
};

export default MFResearch;
