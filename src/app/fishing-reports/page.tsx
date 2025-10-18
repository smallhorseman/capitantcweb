import Link from 'next/link'
import { Fish, Calendar, MapPin, Thermometer, Wind, Waves } from 'lucide-react'

export default function FishingReports() {
  const reports = [
    {
      id: 1,
      date: '2025-10-17',
      title: 'Excellent Red Snapper Action',
      location: 'Gulf Coast - 20 Mile Reef',
      conditions: {
        weather: 'Sunny, 78°F',
        wind: 'SE 10-15 mph',
        seas: '2-3 feet'
      },
      summary: 'Red snapper are biting well on live bait around the deeper structures. Best action from 7AM-11AM.',
      species: ['Red Snapper', 'Grouper', 'Amberjack'],
      tips: 'Use circle hooks and fresh bait for best results. Target 80-120 foot depths.'
    },
    {
      id: 2,
      date: '2025-10-15',
      title: 'Inshore Trout Feeding Frenzy',
      location: 'Back Bay Flats',
      conditions: {
        weather: 'Partly cloudy, 75°F',
        wind: 'E 5-10 mph',
        seas: 'Calm'
      },
      summary: 'Speckled trout are active in shallow water. Topwater lures producing excellent results.',
      species: ['Speckled Trout', 'Redfish', 'Flounder'],
      tips: 'Early morning topwater action is hot. Switch to soft plastics as the sun gets higher.'
    },
    {
      id: 3,
      date: '2025-10-12',
      title: 'King Mackerel Migration',
      location: 'Gulf Coast - 15 Mile Marker',
      conditions: {
        weather: 'Clear, 72°F',
        wind: 'NE 8-12 mph',
        seas: '1-2 feet'
      },
      summary: 'King mackerel are moving through the area. Trolling producing good numbers.',
      species: ['King Mackerel', 'Spanish Mackerel', 'Cobia'],
      tips: 'Troll at 6-8 knots with live bait or spoons. Look for bird activity and temperature breaks.'
    }
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
            Fishing Reports
          </h1>
          <p className="text-xl text-ocean-200">
            Latest conditions and catches from Gulf Coast waters
          </p>
        </div>
      </header>

      {/* Current Conditions */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-ocean-900 mb-6">Current Conditions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 p-4 bg-ocean-50 rounded-lg">
              <Thermometer className="w-8 h-8 text-ocean-600" />
              <div>
                <p className="font-semibold text-ocean-800">Water Temperature</p>
                <p className="text-ocean-600">74°F - 76°F</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-ocean-50 rounded-lg">
              <Wind className="w-8 h-8 text-ocean-600" />
              <div>
                <p className="font-semibold text-ocean-800">Wind</p>
                <p className="text-ocean-600">SE 10-15 mph</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-ocean-50 rounded-lg">
              <Waves className="w-8 h-8 text-ocean-600" />
              <div>
                <p className="font-semibold text-ocean-800">Sea State</p>
                <p className="text-ocean-600">2-3 feet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-ocean-900 mb-8">Recent Reports</h2>
          <div className="space-y-8">
            {reports.map((report) => (
              <article key={report.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-ocean-900 mb-2">
                      {report.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(report.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{report.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-ocean-800 mb-3">Conditions</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Weather:</span>
                        <span>{report.conditions.weather}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Wind:</span>
                        <span>{report.conditions.wind}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Seas:</span>
                        <span>{report.conditions.seas}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-ocean-800 mb-3">Target Species</h4>
                    <div className="flex flex-wrap gap-2">
                      {report.species.map((species) => (
                        <span
                          key={species}
                          className="px-3 py-1 bg-ocean-100 text-ocean-800 text-sm rounded-full"
                        >
                          {species}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-ocean-800 mb-2">Report</h4>
                  <p className="text-gray-700">{report.summary}</p>
                </div>

                <div className="bg-sand-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-ocean-800 mb-2 flex items-center">
                    <Fish className="w-4 h-4 mr-2" />
                    Captain&apos;s Tips
                  </h4>
                  <p className="text-gray-700">{report.tips}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-ocean-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Get Weekly Fishing Reports
          </h2>
          <p className="text-ocean-200 mb-6 max-w-2xl mx-auto">
            Join our email list to receive detailed fishing reports, conditions updates, and exclusive tips from Captain Tracy.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sand-500 focus:border-transparent"
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