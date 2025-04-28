"use client";

// Add these imports to your main component file if not already present
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import dynamic from "next/dynamic";
import BlogInsights from './components/BlogInsights';
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// --- Updated Hero Slides Data ---
const heroSlides = [
    {
        img: "/home-hero.png",
        alt: "Cityscape Hero",
        line1: "Build on proven experience",
        line2: "and enterprise-grade quality",
        objectPosition: "object-center"
    },
    {
        img: "/home-hero2.png",
        alt: "Building Hero",
        line1: "Your Partner for Global Scale",
        line2: "Accelerating your GCC Journey",
        objectPosition: "object-center"
    },
    {
        img: "/home-hero3.png",
        alt: "People Hero",
        line1: "Future-Ready Centers",
        line2: "Powered by Enablr Expertise",
        objectPosition: "object-center"
    },
];

// --- Edge Cards Data ---
const edgeCards = [
    {
        title: "Speed",
        desc: "Rapid deployment and scaling of your GCC",
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#FDE6F0" />
                <path d="M22 10L14 22H20L18 30L26 18H20L22 10Z" fill="#E94B8A" stroke="#E94B8A" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
        )
    },
    {
        title: "Scale",
        desc: "Enterprise-grade infrastructure and support",
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#FDE6F0" />
                <rect x="13" y="22" width="3" height="6" rx="1.5" fill="#E94B8A" />
                <rect x="18.5" y="18" width="3" height="10" rx="1.5" fill="#E94B8A" />
                <rect x="24" y="14" width="3" height="14" rx="1.5" fill="#E94B8A" />
                <path d="M13 22L25.5 14" stroke="#E94B8A" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M25.5 14V18M25.5 14H21.5" stroke="#E94B8A" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        )
    },
    {
        title: "Quality",
        desc: "Proven methodologies and best practices",
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#FDE6F0" />
                <path d="M14 22L18 26L26 18" stroke="#E94B8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }
];

// --- DotPatternBg SVG Component ---
const DotPatternBg = () => (
  <svg className="absolute inset-0 w-full h-full" width="100%" height="100%" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="1.5" fill="#FDE6F0" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dots)" />
  </svg>
);

// --- Solutions Data ---
const solutions = [
    {
        title: "GCC as a Service",
        desc: "End-to-end GCC setup and management",
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Technology",
        desc: "Modern tech stack and infrastructure",
        img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" // tech
    },
    {
        title: "Workspace",
        desc: "Flexible and scalable workspace solutions",
        img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" // workspace
    },
    {
        title: "Talent & HR",
        desc: "Attract, retain, and empower top talent with our HR solutions.",
        img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80" // new group/team image
    }
];

// --- Engage Cards Data ---
const engageCards = [
    {
        title: "BOT Model",
        img: "/bot-model.png"
    },
    {
        title: "Modular Services",
        img: "/modular-services.png"
    },
    {
        title: "End-to-end Management",
        img: "/end-to-end.png"
    },
    {
        title: "Consulting",
        img: "/consulting.png"
    }
];

const lottieUrls = [
  // Global Presence
  "https://assets2.lottiefiles.com/packages/lf20_0yfsb3a1.json",
  // Industry Expertise
  "https://assets2.lottiefiles.com/packages/lf20_5ngs2ksb.json",
  // Innovation Hub
  "https://assets2.lottiefiles.com/packages/lf20_49rdyysj.json",
  // Trusted Partnerships
  "https://assets2.lottiefiles.com/packages/lf20_2glqweqs.json"
];

const highlights = [
  {
    title: "Global Presence",
    desc: "Our reach spans continents, connecting talent and opportunity worldwide."
  },
  {
    title: "Industry Expertise",
    desc: "Decades of experience across multiple sectors for proven results."
  },
  {
    title: "Innovation Hub",
    desc: "We foster creativity and technology to drive your business forward."
  },
  {
    title: "Trusted Partnerships",
    desc: "Long-term relationships built on trust, transparency, and success."
  }
];

// --- Reveal Component ---
const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
    return (
        <div className="animate-fadeInUp" style={{ animationDelay: `${delay}s` }}>
            {children}
        </div>
    );
};

