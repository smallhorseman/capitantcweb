import Link from 'next/link'
import { Play, Calendar, User, Clock, Eye } from 'lucide-react'

export default function Videos() {
  const videos = [
    {
      id: 1,
      title: 'Gulf Coast Red Snapper Fishing Techniques',
      description: 'Learn Captain Tracy&apos;s proven methods for consistently catching red snapper in Gulf Coast waters.',
      duration: '12:45',
      views: '2.3K',
      uploadDate: '2025-10-10',
      category: 'Techniques',
      thumbnail: '/placeholder-red-snapper-video.jpg'
    },
    {
      id: 2,
      title: 'Family Fishing Safety: Essential Tips for Parents',
      description: 'Everything parents need to know to keep their family safe and having fun while fishing.',
      duration: '8:30',
      views: '1.8K',
      uploadDate: '2025-10-08',
      category: 'Family & Safety',
      thumbnail: '/placeholder-family-safety-video.jpg'
    },
    {
      id: 3,
      title: 'Rigging Live Bait for Gulf Coast Fishing',
      description: 'Step-by-step guide to rigging live bait for maximum effectiveness in Gulf waters.',
      duration: '6:15',
      views: '3.1K',
      uploadDate: '2025-10-05',
      category: 'Techniques',
      thumbnail: '/placeholder-live-bait-video.jpg'
    },
    {
      id: 4,
      title: 'Teaching Your Kids to Cast: A Patient Parent&apos;s Guide',
      description: 'Simple, effective methods to teach children proper casting technique without frustration.',
      duration: '10:20',
      views: '1.5K',
      uploadDate: '2025-10-02',
      category: 'Family & Safety',
      thumbnail: '/placeholder-kids-casting-video.jpg'
    },
    {
      id: 5,
      title: 'Reading Gulf Coast Weather for Fishing Success',
      description: 'How to interpret weather patterns and conditions for the safest and most productive trips.',
      duration: '14:25',
      views: '2.7K',
      uploadDate: '2025-09-28',
      category: 'Weather & Planning',
      thumbnail: '/placeholder-weather-video.jpg'
    },
    {
      id: 6,
      title: 'Inshore vs Offshore: Choosing Your Family Adventure',
      description: 'Understand the differences to pick the perfect fishing experience for your family.',
      duration: '9:40',
      views: '1.9K',
      uploadDate: '2025-09-25',
      category: 'Planning',
      thumbnail: '/placeholder-inshore-offshore-video.jpg'
    }
  ]

  const categories = ['All Videos', 'Techniques', 'Family & Safety', 'Weather & Planning', 'Planning']

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-ocean-900 text-white py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-block mb-4 text-ocean-300 hover:text-white">
            ← Back to Home
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Video Library
          </h1>
          <p className="text-xl text-ocean-200 max-w-2xl">
            Watch and learn with Captain Tracy&apos;s fishing tutorials and family-friendly guides
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
                  category === 'All Videos'
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

      {/* Featured Video */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-ocean-900 mb-8">Featured Video</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="relative h-64 bg-ocean-900 rounded-lg flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
                <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform" />
                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
                  12:45
                </div>
              </div>
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-sand-100 text-sand-800 text-sm rounded-full mb-3">
                Techniques
              </span>
              <h3 className="font-display text-2xl font-bold text-ocean-900 mb-3">
                Gulf Coast Red Snapper Fishing Techniques
              </h3>
              <p className="text-gray-700 mb-4">
                Learn Captain Tracy&apos;s proven methods for consistently catching red snapper in Gulf Coast waters. This comprehensive guide covers everything from bait selection to proper technique.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>Captain Tracy</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Oct 10, 2025</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>2.3K views</span>
                </div>
              </div>
              <button className="bg-ocean-600 hover:bg-ocean-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Video</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-ocean-900 mb-8">All Videos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-ocean-900 flex items-center justify-center group cursor-pointer">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
                  <Play className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
                  <div className="absolute top-2 left-2 bg-ocean-600 text-white text-xs px-2 py-1 rounded">
                    {video.category}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-lg text-ocean-900 mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{video.views} views</span>
                      </div>
                      <span>•</span>
                      <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-ocean-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-ocean-900 mb-4">
            More Videos Coming Soon
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Captain Tracy is working on new video content covering advanced techniques, family fishing adventures, and Gulf Coast fishing secrets. Subscribe to be notified when new videos are published.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email for video updates"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
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
        </div>
      </section>

      {/* YouTube Channel Placeholder */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-ocean-900 mb-4">
              Follow Us on YouTube
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to Captain Tracy&apos;s YouTube channel for regular fishing tips, family adventures, and Gulf Coast fishing insights.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Subscribe to YouTube Channel
            </button>
            <p className="text-sm text-gray-500 mt-3">
              Channel coming soon - join our email list to be notified!
            </p>
          </div>
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