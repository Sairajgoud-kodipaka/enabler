import Link from "next/link"
import { Squares2X2Icon, ServerStackIcon, CloudIcon, ChartBarSquareIcon } from "@heroicons/react/24/solid"
import Reveal from "../../components/Reveal"

export default function TechnologyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FB]">
      {/* Hero Section */}
      <Reveal delay={0}>
        <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden rounded-b-3xl">
          <div className="absolute inset-0">
            <img src="/tech-hero.png" alt="Hero background with waves and building" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-0 max-w-2xl mx-auto md:ml-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-24 md:mt-0 leading-tight">Technology Enablement Solutions</h1>
            <Link href="#" className="inline-block bg-white text-[#6C3EB8] font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition-colors w-auto self-start">Get Started</Link>
          </div>
        </section>
      </Reveal>

      {/* Intro Section */}
      <Reveal delay={0.1}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-[#E94B8A] mb-4">Enable, Integrate, and Scale — Without the Overwhelm.</h2>
          <p className="text-[#0A1E40] mb-6">At Enablr, we can help you leverage technology to set up your global capability center successfully. Whether you are streamlining business operations, enhancing customer experience, or driving innovation, we offer tailored technology solutions that align with your business goals and help you scale your capability center. With deep regional insights, and global business expertise, we help turn complexity into clarity, and ideas into reality.</p>
        </section>
      </Reveal>

      {/* Key Offerings Section */}
      <Reveal delay={0.2}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h3 className="text-xl font-bold text-white bg-[#0A1E40] rounded-t-xl px-6 py-4">Key Offerings</h3>
          <div className="bg-[#0A1E40] rounded-b-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#0A1E40] border border-white/20 rounded-lg p-6 flex flex-col items-start">
              <Squares2X2Icon className="w-12 h-12 text-white bg-[#23325B] p-2 rounded mb-4" />
              <h4 className="text-white font-semibold mb-2">End-to-end technology delivery</h4>
              <p className="text-white/80 text-sm">From product development to ongoing support, we help you build and manage the technology you need to move forward in your GCC journey. Our goal is to create a well-orchestrated system that runs seamlessly and supports your growth.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#0A1E40] border border-white/20 rounded-lg p-6 flex flex-col items-start">
              <ServerStackIcon className="w-12 h-12 text-white bg-[#23325B] p-2 rounded mb-4" />
              <h4 className="text-white font-semibold mb-2">IT infrastructure setup and management</h4>
              <p className="text-white/80 text-sm">While technology is the backbone of every business, we know the roadblocks that can slow down your journey. We handle the IT infrastructure, including Cloud and network connectivity to provide a secure and scalable setup for you.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#0A1E40] border border-white/20 rounded-lg p-6 flex flex-col items-start">
              <CloudIcon className="w-12 h-12 text-white bg-[#23325B] p-2 rounded mb-4" />
              <h4 className="text-white font-semibold mb-2">Access to emerging technologies</h4>
              <p className="text-white/80 text-sm">Our objective is to get your GCC future-ready. With any trending or emerging technology that you need, we help you test, adopt, and integrate without a doubt.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-[#0A1E40] border border-white/20 rounded-lg p-6 flex flex-col items-start">
              <ChartBarSquareIcon className="w-12 h-12 text-white bg-[#23325B] p-2 rounded mb-4" />
              <h4 className="text-white font-semibold mb-2">Technology consulting and CTO services</h4>
              <p className="text-white/80 text-sm">We are your trusted tech partner, enabling you to plan, scale, and grow with confidence. From building technology architecture to mapping a long-term strategy, we help you take smart decisions.</p>
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
              <img src="/seamless.png" alt="Seamless technology integration" className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-xl mb-2">Seamless technology integration</h4>
                <p className="text-[#0A1E40] text-base">From infra to platform-level integration, everything works together with minimal disruption.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
              <img src="/exp.png" alt="Experienced leadership with long-term vision" className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-xl mb-2">Experienced leadership with long-term vision</h4>
                <p className="text-[#0A1E40] text-base">We bring GCC tech and domain expertise to plan for outcomes, not just implementation.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
              <img src="/smart.png" alt="Not just a technology checklist — strategic partnership" className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-xl mb-2">Not just a technology checklist — strategic partnership</h4>
                <p className="text-[#0A1E40] text-base">We don't sell tools. We align tech with your mission and operations.</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  )
} 