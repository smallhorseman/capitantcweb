import Link from 'next/link'
import { Calendar, User, Clock, Tag } from 'lucide-react'

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Teaching Kids to Fish: A Guide for Family Adventures',
      excerpt: 'Discover the joy of introducing children to fishing with proven techniques that ensure safety, fun, and success on the water.',
      author: 'Captain Tracy',
      date: '2025-10-15',
      readTime: '8 min read',
      category: 'Family Fishing',
      image: '/placeholder-family-fishing.jpg',
      tags: ['Family', 'Kids', 'Beginners', 'Safety']
    },
    {
      id: 2,
      title: 'Gulf Coast Seasonal Fishing Calendar: What to Target When',
      excerpt: 'Learn when and where to find the best fishing opportunities throughout the year in Gulf Coast waters.',
      author: 'Captain Tracy',
      date: '2025-10-12',
      readTime: '12 min read',
      category: 'Fishing Guide',
      image: '/placeholder-seasonal-fishing.jpg',
      tags: ['Seasonal', 'Gulf Coast', 'Planning', 'Species']
    },
    {
      id: 3,
      title: 'Essential Tackle for Gulf Coast Fishing: A Complete Guide',
      excerpt: 'Everything you need to know about selecting the right tackle for successful Gulf Coast fishing adventures.',
      author: 'Captain Tracy',
      date: '2025-10-08',
      readTime: '10 min read',
      category: 'Equipment',
      image: '/placeholder-tackle-guide.jpg',
      tags: ['Tackle', 'Equipment', 'Guide', 'Preparation']
    },
    {
      id: 4,
      title: 'Building Stronger Family Bonds Through Fishing',
      excerpt: 'How shared fishing experiences create lasting memories and strengthen relationships between family members.',
      author: 'Captain Tracy',
      date: '2025-10-05',
      readTime: '6 min read',
      category: 'Family Fishing',
      image: '/placeholder-family-bonds.jpg',
      tags: ['Family', 'Bonding', 'Memories', 'Tradition']
    },
    {
      id: 5,
      title: 'Understanding Gulf Coast Weather Patterns for Better Fishing',
      excerpt: 'Learn to read weather conditions and make informed decisions for safer and more productive fishing trips.',
      author: 'Captain Tracy',
      date: '2025-10-01',
      readTime: '9 min read',
      category: 'Weather & Safety',
      image: '/placeholder-weather-guide.jpg',
      tags: ['Weather', 'Safety', 'Planning', 'Conditions']
    },
    {
      id: 6,
      title: 'The Art of Live Bait Fishing in Gulf Waters',
      excerpt: 'Master the techniques of live bait fishing to dramatically increase your success rate in Gulf Coast waters.',
      author: 'Captain Tracy',
      date: '2025-09-28',
      readTime: '11 min read',
      category: 'Techniques',
      image: '/placeholder-live-bait.jpg',
      tags: ['Live Bait', 'Techniques', 'Gulf Coast', 'Advanced']
    }
  ]

  const categories = ['All', 'Family Fishing', 'Fishing Guide', 'Equipment', 'Weather & Safety', 'Techniques']

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-ocean-900 text-white py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-block mb-4 text-ocean-300 hover:text-white">
            ← Back to Home
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Fishing Blog
          </h1>
          <p className="text-xl text-ocean-200 max-w-2xl">
            Educational content to help you become a better angler and create amazing family fishing memories
          </p>
        </div>
      </header>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-ocean-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-ocean-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-ocean-900 mb-8">Featured Article</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 bg-ocean-100 rounded-lg flex items-center justify-center">
              <span className="text-ocean-600">Featured Image Coming Soon</span>
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-sand-100 text-sand-800 text-sm rounded-full mb-3">
                Family Fishing
              </span>
              <h3 className="font-display text-2xl font-bold text-ocean-900 mb-3">
                Teaching Kids to Fish: A Guide for Family Adventures
              </h3>
              <p className="text-gray-700 mb-4">
                Discover the joy of introducing children to fishing with proven techniques that ensure safety, fun, and success on the water. Learn how to make their first fishing experience memorable and build a lifelong love for the sport.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>Captain Tracy</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Oct 15, 2025</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
                </div>
              </div>
              <Link
                href="/blog/teaching-kids-to-fish"
                className="inline-block bg-ocean-600 hover:bg-ocean-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Read Full Article
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-ocean-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-ocean-100 flex items-center justify-center">
                  <span className="text-ocean-600 text-sm">Image Coming Soon</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-ocean-100 text-ocean-800 text-xs rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg text-ocean-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-block text-ocean-600 hover:text-ocean-800 font-medium text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-ocean-700 to-ocean-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Never Miss a Fishing Tip
          </h2>
          <p className="text-ocean-100 mb-8 max-w-2xl mx-auto">
            Get the latest fishing articles, family tips, and Gulf Coast insights delivered to your inbox weekly.
          </p>
          <div className="max-w-md mx-auto bg-white rounded-lg p-2">
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border-0 focus:ring-0 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-sand-500 hover:bg-sand-600 text-ocean-900 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
          <p className="text-ocean-200 text-sm mt-4">
            Join 1,000+ fishing families. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-950 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="font-display text-xl font-bold hover:text-sand-400">
            Captain Tracy
          </Link>
          <p className="text-ocean-400 mt-2">
            Gulf Coast Charter Fishing • Bringing Families Together
          </p>
        </div>
      </footer>
    </main>
  )
}