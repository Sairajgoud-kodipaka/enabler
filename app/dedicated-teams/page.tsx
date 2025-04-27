import Link from "next/link"
import Reveal from "../../components/Reveal"
import Image from "next/image"

export default function DedicatedTeamsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FB]">
      <Reveal delay={0}>
        <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden rounded-b-3xl flex items-center">
          <Image src="/team-hero.png" alt="Dedicated Teams Hero" fill className="object-cover w-full h-full" />
          <div className="relative z-10 max-w-2xl mx-auto md:ml-20 px-6 md:px-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-24 md:mt-0 leading-tight">Build global teams without the extra load</h1>
            <button className="inline-block bg-white text-[#6C3EB8] font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition-colors w-auto self-start">Get Started</button>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-4 text-[#7A2048]">Talent That Feels Like Yours</h2>
          <p className="text-[#0A1E40] mb-4">Enablr's Dedicated Teams model gives you fast access to skilled talent without the complexities of hiring and managing on your own.</p>
          <p className="text-[#0A1E40] mb-4">We take care of recruitment, onboarding, and day-to-day operations so that your teams function like a natural extension of your business.</p>
          <p className="text-[#0A1E40]">It's a smart way to scale efficiently while keeping your focus on core priorities.</p>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="w-full bg-[#0A1E40] py-16 px-4 rounded-t-3xl">
          <h3 className="text-2xl font-bold text-white text-center mb-10">What Enablr Brings</h3>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 flex flex-col gap-4 shadow-md">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><path d="M12 16a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm12 0a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM8 28c0-2.21 3.58-4 8-4s8 1.79 8 4v2H8v-2Zm12 0c0-2.21 3.58-4 8-4s8 1.79 8 4v2h-8v-2Z" stroke="#0A1E40" strokeWidth="2" fill="none"/></svg>
              <h4 className="font-bold text-lg text-[#0A1E40]">Teams that are truly yours</h4>
              <p className="text-[#4B587C] text-base">We don't just fill in the positions. We build high-performing teams that work as an extension of your core business. They're aligned to your culture, processes, and goals from day one.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 flex flex-col gap-4 shadow-md">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="8" y="8" width="24" height="16" rx="2" stroke="#0A1E40" strokeWidth="2"/><path d="M8 24h24" stroke="#0A1E40" strokeWidth="2"/><path d="M16 28h8" stroke="#0A1E40" strokeWidth="2"/></svg>
              <h4 className="font-bold text-lg text-[#0A1E40]">Built for long-term value</h4>
              <p className="text-[#4B587C] text-base">Our focus is on stability and retention so your team grows with you over time. You get continuity, consistency, quality, and true sense of ownership.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 flex flex-col gap-4 shadow-md">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><path d="M8 32c4-8 8-12 16-16" stroke="#0A1E40" strokeWidth="2" strokeLinecap="round"/><path d="M24 16l4-4m0 0v4m0-4h-4" stroke="#0A1E40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <h4 className="font-bold text-lg text-[#0A1E40]">Speed with scale</h4>
              <p className="text-[#4B587C] text-base">We help you scale quickly with vetted talent across any technology and expertise, and structured onboarding. You ramp up fast without sacrificing quality or alignment.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-xl p-8 flex flex-col gap-4 shadow-md">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><path d="M8 28v-4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v4" stroke="#0A1E40" strokeWidth="2"/><path d="M12 28v4a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4" stroke="#0A1E40" strokeWidth="2"/><path d="M16 20v-4a4 4 0 1 1 8 0v4" stroke="#0A1E40" strokeWidth="2"/></svg>
              <h4 className="font-bold text-lg text-[#0A1E40]">Keeping the control with you</h4>
              <p className="text-[#4B587C] text-base">You set the direction, pace, and priorities. We provide the structure and support to help your teams thrive under your leadership.</p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.3}>
        <section className="w-full bg-[#F3F3F3] py-16 px-4 rounded-3xl mt-[-2rem]">
          <h3 className="text-3xl font-bold text-center mb-10" style={{ color: '#7A2048' }}>Ideal for</h3>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
              <Image src="/team-1.png" alt="Businesses building offshore teams" width={400} height={220} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-lg mb-2">Businesses building offshore teams for long-term or project-based work</h4>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
              <Image src="/team-2.png" alt="Organizations expanding global capacity" width={400} height={220} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-lg mb-2">Organizations expanding global capacity while keeping operations streamlined</h4>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
              <Image src="/team-3.png" alt="Enterprises that are looking to scale smart" width={400} height={220} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-lg mb-2">Enterprises that are looking to scale smart, but with ease</h4>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.4}>
        <section className="w-full bg-[#ededed] py-16 px-4 rounded-3xl mt-[-2rem] mb-10">
          <h3 className="text-3xl font-bold text-center mb-10" style={{ color: '#7A2048' }}>Why this model <span className="text-[#E94B8A]">works</span></h3>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center">
              <svg width="48" height="48" fill="none" viewBox="0 0 40 40" className="mb-4"><path d="M20 8l8 8-8 8-8-8 8-8Z" stroke="#0A1E40" strokeWidth="2"/><path d="M20 24v8" stroke="#0A1E40" strokeWidth="2" strokeLinecap="round"/></svg>
              <p className="text-[#4B587C] text-lg font-medium">Quick setup<br/>End-to-end team management</p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center text-center">
              <svg width="48" height="48" fill="none" viewBox="0 0 40 40" className="mb-4"><path d="M12 20a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-8v16" stroke="#0A1E40" strokeWidth="2"/><path d="M16 24l8-8" stroke="#0A1E40" strokeWidth="2" strokeLinecap="round"/></svg>
              <p className="text-[#4B587C] text-lg font-medium">Seamless alignment<br/>With your internal processes</p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center text-center">
              <svg width="48" height="48" fill="none" viewBox="0 0 40 40" className="mb-4"><path d="M12 20a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm-4 0a12 12 0 1 1 24 0 12 12 0 0 1-24 0Z" stroke="#0A1E40" strokeWidth="2"/><path d="M16 24l8-8" stroke="#0A1E40" strokeWidth="2" strokeLinecap="round"/></svg>
              <p className="text-[#4B587C] text-lg font-medium">Flexible team sizes<br/>Based on your project needs</p>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col items-center text-center">
              <svg width="48" height="48" fill="none" viewBox="0 0 40 40" className="mb-4"><rect x="12" y="12" width="16" height="16" rx="2" stroke="#0A1E40" strokeWidth="2"/><path d="M20 16v8" stroke="#0A1E40" strokeWidth="2" strokeLinecap="round"/><path d="M16 20h8" stroke="#0A1E40" strokeWidth="2" strokeLinecap="round"/></svg>
              <p className="text-[#4B587C] text-lg font-medium">Top talent access<br/>Without additional overhead</p>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  )
} 