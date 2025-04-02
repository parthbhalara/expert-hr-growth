
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import BlogCard from "@/components/BlogCard";
import { Search } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All Topics" },
    { id: "recruitment", name: "Recruitment" },
    { id: "compliance", name: "Compliance" },
    { id: "employee-relations", name: "Employee Relations" },
    { id: "leadership", name: "Leadership" },
    { id: "trends", name: "HR Trends" }
  ];
  
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 HR Trends for 2024",
      excerpt: "Discover the latest human resources trends that will shape the workplace in 2024, from AI-powered recruitment to remote work policies.",
      date: "March 15, 2024",
      category: "trends",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      slug: "top-hr-trends-2024"
    },
    {
      id: 2,
      title: "How to Stay Compliant with North American HR Laws",
      excerpt: "A comprehensive guide to navigating the complex landscape of HR regulations and employment laws across the United States and Canada.",
      date: "March 1, 2024",
      category: "compliance",
      imageUrl: "https://images.unsplash.com/photo-1586282391129-76a6df230234",
      slug: "hr-compliance-guide"
    },
    {
      id: 3,
      title: "Building an Effective Recruitment Strategy",
      excerpt: "Learn how to develop a recruitment strategy that attracts top talent, reduces time-to-hire, and improves candidate quality.",
      date: "February 18, 2024",
      category: "recruitment",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      slug: "effective-recruitment-strategy"
    },
    {
      id: 4,
      title: "Conflict Resolution in the Workplace",
      excerpt: "Practical approaches to managing and resolving workplace conflicts before they escalate and impact productivity.",
      date: "February 5, 2024",
      category: "employee-relations",
      imageUrl: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21",
      slug: "workplace-conflict-resolution"
    },
    {
      id: 5,
      title: "Developing Future HR Leaders",
      excerpt: "Strategies for identifying and nurturing HR talent within your organization to build a strong leadership pipeline.",
      date: "January 25, 2024",
      category: "leadership",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      slug: "developing-hr-leaders"
    },
    {
      id: 6,
      title: "The Impact of AI on HR Processes",
      excerpt: "Explore how artificial intelligence is transforming human resources, from recruitment to employee engagement and retention.",
      date: "January 12, 2024",
      category: "trends",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      slug: "ai-in-hr"
    }
  ];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hr-blue-light to-white py-20">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-hr-gray-900 mb-6">
                HR Insights & Resources
              </h1>
              <p className="text-xl text-hr-gray-700 mb-8">
                Expert articles, guides, and trends in human resources management
              </p>
            </div>
          </div>
        </section>
        
        {/* Blog Section */}
        <section className="py-16">
          <div className="container-custom">
            {/* Search and Filters */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
                <div className="relative md:w-1/3">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border border-hr-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hr-blue"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-hr-gray-400" />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-md text-sm font-medium ${
                        selectedCategory === category.id
                          ? "bg-hr-blue text-white"
                          : "bg-white text-hr-gray-700 border border-hr-gray-300 hover:bg-hr-gray-100"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Blog Posts */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    category={categories.find(c => c.id === post.category)?.name || post.category}
                    imageUrl={post.imageUrl}
                    slug={post.slug}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-hr-gray-800 mb-4">No articles found</h3>
                <p className="text-hr-gray-600">
                  Please try a different search term or category.
                </p>
              </div>
            )}
            
            {/* Newsletter Signup */}
            <div className="mt-20 bg-hr-gray-100 rounded-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-hr-gray-900 mb-4">
                  Stay Updated with HR Insights
                </h2>
                <p className="text-hr-gray-700 text-lg max-w-2xl mx-auto">
                  Subscribe to our newsletter to receive the latest HR trends, compliance updates, and best practices directly in your inbox.
                </p>
              </div>
              
              <form className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 border border-hr-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hr-blue"
                    required
                  />
                  <button
                    type="submit"
                    className="btn-primary whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-hr-gray-500 text-sm mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