const emptyLottieUrl = "https://assets2.lottiefiles.com/packages/lf20_t24tpvcu.json";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const [openSolutionIndex, setOpenSolutionIndex] = useState<number|null>(null);
  const [lotties, setLotties] = useState([null, null, null, null]);
  const [emptyLottie, setEmptyLottie] = useState(null);

  // Cleanup timer ref on unmount
  useEffect(() => {
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, []);

  // Swiper Autoplay Progress effect
  useEffect(() => {
    setProgress(0);
    if (progressInterval.current) clearInterval(progressInterval.current);
    let percent = 0;
    const autoplayDelay = 5500; // Match Swiper autoplay delay
    const intervalTime = 100; // Update frequency
    const increment = (intervalTime / autoplayDelay) * 100;

    progressInterval.current = setInterval(() => {
      percent += increment;
      if (percent <= 100) {
          setProgress(percent);
      } else {
         // Don't clear here, Swiper loop/slideChange will handle reset
         // If Swiper stops or loops, handleSlideChange resets progress
      }
    }, intervalTime);

    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [activeIndex]); // Restart progress when activeIndex changes (slide changes)

  // Swiper slide change handler
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex); // Use realIndex for loop mode
    // Reset progress manually on slide change
    setProgress(0);
    if (progressInterval.current) {
        clearInterval(progressInterval.current);
        // Restart interval logic is handled by the useEffect dependency on activeIndex
    }
  };

  useEffect(() => {
    Promise.all(lottieUrls.map(url => fetch(url).then(res => res.json())))
      .then(setLotties);
  }, []);

  useEffect(() => {
    fetch(emptyLottieUrl)
      .then(res => res.json())
      .then(setEmptyLottie);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden rounded-b-[50px] shadow-xl bg-[#0A1E40]">
        <Swiper
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          onSlideChange={handleSlideChange}
          modules={[Navigation, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index} className="relative h-full w-full">
              <Image
                src={slide.img}
                alt={slide.alt}
                fill
                priority={index === 0}
                className={`object-cover scale-100 ${slide.objectPosition || 'object-center'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" aria-hidden="true" />
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-center h-full px-6 sm:px-10 text-center">
                <h1 className="font-bold text-white mb-6 lg:mb-8 leading-tight md:leading-tight max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] [text-shadow:_0_2px_5px_rgba(0,0,0,0.5)] animate-fadeInUp">
                  <span>{slide.line1}</span><br /><span>{slide.line2}</span>
                </h1>
                <div className="animate-fadeInUp animation-delay-200">
                  <Link
                    href="#"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-7 py-3 font-semibold text-[#0A1E40] shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl active:scale-95 text-base sm:text-lg"
                  >
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 h-full w-0 bg-[#FDE6F0] transition-all duration-400 ease-out group-hover:w-full"></div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation (Bottom Left) */}
        <div className="absolute bottom-8 left-6 sm:left-10 z-30 flex items-center space-x-3">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-2.5 rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 active:bg-white/40"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-2.5 rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 active:bg-white/40"
            aria-label="Next Slide"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Progress Bar (Bottom Right) */}
        <div className="absolute bottom-10 right-6 sm:right-10 z-30 w-32 md:w-40 h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
          <div
            className="h-full bg-white shadow-glow transition-width duration-100"
            style={{
              width: `${progress}%`,
              boxShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
            }}
          />
        </div>
      </section>

      {/* Enablr Edge Section */}
      <Reveal delay={0.1}>
        <section className="relative py-16 md:py-24 bg-white overflow-hidden">
          {/* Modern SVG background */}
          <div className="absolute inset-0 -z-10 pointer-events-none select-none">
            <svg width="100%" height="100%" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[340px] md:h-[400px]">
              <defs>
                <linearGradient id="edgeGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FDE6F0" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FDE6F0" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <path d="M0,200 Q400,100 800,200 T1440,200 V400 H0 Z" fill="url(#edgeGradient)" />
              <ellipse cx="1100" cy="80" rx="180" ry="60" fill="#FDE6F0" fillOpacity="0.5" />
              <ellipse cx="300" cy="120" rx="120" ry="40" fill="#FDE6F0" fillOpacity="0.3" />
            </svg>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1E40] mb-4">
              The <span className="text-[#E94B8A] drop-shadow">Enablr Edge</span>
            </h2>
            <p className="text-[#0A1E40] mb-10 max-w-2xl text-lg font-medium">
              At Enablr, we work with you to build your global capability center (GCC) the right way.<br />
              <span className="text-[#E94B8A] font-semibold">Designed for speed, scale, and quality</span> at every step. Here's how we help you stay ahead:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {edgeCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-[#fde6f0] hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                  style={{ minHeight: 240 }}
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                  <h3 className="text-[#E94B8A] font-bold text-2xl mb-2 group-hover:underline">{card.title}</h3>
                  <p className="text-[#0A1E40] text-base font-normal opacity-90">{card.desc}</p>
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#fde6f0] rounded-full opacity-40 group-hover:opacity-60 transition-all duration-300" />
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-start">
              <Link href="#" className="inline-block bg-[#fff] text-[#0A1E40] font-bold px-6 py-3 rounded-lg shadow border border-[#E94B8A] hover:bg-[#E94B8A] hover:text-white transition-colors duration-200 text-lg">
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* --- Solutions Section --- */}
      <Reveal delay={0.2}>
        <section className="relative py-20 md:py-28 bg-[#F8F9FB] overflow-hidden rounded-3xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0A1E40] ml-20 -mt-16  text-center mb-10">Our services</h1>
           <DotPatternBg />
          <div className="relative z-8 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10 md:gap-14 min-h-[480px] items-stretch justify-center">
            {/* Left: Accordion */}
            <div className="w-full lg:w-[45%] xl:w-2/5 flex-shrink-0 flex flex-col justify-center">
              <div className="space-y-0 border rounded-xl shadow-lg bg-white overflow-hidden flex flex-col transition-all duration-300 min-h-[320px]">
                {solutions.map((sol, index) => (
                  <div key={sol.title} className={`border-b last:border-b-0 ${openSolutionIndex === index ? 'bg-gray-50 border-l-4 border-[#E94B8A]' : ''}`}>
                    <button
                      onClick={() => { setOpenSolutionIndex(openSolutionIndex === index ? null : index) }}
                      className={`group w-full text-left px-6 py-6 flex justify-between items-center cursor-pointer transition-colors duration-150 font-semibold text-lg ${openSolutionIndex === index ? 'text-[#E94B8A]' : 'text-[#0A1E40] hover:bg-gray-50'}`}
                      aria-expanded={openSolutionIndex === index}
                      aria-controls={`solution-content-${index}`}
                    >
                      {sol.title}
                      <ChevronRight className={`w-5 h-5 transition-transform duration-300 ease-in-out flex-shrink-0 ${openSolutionIndex === index ? 'rotate-90 text-[#E94B8A]' : 'text-gray-400 group-hover:text-gray-600'}`} />
                    </button>
                    {openSolutionIndex === index && (
                      <div className="px-6 pb-6 pt-0 text-gray-700 text-base leading-relaxed animate-fadeIn">
                        {sol.desc}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Right: Details */}
            <div className="flex-1 w-full lg:w-[55%] xl:w-3/5 relative flex items-center justify-center">
              <div className="w-full h-[300px] lg:h-[450px] bg-gray-100 rounded-xl shadow-lg overflow-hidden relative border border-black/5 flex flex-col items-center justify-center">
                {openSolutionIndex !== null && solutions[openSolutionIndex] && (
                  <div key={openSolutionIndex} className="absolute inset-0 animate-fadeIn duration-500">
                    <Image
                      src={solutions[openSolutionIndex].img}
                      alt={solutions[openSolutionIndex].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                {openSolutionIndex === null && (
                  <div className="flex flex-col items-center justify-center h-full w-full">
                    {emptyLottie && <Lottie animationData={emptyLottie} loop autoplay style={{ width: 120, height: 120 }} />}
                    <div className="mt-4 text-lg text-gray-500 font-medium">Select a solution to view details.</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </Reveal>


      {/* Key Highlights Section */}
      <Reveal delay={0.4}>
        <section className="py-16 md:py-24 bg-[#F8F9FB]">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-[#E94B8A] mb-10">Key Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {highlights.map((h, idx) => (
                <div
                  key={h.title}
                  className="group bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl cursor-pointer relative overflow-hidden"
                >
                  <div className="transition-transform duration-300 group-hover:scale-110 w-24 h-24 mx-auto mb-2">
                    {lotties[idx] && <Lottie animationData={lotties[idx]} loop autoplay style={{ width: '100%', height: '100%' }} />}
                  </div>
                  <h4 className="mt-2 text-lg font-bold text-[#0A1E40] mb-2 group-hover:text-[#E94B8A] transition-colors duration-200">{h.title}</h4>
                  <div className="h-16 flex items-center justify-center">
                    <p className="text-sm text-[#0A1E40] opacity-80 transition-opacity duration-300 group-hover:opacity-100 opacity-0">
                      {h.desc}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-[#fde6f0] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Blog/Insights Section */}
      <Reveal delay={0.5}>
        <BlogInsights />
      </Reveal>

      {/* Newsletter Section */}
      <Reveal delay={0.6}>
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

      {/* Footer */}
      <footer className="w-full bg-[#0A1E40] text-white py-10 mt-8">
        <div className="w-full px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-[#ffffff] mb-2">Enablr</div>
            <div className="text-sm text-white/80 mb-4">Your GCC Enabling Catalyst</div>
          </div>
          <div>
            <div className="font-semibold mb-2">Solutions</div>
            <ul className="space-y-1 text-sm">
              <li><Link href="/solutions/gcc-as-a-service" className="hover:underline">GCC as a Service</Link></li>
              <li><Link href="/solutions/technology" className="hover:underline">Technology</Link></li>
              <li><Link href="/solutions/workspace" className="hover:underline">Workspace</Link></li>
              <li><Link href="/solutions/talent-hr" className="hover:underline">Talent & HR</Link></li>
              <li><Link href="/solutions/operations" className="hover:underline">Operations</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Engagement Models</div>
            <ul className="space-y-1 text-sm">
              <li><Link href="/engagement/bot" className="hover:underline">BOT</Link></li>
              <li><Link href="/engagement/modular-services" className="hover:underline">Modular Services</Link></li>
              <li><Link href="/engagement/end-to-end" className="hover:underline">End-to-end management</Link></li>
              <li><Link href="/engagement/consulting" className="hover:underline">Consulting</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Company</div>
            <ul className="space-y-1 text-sm">
              <li><Link href="/about" className="hover:underline">About us</Link></li>
              <li><Link href="/careers" className="hover:underline">Careers</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/insights" className="hover:underline">Insights</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-white/60 mt-8 w-full">© 2025 Enablr. All rights reserved.</div>
      </footer>

      
    </div>
  );
}
