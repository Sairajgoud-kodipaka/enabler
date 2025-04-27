import Image from "next/image"
import Link from "next/link"
import Reveal from "../../components/Reveal"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FB]">
      {/* Hero Section */}
      <Reveal delay={0}>
        <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden rounded-b-3xl flex items-center">
          <Image src="/about-hero.png" alt="About Hero" fill className="object-cover w-full h-full" priority />
         
          <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-0 max-w-2xl mx-auto md:ml-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-24 md:mt-0 leading-tight">Your trusted partner for building and scaling GCCs</h1>
            <p className="text-lg md:text-xl text-white mb-6">Solutions aligned to your processes, platforms, and pace</p>
            <Link href="#" className="inline-block bg-white text-[#6C3EB8] font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition-colors w-auto self-start">Lets Connect</Link>
          </div>
        </section>
      </Reveal>
      <br /><br /><br />

 {/* Intro Section */}
 <Reveal delay={0.1}>
        <section className="max-w-5xl mx-auto px-4 -mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-gray-700 text-lg border border-gray-100">
            At Enablr, we bring together talent, technology expertise, and strategic insight to help you 
            build, scale, and optimize your GCC journey. As a Covenant company, we operate with a 
            foundation of competency, collaboration, and integrity, earning trust through every stage of 
            the journey.
          </div>
        </section>
      </Reveal>

      {/* Vision & Mission Section */}
      <Reveal delay={0.2}>
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8">
              <h3 className="text-pink-600 text-xl font-bold mb-4">Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We build GCCs that give enterprises an edge with faster setup, smarter execution, and the right talent.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8">
              <h3 className="text-pink-600 text-xl font-bold mb-4">Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Empower enterprises with high-performing GCCs that deliver strategic value and drive impactful solutions.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CTA and Stats Section */}
      <Reveal delay={0.3}>
        <section className="max-w-5xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1a2b4b] rounded-xl p-10 flex flex-col justify-center">
              <Link 
                href="#" 
                className="inline-block bg-white text-[#1a2b4b] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all w-fit"
              >
                Talk to our experts today
              </Link>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 shadow-md p-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-bold text-gray-900 mb-2">20+</h4>
                  <p className="text-gray-600">GCCs Established</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-gray-900 mb-2">15+</h4>
                  <p className="text-gray-600">Countries Served</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-gray-900 mb-2">500+</h4>
                  <p className="text-gray-600">Experts Deployed</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-gray-900 mb-2">95%</h4>
                  <p className="text-gray-600">Client Retention</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Why Choose Section */}
      <Reveal delay={0.4}>
        <section className="max-w-5xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-pink-50 rounded-xl p-10">
              <h4 className="text-pink-600 text-xl font-bold mb-4">Why choose Enablr</h4>
              <h2 className="text-gray-900 text-3xl font-bold leading-tight">
                Designed for leaders who need speed, trust-worthy partnership, and results
              </h2>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 shadow-md p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Rapid Deployment</h5>
                    <p className="text-gray-600">Get your GCC up and running in record time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">End-to-End Support</h5>
                    <p className="text-gray-600">From strategy to execution and optimization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Industry Expertise</h5>
                    <p className="text-gray-600">20+ years of GCC establishment experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Partner Section */}
      <Reveal delay={0.5}>
        <section className="max-w-5xl mx-auto px-4 pb-20">
          <div className="bg-gradient-to-r from-[#1a2b4b] to-[#2c3e5f] rounded-xl p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Fast Setup</h4>
                <p className="text-white/80">Operational in weeks, not months</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Trusted Partner</h4>
                <p className="text-white/80">Proven track record of success</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Scale Efficiently</h4>
                <p className="text-white/80">Grow your operations seamlessly</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  )
}