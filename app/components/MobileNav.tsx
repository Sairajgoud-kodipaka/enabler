import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface NavItem {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string; }[];
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export default function MobileNav({ isOpen, onClose, navItems }: MobileNavProps) {
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  // Close mobile nav when screen size becomes larger than md breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [onClose]);

  const toggleDropdown = (label: string) => {
    setOpenDropdowns(prev =>
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const overlayVariants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 left-0 bottom-0 w-[280px] bg-white z-50 md:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <Link href="/" onClick={onClose}>
                <img src="/Enablr-logo.png" alt="Enablr Logo" className="h-8" />
              </Link>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-[#0A1E40]" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="py-4">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100 last:border-none">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full px-6 py-3 text-[#0A1E40] hover:bg-gray-50"
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            openDropdowns.includes(item.label) ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <motion.div
                        initial="collapsed"
                        animate={openDropdowns.includes(item.label) ? "open" : "collapsed"}
                        variants={{
                          open: { height: 'auto', opacity: 1 },
                          collapsed: { height: 0, opacity: 0 }
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-gray-50"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={onClose}
                            className="block px-8 py-2 text-[#0A1E40] hover:text-[#6C3EB8] text-sm"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    </div>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      onClick={onClose}
                      className="block px-6 py-3 text-[#0A1E40] hover:bg-gray-50 font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="p-6 border-t">
              <Link
                href="#"
                onClick={onClose}
                className="block w-full py-3 px-4 bg-[#6C3EB8] text-white text-center rounded-lg font-semibold hover:bg-[#5C2EA8] transition-colors"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 