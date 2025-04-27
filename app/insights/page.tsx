import Image from "next/image";
import Link from "next/link";
import Reveal from "../../components/Reveal";

const featuredInsights = [
  {
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b", // Futuristic city
    title: "The Future of GCCs: Trends to Watch in 2025",
    desc: "Explore the top trends shaping global capability centers and how to stay ahead in a rapidly evolving landscape.",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // Modular blocks
    title: "How Modular Services Drive GCC Agility",
    desc: "Discover how modular engagement models can help your GCC scale and adapt with ease.",
  },
  {
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2", // Teamwork
    title: "Talent Strategies for High-Performing Teams",
    desc: "Learn the secrets to attracting and retaining top talent in your global teams.",
  },
];

const latestInsights = [
  {
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429", // Bridge (resilience)
    title: "Building Resilient Operations in Uncertain Times",
    desc: "Best practices for ensuring business continuity and operational excellence.",
  },
  {
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", // Tech enablement
    title: "Tech Enablement: The GCC Advantage",
    desc: "How technology is transforming the way GCCs deliver value.",
  },
  {
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca", // Workspace
    title: "Workspace Evolution: Designing for Productivity",
    desc: "Modern workspace strategies that boost engagement and performance.",
  },
  {
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6", // Sustainability (fixed)
    title: "Sustainability in GCCs: A New Imperative",
    desc: "Why sustainability matters and how to embed it in your GCC strategy.",
  },
];

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FB]">
      <Reveal delay={0}>
        <section className="relative w-full h-[340px] md:h-[420px] overflow-hidden rounded-b-3xl flex items-center">
          <Image src="/about-hero.png" alt="Insights Hero" fill className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1E40]/80 via-[#E94B8A]/60 to-[#6C3EB8]/60" />
          <div className="relative z-10 max-w-2xl mx-auto md:ml-20 px-6 md:px-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-24 md:mt-0 leading-tight">Insights</h1>
            <p className="text-lg md:text-xl text-white mb-6">Thought leadership, trends, and news from Enablr</p>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-[#0A1E40] mb-8">Featured Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredInsights.map((insight) => (
              <div key={insight.title} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
                <Image src={insight.img} alt={insight.title} width={400} height={220} className="h-48 w-full object-cover" />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[#0A1E40] font-semibold text-xl mb-2">{insight.title}</h3>
                  <p className="text-[#7A2048] text-base mb-4 flex-1">{insight.desc}</p>
                  <Link href="#" className="text-[#E94B8A] font-medium text-sm hover:underline mt-auto">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-[#0A1E40] mb-8">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestInsights.map((insight) => (
              <div key={insight.title} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
                <Image src={insight.img} alt={insight.title} width={400} height={220} className="h-48 w-full object-cover" />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[#0A1E40] font-semibold text-xl mb-2">{insight.title}</h3>
                  <p className="text-[#7A2048] text-base mb-4 flex-1">{insight.desc}</p>
                  <Link href="#" className="text-[#E94B8A] font-medium text-sm hover:underline mt-auto">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.3}>
        <section className="py-12 bg-[#F8F9FB]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h4 className="text-xl font-bold text-[#0A1E40] mb-2">Stay Ahead with Our Weekly Insights</h4>
            <form className="flex flex-col md:flex-row gap-4 items-center justify-center mt-4">
              <input type="email" placeholder="Enter your email address" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E94B8A] w-full md:w-auto" />
              <button type="submit" className="bg-[#0A1E40] text-white font-semibold px-6 py-2 rounded shadow hover:bg-[#6C3EB8] transition-colors">Subscribe Now</button>
            </form>
          </div>
        </section>
      </Reveal>
    </div>
  );
} 