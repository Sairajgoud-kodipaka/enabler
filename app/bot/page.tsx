import Link from "next/link"
import { BuildingOffice2Icon, Squares2X2Icon, WrenchScrewdriverIcon, UserCircleIcon } from "@heroicons/react/24/solid"
import Reveal from "../../components/Reveal"
import { ChartBarSquareIcon, UsersIcon, AcademicCapIcon } from "@heroicons/react/24/outline"

export default function BOTPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FB]">
      {/* Hero Section */}
      <Reveal delay={0}>
        <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden rounded-b-3xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1E40]/90 via-[#E94B8A]/80 to-[#6C3EB8]/70" />
          <div className="absolute inset-0 flex items-center justify-center">
          <img src="/bot-hero.png" alt="Hero background" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-0 max-w-2xl mx-auto md:ml-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-24 md:mt-0 leading-tight">Start strong, Take over with confidence.</h1>
            <Link href="#" className="inline-block bg-white text-[#6C3EB8] font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition-colors w-auto self-start">Get Started</Link>
          </div>
        </section>
      </Reveal>

      {/* How it works Section */}
      <Reveal delay={0.1}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-[#7A2048] mb-4">How it works</h2>
          <p className="text-[#0A1E40] mb-6">Enablr's Build-Operate-Transfer (B-O-T) model helps you launch your GCC quickly while we take care of the heavy lifting. We build the center, run day-to-day operations, and support your goals until everything is ready to be transferred to your team. This model gives you time to build internal capabilities while we ensure stability and performance from day one.</p>
        </section>
      </Reveal>

      {/* Key Features Section */}
      <Reveal delay={0.2}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h3 className="text-xl font-bold text-white bg-[#0A1E40] rounded-t-xl px-6 py-4">Key Features</h3>
          <div className="bg-[#0A1E40] rounded-b-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Business Process Integration */}
            <div className="bg-[#0A1E40] border border-white/20 rounded-lg p-6 flex flex-col items-start">
              <ChartBarSquareIcon className="w-12 h-12 text-white bg-[#23325B] p-2 rounded mb-4" />
              <h4 className="text-white font-semibold mb-2">Business Process Integration</h4>
              <p className="text-white/80 text-sm">We unify systems and processes to create a seamless backbone for your GCC, whether teams are global or local.</p>
            </div>
            {/* HR Operations & Workforce Management */}
            <div className="bg-[#0A1E40] border border-white/20 rounded-lg p-6 flex flex-col items-start">
              <UsersIcon className="w-12 h-12 text-white bg-[#23325B] p-2 rounded mb-4" />
              <h4 className="text-white font-semibold mb-2">HR Operations & Workforce Management</h4>
              <p className="text-white/80 text-sm">From onboarding to daily HR tasks, we handle the backend so you can stay focused on strategy.</p>
            </div>
            {/* Upskilling & Training Programs */}
            <div className="bg-[#0A1E40] border border-white/20 rounded-lg p-6 flex flex-col items-start">
              <AcademicCapIcon className="w-12 h-12 text-white bg-[#23325B] p-2 rounded mb-4" />
              <h4 className="text-white font-semibold mb-2">Upskilling & Training Programs</h4>
              <p className="text-white/80 text-sm">We co-create learning initiatives that align with your business needs and keep your teams future-ready.</p>
            </div>
            {/* Customized Office Spaces */}
            <div className="bg-[#0A1E40] border border-white/20 rounded-lg p-6 flex flex-col items-start">
              <WrenchScrewdriverIcon className="w-12 h-12 text-white bg-[#23325B] p-2 rounded mb-4" />
              <h4 className="text-white font-semibold mb-2">Customized Office Spaces</h4>
              <p className="text-white/80 text-sm">We help design and set up your office to match your vibe, workflow, and goals.</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Ideal For Section */}
      <Reveal delay={0.3}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h3 className="text-3xl font-bold text-center mb-10" style={{ color: '#7A2048' }}>Ideal for </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
              <img src="/bot-1.png" alt="Simplified Governance & Reporting" className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-xl mb-2">Simplified Governance & Reporting</h4>
                <p className="text-[#0A1E40] text-base">Clarity in dashboards and clean documentation from day one.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
              <img src="/bot-2.png" alt="Infrastructure Setup with Operational Excellence" className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-xl mb-2">Infrastructure Setup with Operational Excellence</h4>
                <p className="text-[#0A1E40] text-base">From IT to admin, we handle everything that makes your operations click.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
              <img src="/bot-3.png" alt="Continuous Innovation for Accelerated Growth" className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-xl mb-2">Continuous Innovation for Accelerated Growth</h4>
                <p className="text-[#0A1E40] text-base">We build for agility — so your operations aren't just stable, they're scalable.</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Why this model works Section */}
      <Reveal delay={0.4}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h3 className="text-3xl font-bold text-center mb-10" style={{ color: '#7A2048' }}>Why this model <span className="text-[#E94B8A]">works</span></h3>
          <div className="bg-[#F3F3F3] rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center shadow">
            {/* Card 1 */}
            <div className="flex-1 bg-white rounded-2xl shadow-md flex flex-col items-center p-8 text-center">
              <svg width="64" height="64" fill="none" viewBox="0 0 64 64" className="mb-4"><defs><linearGradient id="a1" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse"><stop stopColor="#0A1E40"/><stop offset="1" stopColor="#E94B8A"/></linearGradient></defs><path stroke="url(#a1)" strokeWidth="2.5" d="M16 48V32m12 16V24m12 24V16M8 56h48M40 24l8-8m0 0v8m0-8h-8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <h4 className="font-bold text-lg text-[#0A1E40] mb-2">Low-risk approach to starting your GCC</h4>
            </div>
            {/* Card 2 */}
            <div className="flex-1 bg-white rounded-2xl shadow-md flex flex-col items-center p-8 text-center">
              <svg width="64" height="64" fill="none" viewBox="0 0 64 64" className="mb-4"><defs><linearGradient id="a2" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse"><stop stopColor="#0A1E40"/><stop offset="1" stopColor="#E94B8A"/></linearGradient></defs><circle cx="32" cy="32" r="10" stroke="url(#a2)" strokeWidth="2.5"/><path stroke="url(#a2)" strokeWidth="2.5" d="M32 12v4M32 48v4M52 32h-4M16 32h-4M45.25 18.75l-2.83 2.83M18.75 45.25l2.83-2.83M45.25 45.25l-2.83-2.83M18.75 18.75l2.83 2.83" strokeLinecap="round"/><circle cx="32" cy="32" r="5" fill="none" stroke="url(#a2)" strokeWidth="2.5"/></svg>
              <h4 className="font-bold text-lg text-[#0A1E40] mb-2">Expert management during the setup and growth phase</h4>
            </div>
            {/* Card 3 */}
            <div className="flex-1 bg-white rounded-2xl shadow-md flex flex-col items-center p-8 text-center">
              <svg width="64" height="64" fill="none" viewBox="0 0 64 64" className="mb-4"><defs><linearGradient id="a3" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse"><stop stopColor="#0A1E40"/><stop offset="1" stopColor="#E94B8A"/></linearGradient></defs><rect x="14" y="20" width="20" height="8" rx="2" stroke="url(#a3)" strokeWidth="2.5"/><rect x="30" y="36" width="20" height="8" rx="2" stroke="url(#a3)" strokeWidth="2.5"/><path stroke="url(#a3)" strokeWidth="2.5" d="M34 24h8m0 0v8m0-8l8 8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="44" cy="40" r="3" stroke="url(#a3)" strokeWidth="2.5"/></svg>
              <h4 className="font-bold text-lg text-[#0A1E40] mb-2">Clear process for transferring operations and knowledge</h4>
            </div>
            {/* Card 4 */}
            <div className="flex-1 bg-white rounded-2xl shadow-md flex flex-col items-center p-8 text-center">
              <svg width="64" height="64" fill="none" viewBox="0 0 64 64" className="mb-4"><defs><linearGradient id="a4" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse"><stop stopColor="#0A1E40"/><stop offset="1" stopColor="#E94B8A"/></linearGradient></defs><path stroke="url(#a4)" strokeWidth="2.5" d="M44 20l-20 20M28 44l-8-8m24-8l-8-8" strokeLinecap="round"/><rect x="36" y="16" width="12" height="8" rx="2" stroke="url(#a4)" strokeWidth="2.5"/><rect x="16" y="36" width="12" height="8" rx="2" stroke="url(#a4)" strokeWidth="2.5"/></svg>
              <h4 className="font-bold text-lg text-[#0A1E40] mb-2">Helps you build skills and readiness for full ownership…</h4>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  )
} 