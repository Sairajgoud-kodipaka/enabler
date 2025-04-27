import Image from "next/image";
import Link from "next/link";
import Reveal from "../../components/Reveal";
// import { motion } from "framer-motion";

// Unsplash search terms and URLs used:
// Hero: "cityscape crowd" https://unsplash.com/photos/people-watching-light-show-8manzosRGPE
// Global impact: "city night" https://unsplash.com/photos/time-lapse-photography-of-city-8YG31Xn4dSw
// Innovation-driven: "innovation technology" https://unsplash.com/photos/person-using-tablet-computer-7KLa-xLbSXA
// People-centric: "teamwork collaboration" https://unsplash.com/photos/people-in-a-meeting-room-5QgIuuBxKwM
// Purposeful career: "career growth" https://unsplash.com/photos/woman-sitting-in-glass-bubble-6anudmpILw4

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FB]">
      <Reveal delay={0}>
        <section
          className="relative w-full h-[420px] md:h-[480px] overflow-hidden rounded-b-3xl flex items-center justify-center"
          aria-label="Hero section"
        >
          {/* Hero background image (Unsplash: cityscape crowd) */}
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Crowd with city lights"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1E40]/80 via-[#E94B8A]/60 to-[#6C3EB8]/60" aria-hidden="true" />
          <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-0 max-w-2xl mx-auto md:ml-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">Innovate. Grow. Lead.</h1>
            <p className="text-lg md:text-xl text-white mb-8">Explore opportunities and grow with us.</p>
            <Link
              href="#"
              className="inline-block bg-white text-[#0A1E40] font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition-colors w-auto self-start text-base focus:outline-none focus:ring-2 focus:ring-[#E94B8A]"
            >
              Check current openings
            </Link>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#7A2048]">
            <span className="text-[#7A2048]">Shape Your Career.</span> <span className="text-[#E94B8A]">Power Global Innovation.</span>
          </h2>
          <p className="text-[#0A1E40] text-lg mb-2">
            At Enablr, we build more than Global Capability Centres, we build the high-performing teams that power them.
          </p>
          <p className="text-[#0A1E40] text-base">
            As a trusted partner to global enterprises and startups, we deliver end-to-end GCC solutions across technology, talent, workspace, and operations. Be part of a people-first culture, work on impactful global projects, and shape a career built for long-term growth.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h3 className="text-2xl font-bold mb-8 text-[#A02B4A]">The Enablr Advantage</h3>
          <div className="bg-[#FFF3F3] rounded-3xl p-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Global impact, local excellence */}
            <div className="flex flex-col md:flex-row items-stretch gap-6 border border-[#E5E7EB] rounded-xl bg-white overflow-hidden">
              <div className="flex-1 flex flex-col justify-center p-6">
                <h4 className="text-[#0A1E40] font-bold text-lg mb-2">Global impact, local excellence</h4>
                <p className="text-[#0A1E40] text-base">At Enablr, you operate at the intersection of global ambition and India's innovation ecosystem. Collaborate with international teams and industry leaders while delivering impact.</p>
              </div>
              <div className="flex-1 min-w-[160px] h-40 md:h-auto relative">
                {/* Unsplash: city night */}
                <Image
                  src="https://images.unsplash.com/photo-1464983953574-0892a716854b"
                  alt="City at night"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Innovation-driven mindset */}
            <div className="flex flex-col md:flex-row items-stretch gap-6 border border-[#E5E7EB] rounded-xl bg-white overflow-hidden">
              <div className="flex-1 min-w-[160px] h-40 md:h-auto relative order-2 md:order-1">
                {/* Unsplash: innovation technology */}
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  alt="Innovation technology"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center p-6 order-1 md:order-2">
                <h4 className="text-[#0A1E40] font-bold text-lg mb-2">Innovation-driven mindset</h4>
                <p className="text-[#0A1E40] text-base">We embed innovation in every layer of our work—from AI-led technology to process transformation. Here, you'll be empowered to think boldly, challenge convention, and build solutions that drive real value for global enterprises.</p>
              </div>
            </div>
            {/* People-centric culture */}
            <div className="flex flex-col md:flex-row items-stretch gap-6 border border-[#E5E7EB] rounded-xl bg-white overflow-hidden">
              <div className="flex-1 flex flex-col justify-center p-6">
                <h4 className="text-[#0A1E40] font-bold text-lg mb-2">People-centric culture</h4>
                <p className="text-[#0A1E40] text-base">We believe exceptional outcomes start with empowered people. Our culture prioritizes transparency, collaboration, flexibility, and growth—enabling you to do your best work in a supportive and inclusive environment.</p>
              </div>
              <div className="flex-1 min-w-[160px] h-40 md:h-auto relative">
                {/* Unsplash: teamwork collaboration */}
                <Image
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
                  alt="Teamwork collaboration"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Purposeful career growth */}
            <div className="flex flex-col md:flex-row items-stretch gap-6 border border-[#E5E7EB] rounded-xl bg-white overflow-hidden">
              <div className="flex-1 min-w-[160px] h-40 md:h-auto relative order-2 md:order-1">
                {/* Unsplash: career growth */}
                <Image
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca"
                  alt="Career growth"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center p-6 order-1 md:order-2">
                <h4 className="text-[#0A1E40] font-bold text-lg mb-2">Purposeful career growth</h4>
                <p className="text-[#0A1E40] text-base">Growth at Enablr is intentional. With access to upskilling, mobility across functions, and leadership pathways, you'll build a career that aligns with your aspirations—supported every step of the way.</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.3}>
        <section className="w-full bg-[#0A1E40] py-16 px-4 rounded-3xl mb-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              Join to build excellence: Shaping the future of global capability centers starts here. If you're driven by innovation, powered by purpose, and ready to deliver AI-led impact at scale—your next opportunity begins with us.
            </h3>
            <Link
              href="#"
              className="inline-block bg-white text-[#0A1E40] font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition-colors w-auto self-center text-base focus:outline-none focus:ring-2 focus:ring-[#E94B8A]"
            >
              Check current openings
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
} 