import Image from "next/image"
import Link from "next/link"
import { ChevronRight, BookOpen } from "lucide-react"

const edgeCards = [
  {
    icon: (
      <Image src="/escalator.png" alt="Accelerate" width={48} height={48} className="mb-2 object-contain" />
    ),
    title: "Accelerate your GCC setup",
    desc: "with a trusted partner",
  },
  {
    icon: (
      <Image src="/twoperson.png" alt="Build future-ready centers" width={48} height={48} className="mb-2 object-contain" />
    ),
    title: "Build future-ready centers",
    desc: "with Enablr, your partner of choice",
  },
  {
    icon: (
      <Image src="/bulbheads.png" alt="Maintain momentum" width={48} height={48} className="mb-2 object-contain" />
    ),
    title: "Maintain momentum",
    desc: "with transparent, milestone-driven execution",
  },
]

const solutions = [
  { title: "Talent & HR", desc: "Streamline hiring, onboarding, and workforce management with scalable HR frameworks tailored to your GCC&apos;s growth needs." },
  { title: "Business Operations", desc: "Optimize your business ops for speed, compliance, and scale." },
  { title: "Workspace", desc: "Future-ready workspaces for productivity and well-being." },
  { title: "Technology Enablement", desc: "Leverage tech to drive innovation and efficiency." },
]

const engageCards = [
  { title: "Build-operate-transfer (BOT)", img: "/hero-building.png" }
]

const highlights = [
  { img: "/engage-bot.png", title: "Your GCC is in expert hands, steered by leaders who&apos;ve seen it before, and done it well." },
  { img: "/engage-modular.png", title: "Fueling your vision with the right people talent and tools" },
  { img: "/hero-highlight.png", title: "Flexible engagement models for seamless growth" },
  { img: "/engage-e2e.png", title: "Transparent processes, powered by on-ground expertise" },
]

