import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/expertise', label: 'Expertise' },
  { path: '/publications', label: 'Research' },
  { path: '/fees', label: 'Fees' },
  { path: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg shadow-navy-900/5 py-2'
          : 'bg-white py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Eilerman Endocrinology"
              className={`w-auto transition-all duration-300 ${isScrolled ? 'h-10 sm:h-12' : 'h-12 sm:h-14'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 pb-1 ${
                  location.pathname === link.path
                    ? 'text-navy-900 border-b-2 border-gold-500'
                    : 'text-navy-600 hover:text-navy-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gold-500 text-white px-5 py-2.5 rounded-md text-sm font-medium
                         hover:bg-gold-600 transition-all duration-300
                         shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-navy-700 hover:text-navy-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-navy-100 mobile-menu-enter">
            <div className="flex flex-col space-y-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-navy-50 text-navy-900'
                      : 'text-navy-600 hover:bg-navy-50 hover:text-navy-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 px-3">
                <Link
                  to="/contact"
                  className="block bg-gold-500 text-white text-sm font-medium text-center
                             px-5 py-2.5 rounded-md hover:bg-gold-600 transition-colors"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
