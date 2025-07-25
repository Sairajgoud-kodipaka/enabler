import Image from "next/image"
import Link from "next/link"
import { Building, Users, LightbulbIcon, ClipboardList, Code, Network } from "lucide-react"
import AnimatedBackground from "../../../components/AnimatedBackground"
import Reveal from "../../../components/Reveal"

export default function GCCServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Reveal delay={0}>
        <section className="relative w-full h-[500px] overflow-hidden rounded-b-4xl">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-building.png"
              alt="Hero background with waves and building"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="container mx-auto px-4 pt-28 relative z-30">
            <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-0 max-w-2xl mx-auto mt-24 md:ml-20">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-24 md:mt-0 leading-tight">GCC as a Service</h1>
              <Link href="#" className="inline-block bg-white text-[#6C3EB8] font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition-colors w-auto self-start">Get Started</Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="py-16 md:py-20 relative">
          <div className="absolute inset-0 z-0">
            <AnimatedBackground />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              <div>
                <h2 className="text-4xl font-bold text-[#7A2048] leading-tight">
                  Build, Operate, and Grow —<br />
                  Without the Hassle.
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Enabler helps organizations with everything from GCC incorporation to running operations — to help you save
                  cost, scale fast, and focus on what matters most.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We have designed our GCC-as-a-Service model to help you launch, operate, and grow your business seamlessly
                  with speed, certainty, and local expertise.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you&apos;re setting up your first capability center or scaling region-wide, we can do the heavy
                  lifting for you.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="py-16 md:py-20 bg-[#0A1E40]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Key Offerings</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-[#0B2A54] rounded-lg p-6 min-h-[300px] flex flex-col h-full hover:shadow-xl transition-transform transform hover:-translate-y-2">
                <Building className="w-10 h-10 text-white mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Infrastructure as a Service</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We offer a plug-and-play setup without the hassle of managing multiple vendors, enabling end-to-end
                  infrastructure support, whether it&apos;s office space, network connectivity, IT infrastructure, or all of the
                  above.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#0B2A54] rounded-lg p-6 min-h-[300px] flex flex-col h-full hover:shadow-xl transition-transform transform hover:-translate-y-2">
                <Users className="w-10 h-10 text-white mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Talent Acquisition and Workforce Management</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We help you build high-performing teams with no compromise on quality. Right from sourcing and onboarding, to
                  retention, we handle the full scale lifecycle.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#0B2A54] rounded-lg p-6 min-h-[300px] flex flex-col h-full hover:shadow-xl transition-transform transform hover:-translate-y-2">
                <LightbulbIcon className="w-10 h-10 text-white mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Strategic Advisory and Innovation</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  With our experienced leadership team, we offer the much-needed guidance, insights, foresight for you to shape
                  up your GCC and unlock new growth opportunities.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#0B2A54] rounded-lg p-6 min-h-[300px] flex flex-col h-full hover:shadow-xl transition-transform transform hover:-translate-y-2">
                <ClipboardList className="w-10 h-10 text-white mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Business Operations and Compliance</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We take care of day-to-day operations and ensure you stay compliant with local regulations. Whether it&apos;s
                  tax and labor laws, or reporting and risk management, we go by the book.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-[#0B2A54] rounded-lg p-6 min-h-[300px] flex flex-col h-full hover:shadow-xl transition-transform transform hover:-translate-y-2">
                <Code className="w-10 h-10 text-white mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Technology Delivery and Integration</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Whether it&apos;s engineering support, or technology enhancement support, we bring in the right capabilities
                  when you need them.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-[#0B2A54] rounded-lg p-6 min-h-[300px] flex flex-col h-full hover:shadow-xl transition-transform transform hover:-translate-y-2">
                <Network className="w-10 h-10 text-white mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Integration</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We ensure that your GCC is not tagged as a separate unit, but evolves into one of the integral elements
                  in your overall business ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.3}>
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.02] transition-transform duration-300">
                <div className="h-48 relative">
                  <Image
                    src="/card-image-1.png"
                    alt="Local-global market intelligence"
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#2E1B5B] mb-2">Local-global market intelligence</h3>
                  <p className="text-gray-600 text-sm">
                    Get comprehensive infrastructure solutions tailored to your specific needs and requirements.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.02] transition-transform duration-300">
                <div className="h-48 relative">
                  <Image
                    src="/card-image-2.png"
                    alt="End-to-end infrastructure support"
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#2E1B5B] mb-2">End-to-end infrastructure support</h3>
                  <p className="text-gray-600 text-sm">
                    Get comprehensive infrastructure solutions tailored to your specific needs and requirements.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.02] transition-transform duration-300">
                <div className="h-48 relative">
                  <Image
                    src="/card-image-3.png"
                    alt="Speed to launch and scale"
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#2E1B5B] mb-2">Speed to launch and scale</h3>
                  <p className="text-gray-600 text-sm">
                    Accelerate your growth with our proven methodologies and established frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  )
}