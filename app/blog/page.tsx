import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Blog() {
  const featuredPost = {
    title: 'The Complete Guide to AI-Powered Budgeting',
    excerpt: 'Discover how artificial intelligence is revolutionizing personal finance and learn practical strategies to leverage AI for better budgeting decisions.',
    author: 'Sarah Williams',
    date: '2024-01-15',
    readTime: '8 min read',
    slug: 'ai-powered-budgeting-guide',
    category: 'AI & Finance'
  }

  const posts = [
    {
      title: '10 Budgeting Mistakes That Are Costing You Money',
      excerpt: 'Avoid these common budgeting pitfalls that can derail your financial goals and learn how to create a sustainable budget that actually works.',
      author: 'Marcus Johnson',
      date: '2024-01-12',
      readTime: '5 min read',
      slug: 'budgeting-mistakes',
      category: 'Budgeting'
    },
    {
      title: 'How to Build an Emergency Fund in 6 Months',
      excerpt: 'A step-by-step guide to building your emergency fund, even on a tight budget. Learn practical strategies and automation techniques.',
      author: 'Alex Chen',
      date: '2024-01-10',
      readTime: '7 min read',
      slug: 'emergency-fund-guide',
      category: 'Savings'
    },
    {
      title: 'Understanding Bank Account Connections and Security',
      excerpt: 'Learn how financial apps like Budgetly safely connect to your bank accounts and what security measures protect your data.',
      author: 'Sarah Williams',
      date: '2024-01-08',
      readTime: '6 min read',
      slug: 'bank-security-guide',
      category: 'Security'
    },
    {
      title: 'The Psychology of Spending: Why We Make Bad Money Decisions',
      excerpt: 'Explore the behavioral psychology behind spending decisions and learn how to rewire your brain for better financial habits.',
      author: 'Dr. Lisa Park',
      date: '2024-01-05',
      readTime: '9 min read',
      slug: 'psychology-of-spending',
      category: 'Psychology'
    },
    {
      title: 'Automating Your Finances: Set It and Forget It',
      excerpt: 'Discover how to automate your savings, bill payments, and investments to build wealth without thinking about it.',
      author: 'Marcus Johnson',
      date: '2024-01-03',
      readTime: '4 min read',
      slug: 'automate-finances',
      category: 'Automation'
    },
    {
      title: 'Credit Score Basics: Everything You Need to Know',
      excerpt: 'A comprehensive guide to understanding credit scores, how they work, and practical steps to improve your credit rating.',
      author: 'Jennifer Lee',
      date: '2024-01-01',
      readTime: '6 min read',
      slug: 'credit-score-basics',
      category: 'Credit'
    }
  ]

  const categories = ['All', 'Budgeting', 'AI & Finance', 'Savings', 'Security', 'Psychology', 'Automation', 'Credit']

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Financial Insights &
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Expert Guidance
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay informed with the latest personal finance tips, budgeting strategies, 
              and insights from our team of financial experts.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-gray-100">
        <div className="container-padding">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All' 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="card overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="aspect-video bg-gradient-primary flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-lg font-medium">Featured Article</div>
                      <div className="text-sm opacity-80">Coming Soon</div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2 py-1 rounded">
                      {featuredPost.category}
                    </span>
                    <span className="text-xs text-gray-500">Featured</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{featuredPost.author}</span>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Link 
                      href={`/blog/${featuredPost.slug}`}
                      className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Latest Articles
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article key={index} className="card overflow-hidden hover:shadow-medium transition-shadow duration-300">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                    <div className="text-gray-600 text-center">
                      <div className="text-sm font-medium">{post.category}</div>
                      <div className="text-xs opacity-60">Article Image</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        <div>{post.author}</div>
                        <div className="flex items-center mt-1 space-x-3">
                          <span className="flex items-center">
                            <Calendar size={12} className="mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <Clock size={12} className="mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
                      >
                        Read
                        <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-primary">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Financial Tips
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get our latest articles, budgeting tips, and financial insights delivered 
              straight to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-xl hover:shadow-medium transition-all duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 