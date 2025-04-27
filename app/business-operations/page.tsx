import Link from "next/link"
import Reveal from "../../components/Reveal"
import { ChartBarSquareIcon, BanknotesIcon, ScaleIcon } from "@heroicons/react/24/outline"

export default function BusinessOperationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FB]">
      {/* Hero Section */}
      <Reveal delay={0}>
        <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden rounded-b-3xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1E40]/90 via-[#6C3EB8]/80 to-[#E94B8A]/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="/bos-hero.png" alt="Hero background" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-0 max-w-2xl mx-auto md:ml-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-24 md:mt-0 leading-tight">Business Operations Solutions</h1>
            <Link href="#" className="inline-block bg-white text-[#6C3EB8] font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition-colors w-auto self-start">Get Started</Link>
          </div>
        </section>
      </Reveal>

      {/* Intro Section */}
      <Reveal delay={0.1}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-[#E94B8A] mb-4">Enable Execution. Ensure Compliance. Empower Growth.</h2>
          <p className="text-[#0A1E40] mb-6">Enablr helps simplify and optimize business operations in your capability center, enabling you to move faster and scale smarter. From administration and procurement to HR, payroll, and regulatory support, we work as your behind-the-scenes engine, so that you can focus on business growth, strategy, and execution. If you are setting up a global capability center, then you can trust Enablr for the local expertise and operational muscle to make it seamless.</p>
          <p className="text-[#0A1E40]">Partner with Enablr to accelerate your GCC plans.</p>
        </section>
      </Reveal>

      {/* Solutions Grid Section */}
      <Reveal delay={0.2}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h3 className="text-xl font-bold text-white bg-[#0A1E40] rounded-t-xl px-6 py-4">Comprehensive Business Operations</h3>
          <div className="bg-[#0A1E40] rounded-b-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Business Process Integration */}
            <div className="bg-[#0A1E40] border border-white/20 rounded-lg p-6 flex flex-col items-start">
              <ChartBarSquareIcon className="w-12 h-12 text-white bg-[#23325B] p-2 rounded mb-4" />
              <h4 className="text-white font-semibold mb-2">Business Process Integration</h4>
              <p className="text-white/80 text-sm">Whether teams are global or local, your operations should flow as one. We unify systems and processes to create a seamless backbone for your GCC.</p>
            </div>
            {/* Finance & Accounting */}
            <div className="bg-[#0A1E40] border border-white/20 rounded-lg p-6 flex flex-col items-start">
              <BanknotesIcon className="w-12 h-12 text-white bg-[#23325B] p-2 rounded mb-4" />
              <h4 className="text-white font-semibold mb-2">Finance & Accounting</h4>
              <p className="text-white/80 text-sm">We ensure clean, compliant finance operations — including payroll, reporting, taxation, and localized regulatory needs — so you can scale with confidence.</p>
            </div>
            {/* Regulatory & Compliance Management */}
            <div className="bg-[#0A1E40] border border-white/20 rounded-lg p-6 flex flex-col items-start">
              <ScaleIcon className="w-12 h-12 text-white bg-[#23325B] p-2 rounded mb-4" />
              <h4 className="text-white font-semibold mb-2">Regulatory & Compliance Management</h4>
              <p className="text-white/80 text-sm">Red tape? We navigate it for you. From licensing to documentation, we ensure you remain compliant and future-ready in any geography.</p>
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
              <img src="/bos-1.png" alt="Simplified Governance & Reporting" className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-xl mb-2">Simplified Governance & Reporting</h4>
                <p className="text-[#0A1E40] text-base">Clarity in dashboards and clean documentation from day one.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
              <img src="/bos-2.png" alt="Infrastructure Setup with Operational Excellence" className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-xl mb-2">Infrastructure Setup with Operational Excellence</h4>
                <p className="text-[#0A1E40] text-base">From IT to admin, we handle everything that makes your operations click.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
              <img src="/bos-3.png" alt="Continuous Innovation for Accelerated Growth" className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-xl mb-2">Continuous Innovation for Accelerated Growth</h4>
                <p className="text-[#0A1E40] text-base">We build for agility — so your operations aren't just stable, they're scalable.</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  )
} 