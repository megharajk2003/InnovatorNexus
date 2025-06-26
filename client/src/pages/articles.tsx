import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { isVisible: heroVisible, elementRef: heroRef } = useScrollAnimation();

  const { isVisible: featuredVisible, elementRef: featuredRef } =
    useScrollAnimation({
      threshold: 0.1,
      rootMargin: "45% 0px -10% 0px",

      // or just omit it since false is default
    });

  const { isVisible: articlesVisible, elementRef: articlesRef } =
    useScrollAnimation({
      threshold: 0.1,
      rootMargin: "75% 0px -20% 0px",

      // or just omit it since false is default
    });

  const categories = [
    "All",
    "Social Media",
    "Content Marketing",
    "Business Strategy",
    "Design",
    "Web Development",
  ];

  const articles = [
    {
      id: 1,
      title: "10 Social Media Trends That Will Dominate 2025",
      excerpt:
        "Discover the latest social media trends and how to leverage them for maximum engagement and business growth.",
      category: "Social Media",
      readTime: "8 min read",
      publishDate: "2025-01-15",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      author: "Sarah Johnson",
      featured: true,
    },
    {
      id: 2,
      title: "The Ultimate Guide to Content Marketing ROI",
      excerpt:
        "Learn how to measure and improve your content marketing return on investment with proven strategies and tools.",
      category: "Content Marketing",
      readTime: "12 min read",
      publishDate: "2025-01-12",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      author: "Mike Chen",
      featured: true,
    },
    {
      id: 3,
      title: "Building a Strong Brand Identity in the Digital Age",
      excerpt:
        "Essential steps to create a memorable brand identity that resonates with your target audience across all digital platforms.",
      category: "Design",
      readTime: "10 min read",
      publishDate: "2025-01-10",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      author: "Emma Rodriguez",
      featured: false,
    },
    {
      id: 4,
      title: "SEO Best Practices for Small Businesses",
      excerpt:
        "Practical SEO strategies that small businesses can implement to improve their search engine rankings and visibility.",
      category: "Web Development",
      readTime: "15 min read",
      publishDate: "2025-01-08",
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      author: "David Kim",
      featured: false,
    },
    {
      id: 5,
      title: "Customer Journey Mapping: A Complete Guide",
      excerpt:
        "Understand your customers better and optimize their experience with comprehensive journey mapping techniques.",
      category: "Business Strategy",
      readTime: "9 min read",
      publishDate: "2025-01-05",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      author: "Lisa Wang",
      featured: false,
    },
    {
      id: 6,
      title: "Video Marketing Statistics You Need to Know",
      excerpt:
        "Latest video marketing statistics and insights to help you create more effective video content strategies.",
      category: "Content Marketing",
      readTime: "6 min read",
      publishDate: "2025-01-03",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      author: "Alex Thompson",
      featured: false,
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(
    (article) => article.featured,
  );
  const regularArticles = filteredArticles.filter(
    (article) => !article.featured,
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={heroRef}
            className={`text-center transition-all duration-1000 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Digital Marketing <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Stay ahead of the curve with our latest articles on digital
              marketing, business strategy, and industry trends.
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 text-lg"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="mb-2"
                  >
                    <Tag className="w-4 h-4 mr-1" />
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={featuredRef}
              className={`text-center mb-12 transition-all duration-1000 ${
                featuredVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-bold font-poppins">
                Featured Articles
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <article
                  key={article.id}
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                    featuredVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white">Featured</Badge>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(article.publishDate)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold font-poppins mb-3 hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <span className="text-sm text-gray-500">
                          by {article.author}
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        className="text-primary hover:text-primary/80"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {featuredArticles.length > 0 && (
            <div
              ref={articlesRef}
              className={`text-center mb-12 transition-all duration-1000 ${
                articlesVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-bold font-poppins">
                Latest Articles
              </h2>
            </div>
          )}

          {regularArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <article
                  key={article.id}
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 ${
                    articlesVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(article.publishDate)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold font-poppins mb-3 hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col space-y-1">
                        <Badge variant="secondary" className="text-xs w-fit">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          by {article.author}
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary/80"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No articles found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
