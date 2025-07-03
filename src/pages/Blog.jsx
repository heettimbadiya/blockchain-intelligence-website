import React, { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  User,
  Tag,
  Search,
  Grid,
  List,
  Share2,
  Bookmark,
  Heart,
  MessageCircle,
  Eye,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [bookmarkedPosts, setBookmarkedPosts] = useState(new Set());
  const [likedPosts, setLikedPosts] = useState(new Set());

  const posts = [
    {
      id: 1,
      title: "Understanding Crypto Compliance in 2025",
      excerpt:
        "Explore the evolving landscape of cryptocurrency regulations and how your business can stay compliant with the latest requirements.",
      date: "June 15, 2025",
      readTime: "8 min read",
      author: "Sarah Chen",
      category: "Compliance",
      views: 2847,
      likes: 156,
      comments: 23,
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQHweiZHRLJ-lw/article-cover_image-shrink_720_1280/B56Zd04bCSHEAc-/0/1750012647242?e=2147483647&v=beta&t=THX0Hux9Di6mUgHI06EGAX8dK0LtYYW2zxlvo4aTmDk",
      link: "#",
    },
    {
      id: 2,
      title: "Top Blockchain Security Risks & How to Avoid Them",
      excerpt:
        "Discover common vulnerabilities in smart contracts and decentralized protocols, and learn proven strategies to mitigate them.",
      date: "May 28, 2025",
      readTime: "12 min read",
      author: "Alex Rodriguez",
      category: "Security",
      views: 3421,
      likes: 203,
      comments: 45,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWBl-XF1IUYv1ZUseqzVRiw2nlICrXxmdlVgoyeakrSWzk3eWFCeokoW0c-qtXp_2oHi0&usqp=CAU",
      link: "#",
    },
    {
      id: 3,
      title: "The Future of DeFi: Trends to Watch",
      excerpt:
        "A comprehensive look ahead at how decentralized finance will transform global markets in the next decade.",
      date: "April 10, 2025",
      readTime: "6 min read",
      author: "Michael Thompson",
      category: "DeFi",
      views: 1923,
      likes: 89,
      comments: 12,
      image:
        "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*Q5Tr5VHnXSQzXWiRDWgKhw.jpeg",
      link: "#",
    },
    {
      id: 4,
      title: "Smart Contract Auditing Best Practices",
      excerpt:
        "Essential guidelines and methodologies for conducting thorough smart contract security audits.",
      date: "March 22, 2025",
      readTime: "10 min read",
      author: "Emma Davis",
      category: "Security",
      views: 2156,
      likes: 134,
      comments: 28,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HzU_B4TrV324a9d8cRwUtT5H5STe4iDAvg&s",
      link: "#",
    },
    {
      id: 5,
      title: "Regulatory Updates: What's New in 2025",
      excerpt:
        "Stay up-to-date with the latest cryptocurrency regulations and compliance requirements across different jurisdictions.",
      date: "February 18, 2025",
      readTime: "7 min read",
      author: "David Wilson",
      category: "Compliance",
      views: 1847,
      likes: 92,
      comments: 15,
      image:
        "https://media.licdn.com/dms/image/v2/D4E12AQEZ5zvS90E01w/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1735441902880?e=2147483647&v=beta&t=_z7OKfXCAXTC70XoJOZpuxpP3RWuJkjssNhvRvPRzHE",
      link: "#",
    },
    {
      id: 6,
      title: "Building Scalable DeFi Applications",
      excerpt:
        "Technical insights and architectural patterns for developing high-performance decentralized finance applications.",
      date: "January 30, 2025",
      readTime: "15 min read",
      author: "Lisa Park",
      category: "DeFi",
      views: 2934,
      likes: 187,
      comments: 34,
      image:
        "https://www.solulab.com/wp-content/uploads/2025/03/Build-Defi-apps.png",
      link: "#",
    },
  ];

  const categories = ["All", "Compliance", "Security", "DeFi"];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleBookmark = (postId) => {
    setBookmarkedPosts((prev) => {
      const newSet = new Set(prev);
      newSet.has(postId) ? newSet.delete(postId) : newSet.add(postId);
      return newSet;
    });
  };

  const toggleLike = (postId) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      newSet.has(postId) ? newSet.delete(postId) : newSet.add(postId);
      return newSet;
    });
  };

  const handleShare = (post) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: post.link,
      });
    } else {
      navigator.clipboard.writeText(window.location.href + post.link);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
  
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 flex items-center py-20 sm:py-24 md:py-32">
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl font-bold text-[#27346a] mb-8">
                        Blogs
                        </h1>

                        {/* Orange Accent */}
                        <div className="w-24 sm:w-28 md:w-32 h-1.5 bg-orange-500 rounded-full mx-auto mb-8 sm:mb-10"></div>

                        {/* Paragraphs */}
                        <div className="space-y-6 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                            <p>
                            Expert perspectives on blockchain compliance, security, and DeFi
                            innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          {/* Search */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* View Mode */}
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-xl border ${
                viewMode === "grid"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
              }`}
            >
              <Grid />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-xl border ${
                viewMode === "list"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
              }`}
            >
              <List />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-gray-600 mb-8">
          Showing {filteredPosts.length} article
          {filteredPosts.length !== 1 && "s"}
          {searchTerm && ` for "${searchTerm}"`}
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
        </p>

        {/* Posts */}
        <div
          className={
            viewMode === "grid"
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
          }
        >
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className={`bg-white rounded-3xl shadow hover:shadow-lg overflow-hidden transition ${
                viewMode === "list" ? "flex" : ""
              }`}
            >
              <div
                className={`${
                  viewMode === "list"
                    ? "w-48 flex-shrink-0"
                    : "w-full h-48"
                }`}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center mb-2 px-2 py-1 text-xs font-medium bg-orange-100 text-orange-700 rounded-full">
                    <Tag className="w-3 h-3 mr-1" />
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#27346a] hover:text-orange-500 transition-colors mb-2">
                    <a href={post.link}>{post.title}</a>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                </div>
                  <button
                    type="button"
                    className="flex items-center text-orange-600 font-medium hover:underline mt-3 cursor-pointer bg-transparent border-none p-0"
                    onClick={() => navigate(`/blog/${post.id}`)}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#27346a] mb-2">
              No articles found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
