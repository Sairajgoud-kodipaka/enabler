import Image from "next/image";
import Reveal from "../../../components/Reveal";

export default function ModularServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FB]">
      <Reveal delay={0}>
        <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden rounded-b-3xl flex items-center">
          <Image src="/ms-hero.png" alt="Modular Services Hero" fill className="object-cover w-full h-full" />
          <div className="relative z-10 max-w-2xl mx-auto md:ml-20 px-6 md:px-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-24 md:mt-0 leading-tight">Focused support for evolving GCC needs</h1>
            <button className="inline-block bg-white text-[#6C3EB8] font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition-colors w-auto self-start">Get Started</button>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-4 text-[#0A1E40]">
            Support That Fits <span className="text-[#E94B8A]">Where You Are</span>
          </h2>
          <p className="text-[#0A1E40] mb-4">
            At Enablr, we know that every organization's GCC journey unfolds differently. Our Modular Services model is built to meet you where you are, offering targeted capabilities that complement your existing strengths without unnecessary complexity.
          </p>
          <p className="text-[#0A1E40]">
            From sourcing talent and enabling infrastructure to refining operations and enhancing workspace strategy, each service module is designed to deliver measurable impact while integrating smoothly with your internal teams.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h3 className="text-2xl font-bold text-white text-center mb-10">What Enablr Brings</h3>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 flex flex-col gap-4 shadow-md">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="6" y="6" width="8" height="8" rx="2" stroke="#0A1E40" strokeWidth="2"/><rect x="6" y="20" width="8" height="8" rx="2" stroke="#0A1E40" strokeWidth="2"/><rect x="20" y="6" width="8" height="8" rx="2" stroke="#0A1E40" strokeWidth="2"/><rect x="20" y="20" width="8" height="8" rx="2" stroke="#0A1E40" strokeWidth="2"/></svg>
              <h4 className="font-bold text-lg text-[#0A1E40]">Modular by design, strategic by nature</h4>
              <p className="text-[#4B587C] text-base">Our modular services model gives you the flexibility to choose what fits, without losing sight of the bigger picture. We stay aligned to your goals and make sure every step supports your business direction.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 flex flex-col gap-4 shadow-md">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><path d="M8 32c4-8 8-12 16-16" stroke="#0A1E40" strokeWidth="2" strokeLinecap="round"/><path d="M24 16l4-4m0 0v4m0-4h-4" stroke="#0A1E40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <h4 className="font-bold text-lg text-[#0A1E40]">Measurable impact</h4>
              <p className="text-[#4B587C] text-base">Every module is built with outcomes in mind, ensuring real, tangible results that you can track. We focus on what matters so you can see the value, not just feel it.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 flex flex-col gap-4 shadow-md">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="8" stroke="#0A1E40" strokeWidth="2"/><path d="M20 8v4M20 28v4M32 20h-4M8 20h4" stroke="#0A1E40" strokeWidth="2" strokeLinecap="round"/></svg>
              <h4 className="font-bold text-lg text-[#0A1E40]">Decluttering the process</h4>
              <p className="text-[#4B587C] text-base">From talent and tech to workspace and operations, we cover a wide range of needs without adding unnecessary complexity. You get what you need to scale smart, with none of the extra layers that slow you down.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-xl p-8 flex flex-col gap-4 shadow-md">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="8" stroke="#0A1E40" strokeWidth="2"/><path d="M20 8v4M20 28v4M32 20h-4M8 20h4" stroke="#0A1E40" strokeWidth="2" strokeLinecap="round"/><circle cx="20" cy="20" r="16" stroke="#0A1E40" strokeWidth="2"/></svg>
              <h4 className="font-bold text-lg text-[#0A1E40]">Ecosystem intelligence</h4>
              <p className="text-[#4B587C] text-base">We bring deep knowledge of global GCC trends and local realities to the table. That means you are not just keeping up — you stay updated and prepared.</p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.3}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h3 className="text-3xl font-bold text-center mb-10" style={{ color: '#7A2048' }}>Ideal for</h3>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
              <Image src="/ms-1.png" alt="Companies with established GCCs" width={400} height={220} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-lg mb-2">Companies with established GCCs seeking specialized enhancements</h4>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
              <Image src="/ms-2.png" alt="Organizations looking for focused expertise" width={400} height={220} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-lg mb-2">Organizations looking for focused expertise without full-scale engagement</h4>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
              <Image src="/ms-3.png" alt="Enterprises that need more flexibility" width={400} height={220} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-[#0A1E40] font-semibold text-lg mb-2">Enterprises that need more flexibility in engagement</h4>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.4}>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h3 className="text-3xl font-bold text-center mb-10" style={{ color: '#7A2048' }}>Why this model <span className="text-[#E94B8A]">works</span></h3>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center">
              <svg width="48" height="48" fill="none" viewBox="0 0 40 40" className="mb-4"><rect x="6" y="6" width="8" height="8" rx="2" stroke="#0A1E40" strokeWidth="2"/><rect x="6" y="20" width="8" height="8" rx="2" stroke="#0A1E40" strokeWidth="2"/><rect x="20" y="6" width="8" height="8" rx="2" stroke="#0A1E40" strokeWidth="2"/><rect x="20" y="20" width="8" height="8" rx="2" stroke="#0A1E40" strokeWidth="2"/></svg>
              <p className="text-[#4B587C] text-lg font-medium">Flexible selection of services based on your current priorities</p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center text-center">
              <svg width="48" height="48" fill="none" viewBox="0 0 40 40" className="mb-4"><path d="M8 32c4-8 8-12 16-16" stroke="#0A1E40" strokeWidth="2" strokeLinecap="round"/><path d="M24 16l4-4m0 0v4m0-4h-4" stroke="#0A1E40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <p className="text-[#4B587C] text-lg font-medium">Efficient use of resources with a focus on high-impact support</p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center text-center">
              <svg width="48" height="48" fill="none" viewBox="0 0 40 40" className="mb-4"><circle cx="20" cy="20" r="8" stroke="#0A1E40" strokeWidth="2"/><path d="M20 8v4M20 28v4M32 20h-4M8 20h4" stroke="#0A1E40" strokeWidth="2" strokeLinecap="round"/></svg>
              <p className="text-[#4B587C] text-lg font-medium">Seamless integration with existing GCC operations</p>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col items-center text-center">
              <svg width="48" height="48" fill="none" viewBox="0 0 40 40" className="mb-4"><circle cx="20" cy="20" r="8" stroke="#0A1E40" strokeWidth="2"/><circle cx="20" cy="20" r="16" stroke="#0A1E40" strokeWidth="2"/></svg>
              <p className="text-[#4B587C] text-lg font-medium">Scalable service structure to grow with your business</p>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
} 