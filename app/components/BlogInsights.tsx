"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// Updated Lottie animation URLs with public, reliable animations
const LOTTIE_ANIMATIONS = {
  trends: 'https://lottie.host/2a1d1450-4e70-4617-9778-39d9b0f5c2a7/7tPo5cJzGF.json', // Analytics animation
  digital: 'https://lottie.host/e2960a11-1b03-4e35-b51a-4e2d6922f749/CnKh3gFxbI.json', // Digital transformation
  talent: 'https://lottie.host/7c1018b1-0f4f-4615-86b4-0c70d8c0c9c5/p327gDcDVi.json'  // Team/people animation
};

// Fallback images in case animations fail
const FALLBACK_IMAGES = {
  trends: (
    <svg className="w-full h-full text-[#E94B8A]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
  ),
  digital: (
    <svg className="w-full h-full text-[#E94B8A]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  talent: (
    <svg className="w-full h-full text-[#E94B8A]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
};

const blogCards = [
  {
    title: "GCC Trends 2024",
    desc: "Latest trends in global capability centers",
    animation: 'trends'
  },
  {
    title: "Digital Transformation",
    desc: "How GCCs are driving digital innovation",
    animation: 'digital'
  },
  {
    title: "Talent Management",
    desc: "Best practices for GCC talent acquisition",
    animation: 'talent'
  }
];

export default function BlogInsights() {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [animationData, setAnimationData] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const loadAnimations = async () => {
      try {
        const animations: Record<string, any> = {};
        const errors: Record<string, boolean> = {};
        
        for (const [key, url] of Object.entries(LOTTIE_ANIMATIONS)) {
          try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to load animation');
            animations[key] = await response.json();
          } catch (err) {
            console.error(`Error loading animation for ${key}:`, err);
            errors[key] = true;
          }
        }
        
        setAnimationData(animations);
        setLoadError(errors);
      } catch (error) {
        console.error('Error in animation loading:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAnimations();
  }, []);

  const renderAnimation = (animation: string, index: number) => {
    if (loadError[animation]) {
      return FALLBACK_IMAGES[animation as keyof typeof FALLBACK_IMAGES];
    }

    if (animationData[animation]) {
      return (
        <Lottie
          animationData={animationData[animation]}
          loop={isHovered === index}
          autoplay={true}
          style={{ width: '100%', height: '100%' }}
        />
      );
    }

    return FALLBACK_IMAGES[animation as keyof typeof FALLBACK_IMAGES];
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#E94B8A]">Blog</span>
              <span className="text-[#0A1E40]"> Insights on GCC Trends</span>
            </h2>
            <p className="text-[#7A2048] text-lg max-w-2xl mx-auto">
              Loading insights...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogCards.map((card, index) => (
              <div
                key={card.title}
                className="group bg-white rounded-2xl shadow-lg p-8 animate-pulse"
              >
                <div className="h-64 mb-6 bg-gray-200 rounded-xl"></div>
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-6"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#E94B8A]">Blog</span>
            <span className="text-[#0A1E40]"> Insights on GCC Trends</span>
          </h2>
          <p className="text-[#7A2048] text-lg max-w-2xl mx-auto">
            Stay ahead of the curve with our latest insights on Global Capability Centers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogCards.map((card, index) => (
            <div
              key={card.title}
              className="group bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className="h-64 mb-6 relative flex items-center justify-center p-6">
                {renderAnimation(card.animation, index)}
              </div>
              <h3 className="text-2xl font-bold text-[#0A1E40] mb-3 group-hover:text-[#E94B8A] transition-colors">
                {card.title}
              </h3>
              <p className="text-[#7A2048] mb-6 text-lg">
                {card.desc}
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-[#E94B8A] font-semibold group-hover:text-[#6C3EB8] transition-colors"
              >
                Read More
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 