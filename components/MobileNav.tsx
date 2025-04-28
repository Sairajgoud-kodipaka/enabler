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

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    closed: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 1, 1]
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="fixed inset-0 bg-gradient-to-b from-[#0A1E40] to-[#1a1a4d] z-50 md:hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-transparent">
            <Link href="/" onClick={onClose} className="bg-white rounded-lg p-2">
              <img src="/Enablr-logo.png" alt="Enablr Logo" className="h-8" />
            </Link>
            <button
              onClick={onClose}
              className="py-3 px-2 rounded-full transition-colors text-white hover:bg-white/10"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Navigation Content */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="flex flex-col h-[calc(100vh-72px)] overflow-y-auto"
          >
            <div className="flex-grow py-3 px-2">
              {navItems.map((item) => (
                <div key={item.label} className="mb-6">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center w-full py-3 px-2 text-white text-2xl font-medium"
                      >
                        <span className="flex-grow">{item.label}</span>
                        <ChevronDown
                          className={`w-6 h-6 transition-transform flex-shrink-0 ml-2 ${
                            openDropdowns.includes(item.label) ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <motion.div
                        initial="collapsed"
                        animate={openDropdowns.includes(item.label) ? "open" : "collapsed"}
                        variants={{
                          open: { height: 'auto', opacity: 1, x: 0 },
                          collapsed: { height: 0, opacity: 0, x: -20 }
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-2"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={onClose}
                            className="block py-3 px-2 text-white/90 text-xl hover:text-white transition-colors"
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
                      className="block py-3 px-2  text-white text-2xl font-medium ml-20"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <br />

            {/* Bottom CTA */}
            <div className="p-6 mt-auto">
              <Link
                href="#"
                onClick={onClose}
                className="block w-full -mt-14 py-1 px-1 bg-white text-[#0A1E40] text-center rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 