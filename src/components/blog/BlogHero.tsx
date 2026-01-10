const BlogHero = () => {
  return (
    <section className="relative bg-cover bg-center py-24" style={{ backgroundImage: 'url(/images/photo-1516321497487-e288fb19713f.avif)' }}>
      <div className="absolute inset-0 bg-[#0A1A3A]/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Latest Blogs
        </h1>
        <div className="flex items-center gap-2 text-white">
          <a href="/" className="hover:text-[#E6AF1C]">HOME</a>
          <span>/</span>
          <span className="text-[#E6AF1C]">LATEST BLOGS</span>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
