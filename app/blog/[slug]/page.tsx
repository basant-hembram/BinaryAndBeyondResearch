import type { Metadata } from 'next';
import Banner from '@/components/common/Banner';
import BlogDetail from '@/components/blog/BlogDetail';
import { blogs } from '@/components/blog/BlogList';
import { data } from '@/data';

// Helper function to generate slug from title
const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const blog = params.slug ? (data.blog.blogDetails as any)[params.slug] : null;
    if (!blog) {
        return {
            title: 'Blog | Binary and Beyond Research',
            description: 'Read the latest market research and investment insights from Binary and Beyond Research.',
        };
    }
    return {
        title: `${blog.title} | Binary and Beyond Research`,
        description: blog.subtitle || 'Read this article on Binary and Beyond Research for expert market research and investment insights.',
        keywords: `${blog.title}, market research, investment insights, Binary and Beyond Research`,
    };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
    const slug = params.slug;

    // Find the matching blog from the blogs list to get the correct image
    const matchingBlog = blogs.find(blog => generateSlug(blog.title) === slug);
    const blog = slug ? (data.blog.blogDetails as any)[slug] : null;
    const blogBannerData = data.blog.detailBanner;

    if (!blog) {
        return (
            <>
                <Banner
                    title={blogBannerData.title}
                    breadcrumbs={blogBannerData.breadcrumbs}
                    backgroundImage={blogBannerData.backgroundImage}
                />
                <div className="container max-md:px-4 mx-auto py-16 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog Not Found</h2>
                    <p className="text-[#575455]">The blog post you're looking for doesn't exist.</p>
                </div>
            </>
        );
    }

    return (
        <>
            <Banner
                title={blogBannerData.title}
                breadcrumbs={blogBannerData.breadcrumbs}
                backgroundImage={blogBannerData.backgroundImage}
            />
            <BlogDetail
                title={blog.title}
                subtitle={blog.subtitle}
                date={blog.date}
                image={matchingBlog?.image || '/images/photo-1584438784894-089d6a62b8fa.avif'}
                content={blog.content}
            />
        </>
    );
}
