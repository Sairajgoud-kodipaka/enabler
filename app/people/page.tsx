import Link from "next/link"
import Reveal from "../../components/Reveal"

export default function PeopleTalentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FB]">
      {/* Hero Section */}
      <Reveal delay={0}>
        <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden rounded-b-3xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1E40]/90 via-[#6C3EB8]/80 to-[#E94B8A]/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full max-w-5xl mx-auto" /> {/* Image placeholder */}
          </div>
          <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-0 max-w-2xl mx-auto md:ml-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-24 md:mt-0 leading-tight">People & Talent Solutions</h1>
            <Link href="#" className="inline-block bg-white text-[#6C3EB8] font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition-colors w-auto self-start">Get Started</Link>
          </div>
        </section>
      </Reveal>

      {/* Intro Section */}
      <Reveal delay={0.1}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-[#E94B8A] mb-4">Empowering Your GCC with World-Class Talent</h2>
          <p className="text-[#0A1E40] mb-6">Enablr specializes in sourcing, developing, and retaining top talent for your global capability center. Our people-first approach ensures your GCC is staffed with skilled professionals who drive innovation, collaboration, and long-term success.</p>
        </section>
      </Reveal>

      {/* Our Talent Solutions Section */}
      <Reveal delay={0.2}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h3 className="text-xl font-bold text-white bg-[#0A1E40] rounded-t-xl px-6 py-4">Our Talent Solutions</h3>
          <div className="bg-[#0A1E40] rounded-b-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1,2,3,4].map(idx => (
              <div key={idx} className="bg-[#0A1E40] border border-white/20 rounded-lg p-6 flex flex-col items-start">
                <div className="w-12 h-12 bg-gray-200 rounded mb-4" /> {/* Icon/Image placeholder */}
                <h4 className="text-white font-semibold mb-2">Talent Solution Title</h4>
                <p className="text-white/80 text-sm">Short description of the talent solution goes here.</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Why Choose Us Section */}
      <Reveal delay={0.3}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h3 className="text-xl font-bold text-[#E94B8A] mb-6">Why choose us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map(idx => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
                <div className="h-40 bg-gray-200 flex items-center justify-center" /> {/* Image placeholder */}
                <div className="p-6">
                  <h4 className="text-[#0A1E40] font-semibold mb-2">Why Choose Card Title</h4>
                  <p className="text-[#7A2048] text-sm">Short description for why choose us card.</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  )
} 