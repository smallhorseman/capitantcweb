import Link from 'next/link'
import { Lightbulb, Fish, Target, Calendar, Clock, Users } from 'lucide-react'

export default function Tips() {
  const tipCategories = [
    {
      id: 'beginners',
      title: 'Beginner Tips',
      icon: Lightbulb,
      description: 'Essential knowledge for new anglers',
      tips: [
        {
          title: 'Start with Simple Tackle',
          description: 'Don&apos;t overwhelm yourself with complex equipment. A basic rod, reel, and some hooks will get you started.',
          difficulty: 'Beginner'
        },
        {
          title: 'Learn to Tie Basic Knots',
          description: 'Master the improved clinch knot and Palomar knot - these two will handle 90% of your fishing needs.',
          difficulty: 'Beginner'
        },
        {
          title: 'Watch the Weather',
          description: 'Fish are more active before weather fronts. Overcast days often produce better results than bright sunny days.',
          difficulty: 'Beginner'
        }
      ]
    },
    {
      id: 'family',
      title: 'Family Fishing',
      icon: Users,
      description: 'Making fishing fun for the whole family',
      tips: [
        {
          title: 'Bring Snacks and Entertainment',
          description: 'Pack plenty of snacks and backup activities for kids. Fishing requires patience that children are still developing.',
          difficulty: 'Family'
        },
        {
          title: 'Start Close to Shore',
          description: 'Begin with easy, accessible fishing spots. Success builds excitement and confidence in young anglers.',
          difficulty: 'Family'
        },
        {
          title: 'Make it About More Than Fish',
          description: 'Focus on the experience - wildlife watching, storytelling, and quality time together.',
          difficulty: 'Family'
        }
      ]
    },
    {
      id: 'techniques',
      title: 'Advanced Techniques',
      icon: Target,
      description: 'Improve your success rate',
      tips: [
        {
          title: 'Match the Hatch',
          description: 'Observe what baitfish are in the area and use lures or bait that mimic them in size, color, and movement.',
          difficulty: 'Advanced'
        },
        {
          title: 'Fish Structure Changes',
          description: 'Look for drops, ridges, or changes in bottom composition. Fish use these as highways and feeding areas.',
          difficulty: 'Advanced'
        },
        {
          title: 'Vary Your Retrieve Speed',
          description: 'Don&apos;t stick to one retrieve speed. Fish preferences can change throughout the day.',
          difficulty: 'Advanced'
        }
      ]
    },
    {
      id: 'seasonal',
      title: 'Seasonal Strategies',
      icon: Calendar,
      description: 'Gulf Coast seasonal patterns',
      tips: [
        {
          title: 'Spring Migration Patterns',
          description: 'Spring brings fish moving to shallow water to spawn. Focus on bays and near-shore structures.',
          difficulty: 'Intermediate'
        },
        {
          title: 'Summer Deep Water',
          description: 'Hot summer months drive fish to deeper, cooler water. Target 60+ foot depths during midday.',
          difficulty: 'Intermediate'
        },
        {
          title: 'Fall Feeding Frenzies',
          description: 'Fall feeding activity increases as fish prepare for winter. This is often the best fishing of the year.',
          difficulty: 'Intermediate'
        }
      ]
    }
  ]

  const quickTips = [
    'Always check your drag before fishing - it should be smooth and consistent',
    'Keep your hooks sharp - a dull hook misses more fish than poor technique',
    'Fish during low-light periods (dawn and dusk) for better action',
    'Use circle hooks for live bait to reduce deep hooking',
    'Bring a cooler with ice to keep your catch fresh',
    'Never turn your back on the ocean - always be aware of waves',
    'Pack more bait than you think you&apos;ll need',
    'Learn to read the water - look for birds, current lines, and color changes'
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-ocean-900 text-white py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-block mb-4 text-ocean-300 hover:text-white">
            ← Back to Home
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Fishing Tips
          </h1>
          <p className="text-xl text-ocean-200 max-w-2xl">
            Learn from Captain Tracy&apos;s 50+ years of Gulf Coast fishing experience
          </p>
        </div>
      </header>

      {/* Quick Tips Banner */}
      <section className="py-8 bg-sand-100">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-ocean-900 mb-4 flex items-center">
            <Lightbulb className="w-6 h-6 mr-2" />
            Quick Tips for Better Fishing
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickTips.slice(0, 4).map((tip, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border-l-4 border-sand-500">
                <p className="text-sm text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Tips Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-ocean-900 mb-8">Fishing Tips by Category</h2>
          <div className="space-y-12">
            {tipCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <div key={category.id} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-ocean-100 p-3 rounded-lg mr-4">
                      <IconComponent className="w-8 h-8 text-ocean-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-ocean-900">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                    {category.tips.map((tip, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-ocean-800">{tip.title}</h4>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            tip.difficulty === 'Beginner' 
                              ? 'bg-green-100 text-green-800'
                              : tip.difficulty === 'Intermediate'
                              ? 'bg-yellow-100 text-yellow-800'
                              : tip.difficulty === 'Advanced'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {tip.difficulty}
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm">{tip.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* More Quick Tips */}
      <section className="py-12 bg-ocean-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-ocean-900 mb-8">Captain Tracy&apos;s Pro Tips</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {quickTips.slice(4).map((tip, index) => (
              <div key={index + 4} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-ocean-500">
                <div className="flex items-start space-x-3">
                  <Fish className="w-5 h-5 text-ocean-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-ocean-900 mb-8">Safety First: Essential Safety Tips</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-4">Always Remember:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-red-700">Tell someone your fishing plans and expected return time</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-red-700">Always wear life jackets, especially for children</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-red-700">Check weather conditions before heading out</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-red-700">Carry a first aid kit and know how to use it</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-red-700">Bring plenty of water and sun protection</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-red-700">Have proper communication devices (radio, cell phone)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-red-700">Know your limits and don&apos;t take unnecessary risks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-red-700">Be aware of local regulations and fishing licenses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-ocean-700 to-ocean-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Get Weekly Fishing Tips
          </h2>
          <p className="text-ocean-100 mb-8 max-w-2xl mx-auto">
            Get Captain Tracy&apos;s best fishing tips, techniques, and family fishing advice delivered to your inbox.
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
                Get Tips
              </button>
            </form>
          </div>
          <p className="text-ocean-200 text-sm mt-4">
            Join 1,500+ anglers improving their fishing success
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