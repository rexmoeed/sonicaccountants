import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Button } from '@/components/ui/button';
import PageBanner from '@/components/layout/PageBanner';


interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Corporation Tax Changes in 2025",
    excerpt: "Learn about the latest corporation tax updates and how they affect UK businesses. We break down the key changes and what you need to prepare for.",
    category: "Tax",
    date: "January 10, 2025",
    author: "Sonic Accountants",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Making Tax Digital: A Complete Guide for Small Businesses",
    excerpt: "Everything you need to know about MTD compliance, from registration to software choices. Stay ahead of HMRC requirements.",
    category: "Compliance",
    date: "January 5, 2025",
    author: "Sonic Accountants",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Year-End Accounting Checklist for UK Companies",
    excerpt: "A comprehensive checklist to ensure your company accounts are ready for year-end filing with Companies House and HMRC.",
    category: "Accounts",
    date: "December 28, 2024",
    author: "Sonic Accountants",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    title: "Auto-Enrolment Pension: What Employers Need to Know",
    excerpt: "A guide to workplace pension requirements, contribution rates, and compliance deadlines for UK employers.",
    category: "Payroll",
    date: "December 20, 2024",
    author: "Sonic Accountants",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    title: "VAT Registration: When and How to Register",
    excerpt: "Understanding VAT thresholds, voluntary registration benefits, and the step-by-step registration process.",
    category: "Tax",
    date: "December 15, 2024",
    author: "Sonic Accountants",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    title: "Cash Flow Management Tips for Small Businesses",
    excerpt: "Practical strategies to improve your cash flow, manage payments, and ensure financial stability for your business.",
    category: "Advisory",
    date: "December 10, 2024",
    author: "Sonic Accountants",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop&q=60"
  }
];

const categories = ["All", "Tax", "Accounts", "Payroll", "Compliance", "Advisory"];

const Blogs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <PageBanner
  title="Our Blogs"
  subtitle="UK-Based Bookkeeping & Accounting Firm"
  description="Providing professional financial services across the UK."
  imageVariant="all"
/>


        {/* Category Filter */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all border-2 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-foreground border-border hover:border-primary hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <ScrollAnimation key={post.id} direction="up" delay={index * 0.1}>
                  <article className="glass rounded-[20px] overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20">
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-foreground/60 text-xs">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="font-heading text-xl font-bold text-foreground mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-foreground text-sm mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                        <div className="flex items-center gap-2 text-xs text-foreground/60">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <Button variant="link" className="text-primary p-0 h-auto font-medium text-sm">
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </article>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-primary/5 border-y-2 border-primary/20">
          <div className="container mx-auto px-4">
            <ScrollAnimation direction="up">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Stay Updated
                </h2>
                <p className="text-foreground mb-6">
                  Subscribe to our newsletter for the latest accounting tips, tax updates, and business insights delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none"
                  />
                  <Button variant="hero">
                    Subscribe
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;