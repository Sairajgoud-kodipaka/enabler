import Link from "next/link"
import Reveal from "../../components/Reveal"
import Image from "next/image"

export default function ComprehensiveManagementPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FB]">
      {/* Hero Section */}
      <Reveal delay={0}>
        <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden rounded-b-3xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1E40]/90 via-[#6C3EB8]/80 to-[#E94B8A]/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="/cm-hero.png" alt="Hero background" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-0 max-w-2xl mx-auto md:ml-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-24 md:mt-0 leading-tight">Comprehensive Management</h1>
            <Link href="#" className="inline-block bg-white text-[#6C3EB8] font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition-colors w-auto self-start">Get Started</Link>
          </div>
        </section>
      </Reveal>

      {/* Intro Section */}
      <Reveal delay={0.1}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-[#E94B8A] mb-4">End-to-End GCC Management, Simplified.</h2>
          <p className="text-[#0A1E40] mb-6">Enablr offers comprehensive management solutions for your global capability center, covering every aspect from setup to steady-state operations. Our approach ensures seamless integration, operational excellence, and continuous improvement, so you can focus on your core business while we handle the rest.</p>
        </section>
      </Reveal>

      {/* Our Services Section */}
      <Reveal delay={0.2}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h3 className="text-xl font-bold text-white bg-[#0A1E40] rounded-t-xl px-6 py-4">Our Services</h3>
          <div className="bg-[#0A1E40] rounded-b-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 flex flex-col gap-4 shadow-md">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="6" y="6" width="8" height="8" rx="2" stroke="#0A1E40" strokeWidth="2"/><rect x="6" y="20" width="8" height="8" rx="2" stroke="#0A1E40" strokeWidth="2"/><rect x="20" y="6" width="8" height="8" rx="2" stroke="#0A1E40" strokeWidth="2"/><rect x="20" y="20" width="8" height="8" rx="2" stroke="#0A1E40" strokeWidth="2"/></svg>
              <h4 className="font-bold text-lg text-[#0A1E40]">Strategic Planning & Governance</h4>
              <p className="text-[#4B587C] text-base">We help you define a clear vision, set measurable goals, and establish governance frameworks for your GCC's long-term success.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 flex flex-col gap-4 shadow-md">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><path d="M8 32c4-8 8-12 16-16" stroke="#0A1E40" strokeWidth="2" strokeLinecap="round"/><path d="M24 16l4-4m0 0v4m0-4h-4" stroke="#0A1E40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <h4 className="font-bold text-lg text-[#0A1E40]">Operational Excellence</h4>
              <p className="text-[#4B587C] text-base">Optimize processes, drive efficiency, and ensure compliance with best-in-class operational management tailored to your needs.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 flex flex-col gap-4 shadow-md">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="8" stroke="#0A1E40" strokeWidth="2"/><path d="M20 8v4M20 28v4M32 20h-4M8 20h4" stroke="#0A1E40" strokeWidth="2" strokeLinecap="round"/></svg>
              <h4 className="font-bold text-lg text-[#0A1E40]">Integrated Technology & Analytics</h4>
              <p className="text-[#4B587C] text-base">Leverage advanced technology and analytics for data-driven decision making and continuous improvement.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-xl p-8 flex flex-col gap-4 shadow-md">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="8" stroke="#0A1E40" strokeWidth="2"/><circle cx="20" cy="20" r="16" stroke="#0A1E40" strokeWidth="2"/></svg>
              <h4 className="font-bold text-lg text-[#0A1E40]">People & Change Management</h4>
              <p className="text-[#4B587C] text-base">Support your teams through change, foster a high-performance culture, and ensure smooth transitions at every stage.</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Why Choose Us Section */}
      <Reveal delay={0.3}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h3 className="text-3xl font-bold text-center mb-10" style={{ color: '#7A2048' }}>Why choose us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
              <Image src="/cm-1.png" alt="Proven Track Record" width={400} height={220} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-xl mb-2">Proven Track Record</h4>
                <p className="text-[#0A1E40] text-base">Years of experience managing GCCs for global enterprises.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
              <Image src="/cm-2.png" alt="End-to-End Partnership" width={400} height={220} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-xl mb-2">End-to-End Partnership</h4>
                <p className="text-[#0A1E40] text-base">From setup to steady-state, we're with you at every step.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
              <Image src="/cm-3.png" alt="Continuous Innovation" width={400} height={220} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-xl mb-2">Continuous Innovation</h4>
                <p className="text-[#0A1E40] text-base">We drive improvement and agility for your GCC's future.</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  )
} 