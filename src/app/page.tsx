import Image from 'next/image'
import Link from 'next/link'
import { Fish, Users, Calendar, MapPin, Star, Mail } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-ocean-900 via-ocean-700 to-ocean-500">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Captain Tracy
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Bringing Families Together Through Gulf Coast Fishing Adventures
          </p>
          <p className="text-lg mb-8 opacity-80">
            50+ Years of Fishing Expertise • Coming Soon
          </p>
          <div className="space-y-4">
            <button className="bg-sand-500 hover:bg-sand-600 text-ocean-900 font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
              Join Our Fishing Family
            </button>
            <p className="text-sm opacity-70">
              Be the first to know when charter bookings open
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-ocean-900 mb-6">
                Meet Captain Tracy
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                With over 50 years of experience fishing the Gulf Coast waters, Captain Tracy is preparing to share his lifetime of knowledge through guided charter experiences. His passion isn&apos;t just about catching fish – it&apos;s about creating lasting memories and strengthening family bonds through the joy of fishing.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Currently working toward his charter captain license, Tracy offers fishing consultations and shares his expertise to help fellow anglers improve their success on the water.
              </p>
              <div className="flex items-center space-x-4">
                <Fish className="w-8 h-8 text-ocean-600" />
                <span className="text-lg font-semibold text-ocean-800">
                  50+ Years Experience
                </span>
              </div>
            </div>
            <div className="relative h-96">
              <div className="absolute inset-0 bg-ocean-100 rounded-lg flex items-center justify-center">
                <Fish className="w-24 h-24 text-ocean-400" />
                <span className="text-ocean-600 ml-4">Captain Tracy Photo Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-ocean-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center text-ocean-900 mb-12">
            What Makes Us Special
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <Users className="w-16 h-16 text-ocean-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-ocean-800 mb-4">
                Family-Focused
              </h3>
              <p className="text-gray-600">
                We specialize in creating memorable fishing experiences that bring families together and create lasting bonds.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <MapPin className="w-16 h-16 text-ocean-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-ocean-800 mb-4">
                Gulf Coast Expertise
              </h3>
              <p className="text-gray-600">
                Deep knowledge of Gulf Coast waters, fishing spots, seasonal patterns, and the best techniques for success.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <Star className="w-16 h-16 text-ocean-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-ocean-800 mb-4">
                Educational Experience
              </h3>
              <p className="text-gray-600">
                Learn proper techniques, fish identification, and conservation practices while having fun on the water.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-gradient-to-r from-ocean-700 to-ocean-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Charter Bookings Coming Soon
          </h2>
          <p className="text-xl text-ocean-100 mb-8 max-w-2xl mx-auto">
            Captain Tracy is currently working toward his charter license. Join our waiting list to be notified as soon as bookings open!
          </p>
          
          {/* Email Signup Form */}
          <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-ocean-800 mb-4">
              Get Notified First
            </h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-full bg-sand-500 hover:bg-sand-600 text-ocean-900 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Join the Fishing Family
              </button>
            </form>
            <p className="text-sm text-gray-600 mt-3">
              No spam, just fishing updates and early access to bookings
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center text-ocean-900 mb-12">
            What We&apos;ll Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Calendar className="w-12 h-12 text-ocean-600 mb-4" />
              <h3 className="text-xl font-semibold text-ocean-800 mb-3">
                Family Charters
              </h3>
              <p className="text-gray-600 mb-4">
                Half and full-day charters designed for families of all skill levels.
              </p>
              <span className="text-ocean-600 font-semibold">Coming Soon</span>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Fish className="w-12 h-12 text-ocean-600 mb-4" />
              <h3 className="text-xl font-semibold text-ocean-800 mb-3">
                Fishing Consultation
              </h3>
              <p className="text-gray-600 mb-4">
                Get expert advice on techniques, equipment, and Gulf Coast fishing spots.
              </p>
              <span className="text-sand-600 font-semibold">Available Now</span>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-ocean-600 mb-4" />
              <h3 className="text-xl font-semibold text-ocean-800 mb-3">
                Group Adventures
              </h3>
              <p className="text-gray-600 mb-4">
                Special group rates for family reunions and celebrations.
              </p>
              <span className="text-ocean-600 font-semibold">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-12 bg-ocean-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center space-x-8 text-white">
            <Link href="/fishing-reports" className="hover:text-sand-400 transition-colors">
              Fishing Reports
            </Link>
            <Link href="/blog" className="hover:text-sand-400 transition-colors">
              Fishing Blog
            </Link>
            <Link href="/videos" className="hover:text-sand-400 transition-colors">
              Video Library
            </Link>
            <Link href="/tips" className="hover:text-sand-400 transition-colors">
              Fishing Tips
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-950 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-display text-2xl font-bold mb-4">Captain Tracy</h3>
          <p className="text-ocean-300 mb-6">
            Gulf Coast Charter Fishing • Bringing Families Together
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <Mail className="w-6 h-6 text-ocean-400 hover:text-white cursor-pointer" />
          </div>
          <p className="text-sm text-ocean-400">
            © {new Date().getFullYear()} Captain Tracy Charter Fishing. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}