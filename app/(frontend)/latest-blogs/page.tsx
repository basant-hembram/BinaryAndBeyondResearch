import type { Metadata } from 'next';
import Banner from '@/components/common/Banner';
import BlogList from '@/components/blog/BlogList';
import { data } from '@/data';

export const metadata: Metadata = {
  title: 'Latest Blogs | Binary and Beyond Research',
  description: 'Read the latest articles and insights from Binary and Beyond Research on market research trends, investment strategies, industry analysis, and more.',
  keywords: 'market research blog, investment insights, research articles, industry analysis, Binary and Beyond Research blog',
};


export default function LatestBlogs() {
  const blogData = data.blog;
  
  return (
    <div className="bg-none">
      <Banner 
        title={blogData.banner.title}
        breadcrumbs={blogData.banner.breadcrumbs}
        backgroundImage={blogData.banner.backgroundImage}
      />
      <BlogList />
    </div>
  );
}
