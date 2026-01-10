import { useParams } from 'react-router-dom';
import Banner from '@/components/common/Banner';
import BlogDetail from '../components/blog/BlogDetail';
import { blogs } from '../components/blog/BlogList';

// Helper function to generate slug from title
const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
};

// Sample blog data - In a real app, this would come from an API or database
const blogData: { [key: string]: any } = {
    'navigating-market-volatility': {
        title: 'Navigating Market Volatility',
        subtitle: 'Market Insights: Steering Through Uncertainty',
        date: 'Jul 19, 2024 Edition',
        content: [
             {
                section: 'Market Insights: Steering Through Uncertainty',
                text: 'Market volatility refers to the frequency and magnitude of price movements in the financial markets. Volatility can be caused by various factors including economic data, geopolitical events, market sentiment, and unexpected news. While volatility can pose risks to investors, it also presents opportunities. Here’s a comprehensive guide to navigating market volatility:',
            },
            {
                section: 'Understanding Market Volatility:',
                text: 'Volatility is a statistical measure of the dispersion of returns for a given security or market index. High volatility means large price swings, while low volatility indicates more stable prices.',
            },
            {
                section: 'Causes of Volatility:',
                text: 'Economic Indicators: Data on employment, inflation, GDP growth, etc. Geopolitical Events: Elections, wars, natural disasters. Market Sentiment: Investor behavior influenced by news and events. Corporate Performance: Earnings reports, product launches, mergers and acquisitions.',
            },
            {
                section: 'Maintaining a long term goal:',
                text: 'Navigating market volatility involves understanding the frequent and often significant price movements that occur in financial markets. This volatility can be driven by economic indicators, geopolitical events, market sentiment, and unexpected news. To effectively manage volatility, it\'s crucial to have a diversified portfolio, which helps in spreading investments across various asset classes such as stocks, bonds, and real estate, and within these classes across different sectors and regions. Investors can reduce risk. Implementing risk management strategies like asset allocation, stop-loss orders, and hedging with derivatives can also protect against potential losses.',
            },
            {
                section: 'Maintaining a long term goal:',
                text: 'Market volatility is an inherent part of investing, and while it can be challenging, it also offers opportunities for growth. By diversifying investments, managing risk, maintaining a long-term perspective, staying informed, and exercising behavioral discipline, investors can navigate market volatility more effectively. Remember that the key to successful investing is not avoiding volatility but managing it wisely to achieve your financial goals.',
            },
        ],
    },
};

const BlogDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();

    // Find the matching blog from the blogs list to get the correct image
    const matchingBlog = blogs.find(blog => generateSlug(blog.title) === slug);
    const blog = slug ? blogData[slug] : null;

    if (!blog) {
        return (
            <>
                <Banner
                    title="Latest Blogs"
                    breadcrumbs={[
                        { label: 'Home', path: '/' },
                        { label: 'Latest Blogs', path: '/latest-blogs' }
                    ]}
                    backgroundImage="/images/terms-banner.jpg"
                />
                <div className="container mx-auto px-4 py-16 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog Not Found</h2>
                    <p className="text-gray-600">The blog post you're looking for doesn't exist.</p>
                </div>
            </>
        );
    }

    return (
        <>
            <Banner
                title="Latest Blogs"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Latest Blogs', path: '/latest-blogs' }
                ]}
                backgroundImage="/images/terms-banner.jpg"
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
};

export default BlogDetailPage;
