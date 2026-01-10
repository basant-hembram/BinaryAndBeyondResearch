import Banner from '../components/common/Banner';
import BlogList from '../components/blog/BlogList';

const LatestBlogs = () => {
  return (
    <div className="bg-white">
      <Banner 
        title="Latest Blogs"
        breadcrumbs={[
          { label: 'HOME', path: '/' },
          { label: 'LATEST BLOGS', path: '/latest-blogs' }
        ]}
       backgroundImage="/images/bl;og-banner.avif"
      />
      <BlogList />
    </div>
  );
};

export default LatestBlogs;