const blogCards = [
  { title: "Build-operate-transfer (BOT)", desc: "Discover how evolutionary models are reshaping the packaging industry." },
  { title: "Sustainability", desc: "Discover how eco-friendly materials are reshaping the packaging industry." },
  { title: "Insights", desc: "Discover how evolutionary models are reshaping the packaging industry." },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FB]">
      {/* Hero Section */}
      <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden rounded-b-3xl">
        <Image src="/hero-cityscape.png" alt="Hero" fill className="object-cover object-center" priority />
        <div className="absolute inset-0"/>
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-0 max-w-2xl mx-auto md:ml-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-24 md:mt-0 leading-tight">Build on proven experience<br />and enterprise-grade quality</h1>
          <Link href="#" className="inline-block bg-white text-[#0A1E40] font-semibold px-7 py-2 rounded shadow hover:bg-gray-100 transition-colors text-lg">Get started</Link>
        </div>
      </section>       

      {/* Enablr Edge Section */}
      <section className="relative py-12 md:py-16 bg-white">
        <div className="absolute inset-0 pointer-events-none select-none">
          {/* SVG mesh background */}
          <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-48 md:h-64">
            <path fill="#FDE6F0" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          </svg>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1E40] mb-6">The <span className="text-[#E94B8A]">Enablr Edge</span></h2>
          <p className="text-[#0A1E40] mb-8 max-w-2xl">At Enablr, we work with you to build your global capability center (GCC) the right way. Designed for speed, scale, and quality at every step. Here&apos;s how we help you stay ahead:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {edgeCards.map(card => (
              <div key={card.title} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200">
                {card.icon}
                <h3 className="text-[#E94B8A] font-semibold text-lg mb-1">{card.title}</h3>
                <p className="text-[#0A1E40] text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="#" className="inline-block bg-[#0A1E40] text-white font-semibold px-6 py-2 rounded shadow hover:bg-[#6C3EB8] transition-colors">Get started</Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-12 md:py-16 bg-[#F8F9FB]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 w-full">
            <h3 className="text-xl font-bold text-[#0A1E40] mb-4">our <span className="text-[#E94B8A]">Solutions</span></h3>
            <div className="space-y-2">
              {solutions.map(sol => (
                <div key={sol.title} className="bg-white rounded-lg shadow flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-[#FDE6F0] transition-colors">
                  <div>
                    <h4 className="font-semibold text-[#0A1E40]">{sol.title}</h4>
                    <p className="text-sm text-[#7A2048]">{sol.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#E94B8A]" />
                </div>
              ))}
            </div>
            <Link href="#" className="mt-4 inline-block bg-[#0A1E40] text-white font-semibold px-5 py-2 rounded shadow hover:bg-[#6C3EB8] transition-colors">Talk to our experts</Link>
          </div>
          <div className="flex-1 w-full flex justify-center items-center">
            <Image src="/solutions-people.png" alt="Solutions" width={320} height={320} className="rounded-xl object-cover object-center shadow-lg" />
          </div>
        </div>
      </section>

      {/* Engage With Us Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-bold text-[#E94B8A] mb-6">Engage with us</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {engageCards.map(card => (
              <div key={card.title} className="bg-[#F8F9FB] rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow duration-200">
                <div className="w-full h-28 mb-3 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden relative">
                  <Image src={card.img} alt={card.title} fill className="object-cover object-center w-full h-full rounded-lg" />
                </div>
                <h4 className="text-[#0A1E40] font-semibold text-base mb-2 text-center">{card.title}</h4>
                <Link href="#" className="text-[#E94B8A] font-medium text-sm hover:underline">Know More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-12 md:py-16 bg-[#F8F9FB]">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-bold text-[#E94B8A] mb-6">Key Highlights</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {highlights.map(h => (
              <div key={h.title} className="min-w-[220px] bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow duration-200">
                <div className="w-full h-24 mb-2 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden relative">
                  <Image src={h.img} alt={h.title} fill className="object-cover object-center w-full h-full rounded-lg" />
                </div>
                <p className="text-[#0A1E40] text-sm text-center font-medium">{h.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/Insights Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-bold text-[#E94B8A] mb-6">Blog <span className="text-[#0A1E40]">Insights on GCC Trends</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogCards.map(b => (
              <div key={b.title} className="bg-[#F8F9FB] rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-200">
                <div className="w-full h-24 mb-3 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                  <BookOpen className="w-10 h-10 text-[#E94B8A]" />
                </div>
                <h4 className="text-[#0A1E40] font-semibold text-base mb-2 text-center">{b.title}</h4>
                <p className="text-[#7A2048] text-sm text-center">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-[#F8F9FB]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h4 className="text-xl font-bold text-[#0A1E40] mb-2">Stay Ahead with Our Weekly Insights</h4>
          <form className="flex flex-col md:flex-row gap-4 items-center justify-center mt-4">
            <input type="email" placeholder="Enter your email address" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E94B8A] w-full md:w-auto" />
            <button type="submit" className="bg-[#0A1E40] text-white font-semibold px-6 py-2 rounded shadow hover:bg-[#6C3EB8] transition-colors">Subscribe Now</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1E40] text-white py-10 mt-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-[#6C3EB8] mb-2">Enablr</div>
            <div className="text-sm text-white/80 mb-4">Your GCC Enabling Catalyst</div>
          </div>
          <div>
            <div className="font-semibold mb-2">Solutions</div>
            <ul className="space-y-1 text-sm">
              <li>GCC as a Service</li>
              <li>Technology</li>
              <li>Workspace</li>
              <li>Talent & HR</li>
              <li>Operations</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Engagement Models</div>
            <ul className="space-y-1 text-sm">
              <li>BOT</li>
              <li>Modular Services</li>
              <li>End-to-end management</li>
              <li>Consulting</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Company</div>
            <ul className="space-y-1 text-sm">
              <li>About us</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Insights</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-white/60 mt-8">© 2025 Enablr. All rights reserved.</div>
      </footer>
    </div>
  )
}
