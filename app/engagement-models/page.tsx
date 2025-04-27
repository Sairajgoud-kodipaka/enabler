import Link from "next/link"

export default function EngagementModelsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FB]">
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-[#0A1E40] mb-4">Engagement Models</h1>
        <p className="text-[#7A2048] text-lg">Explore our flexible engagement models designed to fit your GCC journey.</p>
      </section>

      {/* Hero Section */}
      <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden rounded-b-3xl">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1E40]/90 via-[#6C3EB8]/80 to-[#E94B8A]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full max-w-5xl mx-auto" /> {/* Image placeholder */}
        </div>
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-0 max-w-2xl mx-auto md:ml-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-24 md:mt-0 leading-tight">Engagement Models at Enablr</h1>
          <Link href="#" className="inline-block bg-white text-[#6C3EB8] font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition-colors w-auto self-start">Get Started</Link>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0A1E40] mb-2">Choose the GCC engagement model that fits your growth vision</h2>
            <p className="text-[#0A1E40]">From fully managed services to modular flexibility, we offer a range of engagement models to support your transformation journey and align with your business priorities.</p>
            <ul className="list-disc pl-6 text-[#7A2048] space-y-2">
              <li>Comprehensive Management</li>
              <li>Modular Services</li>
              <li>Build-Operate-Transfer (BOT)</li>
              <li>Dedicated Teams</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-80 h-64 bg-gray-200 rounded-xl shadow" /> {/* Image placeholder */}
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-xl font-bold text-[#E94B8A] mb-6">Our Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1,2,3,4].map(idx => (
            <div key={idx} className="bg-[#F8F9FB] rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-full h-28 mb-3 bg-gray-200 rounded-lg" /> {/* Image placeholder */}
              <h4 className="text-[#0A1E40] font-semibold text-base mb-2 text-center">Solution Title</h4>
              <Link href="#" className="text-[#E94B8A] font-medium text-sm hover:underline">Know More</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
} 