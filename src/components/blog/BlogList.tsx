import BlogCard from './BlogCard';
import { data } from '../../data';

export const blogs = data.blog.blogs;

const BlogList = () => {
  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  };

  return (
    <section className="container mx-auto py-[48px]  lg:py-[65px] xl:py-[115px]">
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
            link={`/blog/${generateSlug(blog.title)}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
