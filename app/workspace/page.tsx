import Link from "next/link"
import Reveal from "../../components/Reveal"
import { BuildingOffice2Icon, Squares2X2Icon, WrenchScrewdriverIcon, UserCircleIcon } from "@heroicons/react/24/solid"

export default function WorkspacePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FB]">
      {/* Hero Section */}
      <Reveal delay={0}>
        <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden rounded-b-3xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1E40]/90 via-[#E94B8A]/80 to-[#6C3EB8]/70" />
          <div className="absolute inset-0 flex items-center justify-center">
          <img src="/ws-hero.png" alt="Hero background" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-0 max-w-2xl mx-auto md:ml-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-24 md:mt-0 leading-tight">Workspace Solutions</h1>
            <Link href="#" className="inline-block bg-white text-[#6C3EB8] font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition-colors w-auto self-start">Get Started</Link>
          </div>
        </section>
      </Reveal>

      {/* Intro Section */}
      <Reveal delay={0.1}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-[#E94B8A] mb-4">Workspaces That Work — Without the Operational Load.</h2>
          <p className="text-[#0A1E40] mb-6">Enablr helps design, manage, and optimize workplace environments across your capability center so that your teams can work in a cohesive environment. From workspace design to tech integration and sustainability solutions, we help deliver future-ready workspaces that help drive productivity, well-being, and operational excellence. You can trust us to enable workplace transformation for your capability center; smarter, safer, and built for sustainability.</p>
        </section>
      </Reveal>

      {/* Workspace Offerings Section */}
      <Reveal delay={0.2}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h3 className="text-xl font-bold text-white bg-[#0A1E40] rounded-t-xl px-6 py-4">Our Workspace Offerings</h3>
          <div className="bg-[#0A1E40] rounded-b-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Managed Offices */}
            <div className="bg-[#0A1E40] border border-white/20 rounded-lg p-6 flex flex-col items-start">
              <BuildingOffice2Icon className="w-12 h-12 text-white bg-[#23325B] p-2 rounded mb-4" />
              <h4 className="text-white font-semibold mb-2">Managed Offices</h4>
              <p className="text-white/80 text-sm">Your GCC just doesn’t need a physical space, it needs a setup, full length services, and smooth day-to-day operations, so that you can build on your larger business goals. We work with you to create a work environment where you can just walk in, plug in, and get started.</p>
            </div>
            {/* Flexible Workspaces */}
            <div className="bg-[#0A1E40] border border-white/20 rounded-lg p-6 flex flex-col items-start">
              <Squares2X2Icon className="w-12 h-12 text-white bg-[#23325B] p-2 rounded mb-4" />
              <h4 className="text-white font-semibold mb-2">Flexible Workspaces</h4>
              <p className="text-white/80 text-sm">Your needs could be temporary, short-term, or long-term — we get it. We can set up a space for a project, a growing team, or any time period you need. This enables you to stay flexible and adaptable, aligned with your business goals.</p>
            </div>
            {/* Customized Office Spaces */}
            <div className="bg-[#0A1E40] border border-white/20 rounded-lg p-6 flex flex-col items-start">
              <WrenchScrewdriverIcon className="w-12 h-12 text-white bg-[#23325B] p-2 rounded mb-4" />
              <h4 className="text-white font-semibold mb-2">Customized Office Spaces</h4>
              <p className="text-white/80 text-sm">Your business deserves a space that aligns with your core value propositions and brand identity. We help design and set up your office to match your vibe, workflow, and goals.</p>
            </div>
            {/* Co-working Spaces */}
            <div className="bg-[#0A1E40] border border-white/20 rounded-lg p-6 flex flex-col items-start">
              <UserCircleIcon className="w-12 h-12 text-white bg-[#23325B] p-2 rounded mb-4" />
              <h4 className="text-white font-semibold mb-2">Co-working Spaces</h4>
              <p className="text-white/80 text-sm">Whether your team is remote, hybrid, or needs temporary access, we make it easy to stay connected. Choose from shared spaces, dedicated desks, or a custom hybrid that works your way.</p>
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
              <img src="/coes.png" alt="Purpose-led Centers of Excellence (CoEs)" className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-xl mb-2">Purpose-led Centers of Excellence (CoEs)</h4>
                <p className="text-[#0A1E40] text-base">From infra to platform-level integration, everything works together with minimal disruption.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
              <img src="/scalable.png" alt="Flexible and Scalable" className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-xl mb-2">Flexible and Scalable</h4>
                <p className="text-[#0A1E40] text-base">Our workspace solutions grow with your business needs — short-term or long-term.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
              <img src="/focus.png" alt="Designed for Focus and Productivity" className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-xl mb-2">Designed for Focus and Productivity</h4>
                <p className="text-[#0A1E40] text-base">Every element is intentional — from lighting to layout — built for deep work and well-being.</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  )
} 