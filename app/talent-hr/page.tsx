import Link from "next/link"
import Reveal from "../../components/Reveal"
import { UsersIcon, AcademicCapIcon, MagnifyingGlassIcon, BoltIcon } from "@heroicons/react/24/outline"

export default function TalentHRPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FB]">
      {/* Hero Section */}
      <Reveal delay={0}>
        <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden rounded-b-3xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1E40]/90 via-[#6C3EB8]/80 to-[#E94B8A]/70" />
          <div className="absolute inset-0 flex items-center justify-center">
          <img src="/thr-hero.png" alt="Hero background" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-0 max-w-2xl mx-auto md:ml-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-24 md:mt-0 leading-tight">Talent and HR Solutions</h1>
            <Link href="#" className="inline-block bg-white text-[#6C3EB8] font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition-colors w-auto self-start">Get Started</Link>
          </div>
        </section>
      </Reveal>

      {/* Intro Section */}
      <Reveal delay={0.1}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-[#E94B8A] mb-4">Hire Smart. Retain Strong. Scale Without Friction.</h2>
          <p className="text-[#0A1E40] mb-6">Enablr provides end-to-end talent & HR solutions tailored to the unique requirements of your business. Whether you have to source high-quality talent, manage complex visa processes, onboard employees or manage compliance workflows—we help simplify people operations so that you can focus on business growth. As you set up your global capability center, we help you hire faster, stay compliant, and retain talent that drives impact.</p>
          <p className="text-[#0A1E40]">Build the dream team for your capability center with the help of experts who know the GCC domain.</p>
        </section>
      </Reveal>

      {/* Solutions Grid Section */}
      <Reveal delay={0.2}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h3 className="text-xl font-bold text-white bg-[#0A1E40] rounded-t-xl px-6 py-4">Comprehensive Talent Solutions</h3>
          <div className="bg-[#0A1E40] rounded-b-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* HR Operations & Workforce Management */}
            <div className="bg-[#0A1E40] border border-white/20 rounded-lg p-6 flex flex-col items-start">
              <UsersIcon className="w-12 h-12 text-white bg-[#23325B] p-2 rounded mb-4" />
              <h4 className="text-white font-semibold mb-2">HR Operations & Workforce Management</h4>
              <p className="text-white/80 text-sm">Your business needs structured support from onboarding to daily HR tasks. We handle the backend so you can stay focused on strategy.</p>
            </div>
            {/* Upskilling & Training Programs */}
            <div className="bg-[#0A1E40] border border-white/20 rounded-lg p-6 flex flex-col items-start">
              <AcademicCapIcon className="w-12 h-12 text-white bg-[#23325B] p-2 rounded mb-4" />
              <h4 className="text-white font-semibold mb-2">Upskilling & Training Programs</h4>
              <p className="text-white/80 text-sm">We co-create learning initiatives that align with your business needs and keep your teams future-ready.</p>
            </div>
            {/* Streamlined Recruitment */}
            <div className="bg-[#0A1E40] border border-white/20 rounded-lg p-6 flex flex-col items-start">
              <MagnifyingGlassIcon className="w-12 h-12 text-white bg-[#23325B] p-2 rounded mb-4" />
              <h4 className="text-white font-semibold mb-2">Streamlined Recruitment</h4>
              <p className="text-white/80 text-sm">We reduce operational load through scheduling automation, pipeline visibility, and smart tracking tools — saving time, increasing speed.</p>
            </div>
            {/* Performance Management */}
            <div className="bg-[#0A1E40] border border-white/20 rounded-lg p-6 flex flex-col items-start">
              <BoltIcon className="w-12 h-12 text-white bg-[#23325B] p-2 rounded mb-4" />
              <h4 className="text-white font-semibold mb-2">Performance Management</h4>
              <p className="text-white/80 text-sm">Drive high performance with structured feedback, goal setting, and recognition programs that motivate and engage your team.</p>
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
              <img src="/thr-1.png" alt="Tier-2 & Tier-3 Talent Awareness" className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-xl mb-2">Tier-2 & Tier-3 Talent Awareness</h4>
                <p className="text-[#0A1E40] text-base">We bring GCC tech and domain expertise to plan for outcoWe unlock regional hiring opportunities beyond saturated metros.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
              <img src="/thr-2.png" alt="Access to Untapped Talent Pools" className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-xl mb-2">Access to Untapped Talent Pools</h4>
                <p className="text-[#0A1E40] text-base">Our sourcing network spans across industries, geographies, and experience levels.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
              <img src="/thr-3.png" alt="Optimized Recruitment Cost" className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-xl mb-2">Optimized Recruitment Cost</h4>
                <p className="text-[#0A1E40] text-base">Faster hiring, less operational waste, better long-term retention = reduced cost-per-hire.</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
      
    </div>
  )
} 