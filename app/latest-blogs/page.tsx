import Banner from '@/components/common/Banner';
import BlogList from '@/components/blog/BlogList';
import { data } from '@/data';

export default function LatestBlogs() {
  const blogData = data.blog;
  
  return (
    <div className="bg-white">
      <Banner 
        title={blogData.banner.title}
        breadcrumbs={blogData.banner.breadcrumbs}
        backgroundImage={blogData.banner.backgroundImage}
      />
      <BlogList />
    </div>
  );
}
