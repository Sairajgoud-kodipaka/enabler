"use client"
import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu } from "lucide-react"
import MobileNav from "./MobileNav"

const navItems = [
  { label: "Solutions", dropdown: [
    { label: "GCC as a Service", href: "/solutions/gcc-as-service" },
    { label: "Technology Enablement", href: "/solutions/technology" },
    { label: "Workspace", href: "/solutions/workspace" },
    { label: "Talent & HR", href: "/solutions/talent-hr" },
    { label: "Business Operations", href: "/solutions/business-operations" },
  ] },
  { label: "Engagement Models", dropdown: [
    { label: "Build-Operate-Transfer (BOT)", href: "/engagement-models/build-operate-transfer" },
    { label: "Modular Services", href: "/engagement-models/modular-services" },
    { label: "End-to-End Management", href: "/engagement-models/comprehensive-management" },
    { label: "Dedicated Teams", href: "/engagement-models/dedicated-teams" },
  ] },
  { label: "About Us", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
]

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <img 
              src="/Enablr-logo.png" 
              alt="Enablr Logo" 
              className="h-6 sm:h-7 md:h-8" 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map(item =>
              item.dropdown ? (
                <div 
                  key={item.label} 
                  className="relative group"
                  onMouseEnter={() => setHoveredDropdown(item.label)}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-[#0A1E40] font-medium hover:text-[#6C3EB8] transition-colors py-2">
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      hoveredDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  </button>
                  <div 
                    className={`absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-lg transition-all duration-200 ${
                      hoveredDropdown === item.label 
                        ? 'opacity-100 translate-y-0 pointer-events-auto' 
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <ul className="py-2">
                      {item.dropdown.map(sub => (
                        <li key={sub.label}>
                          <Link 
                            href={sub.href} 
                            className="block px-4 py-2 text-[#0A1E40] hover:bg-gray-50 hover:text-[#6C3EB8] transition-colors text-sm"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link 
                  key={item.label} 
                  href={item.href!} 
                  className="text-[#0A1E40] font-medium hover:text-[#6C3EB8] transition-colors py-2"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link 
              href="#" 
              className="ml-2 px-4 py-2 rounded-md bg-[#6C3EB8] text-white font-semibold shadow hover:bg-[#5C2EA8] transition-colors text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileNavOpen(true)}
            className="md:hidden p-2 rounded hover:bg-gray-100 transition-colors relative z-10"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-[#0A1E40]" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        navItems={navItems}
      />
    </>
  )
} 