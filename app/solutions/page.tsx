import Link from "next/link"
import Reveal from "../../components/Reveal"

export default function SolutionsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-24 md:mt-0 leading-tight">A one-stop-shop for all your GCC needs</h1>
            <Link href="#" className="inline-block bg-white text-[#6C3EB8] font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition-colors">Lets Connect</Link>
          </div>
        </section>
      </Reveal>

      {/* Solutions Section */}
      <Reveal delay={0.1}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#0A1E40] mb-2">Our Solutions</h2>
              <p className="text-[#0A1E40]">We offer a comprehensive suite of solutions to help you build, operate, and scale your GCC with confidence and speed.</p>
              <ul className="list-disc pl-6 text-[#7A2048] space-y-2">
                <li>GCC as a Service</li>
                <li>Technology Enablement</li>
                <li>Workspace</li>
                <li>Talent & HR</li>
                <li>Business Operations</li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-80 h-64 bg-gray-200 rounded-xl shadow" /> {/* Image placeholder */}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Why Choose Us Section */}
      <Reveal delay={0.2}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="bg-[#FFF3F7] rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center shadow">
            <div className="flex-1">
              <h3 className="text-[#E94B8A] text-lg font-bold mb-2">Why choose Enablr</h3>
              <p className="text-[#0A1E40] text-lg font-medium">Designed for leaders who need speed, trust-worthy partnership, and results</p>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="w-48 h-32 bg-gray-200 rounded-lg" /> {/* Image placeholder */}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Contact CTA Section */}
      <Reveal delay={0.3}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="bg-[#0A1E40] rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center shadow">
            <div className="flex-1">
              <h3 className="text-white text-lg font-bold mb-2">Ready to get started?</h3>
              <p className="text-white text-base mb-4">Contact us today to discuss your GCC needs and discover how Enablr can help you succeed.</p>
              <Link href="#" className="inline-block bg-white text-[#0A1E40] font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition-colors">Lets Connect</Link>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="w-48 h-32 bg-gray-200 rounded-lg" /> {/* Image placeholder */}
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  )
} 