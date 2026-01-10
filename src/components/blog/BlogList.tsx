import BlogCard from './BlogCard';

const blogs = [
  {
    id: 1,
    image: '/images/blog.png',
    date: '18 Jan 2025 • Edition',
    title: 'Navigating Market Volatility',
    description: 'Investors and market participants are navigating through the uncertain environment with caution and strategic planning.',
    link: '#',
  },
  {
    id: 2,
    image: '/images/blog.png',
    date: '18 Jan 2025 • Edition',
    title: 'Navigating Market Volatility',
    description: 'Investors and market participants are navigating through the uncertain environment with caution and strategic planning.',
    link: '#',
  },
  {
    id: 3,
    image: '/images/blog.png',
    date: '18 Jan 2025 • Edition',
    title: 'Navigating Market Volatility',
    description: 'Investors and market participants are navigating through the uncertain environment with caution and strategic planning.',
    link: '#',
  },
  {
    id: 4,
    image: '/images/blog.png',
    date: '18 Jan 2025 • Edition',
    title: 'Navigating Market Volatility',
    description: 'Investors and market participants are navigating through the uncertain environment with caution and strategic planning.',
    link: '#',
  },
];

const BlogList = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-[26px] lg:text-[32px] xl:text-[36px] text-center mb-4">
        Latest Market <span className="text-[#E6AF1C] font-semibold">Newsletters</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            image={blog.image}
            date={blog.date}
            title={blog.title}
            description={blog.description}
            link={blog.link}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
