import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <img
                src="/images/logo.png"
                alt="Eilerman Endocrinology, LLC"
                className="h-14 w-auto brightness-0 invert"
              />
              <p className="text-sm text-navy-400 mt-3 tracking-wide uppercase">Medical Consulting Since 2013</p>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed max-w-md">
              Expert witness services, pharmaceutical consulting, and medical advisory
              from a board-certified endocrinologist with over 24 years of clinical experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-5 text-gold-400 text-sm tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-navy-300 hover:text-white transition-colors duration-200">
                  About Dr. Eilerman
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-navy-300 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/expertise" className="text-navy-300 hover:text-white transition-colors duration-200">
                  Areas of Expertise
                </Link>
              </li>
              <li>
                <Link to="/publications" className="text-navy-300 hover:text-white transition-colors duration-200">
                  Research & Publications
                </Link>
              </li>
              <li>
                <Link to="/fees" className="text-navy-300 hover:text-white transition-colors duration-200">
                  Fee Schedule
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-5 text-gold-400 text-sm tracking-wide uppercase">Contact</h4>
            <ul className="space-y-3 text-sm text-navy-300">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Northern Kentucky<br />Greater Cincinnati Area</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:eilermanendocrinology@gmail.com" className="hover:text-white transition-colors duration-200">
                  eilermanendocrinology@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-navy-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-navy-400">
              &copy; {currentYear} Eilerman Endocrinology, LLC. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-navy-400">
              <span>Board Certified: Endocrinology | Internal Medicine | Pediatrics | Obesity Medicine</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
