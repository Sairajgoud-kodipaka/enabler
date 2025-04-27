import Link from "next/link"
import { ChevronDown, Menu } from "lucide-react"

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
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link href="/">
          <img src="/Enablr-logo.png" alt="Enablr Logo" className="h-8" />
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(item =>
            item.dropdown ? (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1 text-[#0A1E40] font-medium hover:text-[#6C3EB8] transition-colors">
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                  <ul className="py-2">
                    {item.dropdown.map(sub => (
                      <li key={sub.label}>
                        <Link href={sub.href} className="block px-4 py-2 text-[#0A1E40] hover:bg-gray-100 hover:text-[#6C3EB8] transition-colors">{sub.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href!} className="text-[#0A1E40] font-medium hover:text-[#6C3EB8] transition-colors">{item.label}</Link>
            )
          )}
          <Link href="#" className="ml-4 px-5 py-2 rounded-md bg-[#6C3EB8] text-white font-semibold shadow hover:bg-[#7A2048] transition-colors">Get Started</Link>
        </div>
        {/* Mobile Nav (Hamburger) */}
        <button className="md:hidden p-2 rounded hover:bg-gray-100">
          <Menu className="w-6 h-6 text-[#0A1E40]" />
        </button>
      </div>
    </nav>
  )
} 