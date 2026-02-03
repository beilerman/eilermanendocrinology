import { Link } from 'react-router-dom'

const credentials = [
  { label: 'Years Experience', value: '24+' },
  { label: 'Board Certifications', value: '4' },
  { label: 'Patient Rating', value: '4.9/5.0' },
  { label: 'Patients Seen Monthly', value: '400+' },
]

const expertiseAreas = [
  {
    title: "Cushing's Syndrome",
    description: 'Nationally recognized expert and CATALYST trial investigator',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Diabetes Mellitus',
    description: 'Type 1, Type 2, DKA, and advanced medication management',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Thyroid Disorders',
    description: 'Hypothyroidism, hyperthyroidism, and thyroid nodules',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Obesity Medicine',
    description: 'GLP-1 therapies and comprehensive weight management',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: 'Adrenal Disorders',
    description: "Addison's disease, adrenal insufficiency, and pheochromocytoma",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Health Informatics',
    description: 'EHR systems, clinical decision support, and quality improvement',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    quote: "Dr. Eilerman is wise as an Endocrinologist. Knows how and what to do for Cushing's, Adrenal Insufficiency, Diabetes.",
    source: 'Patient Review',
  },
  {
    quote: "Best doctor I have ever seen... He immediately figured I had Cushing's Disease when no other doctor figured this.",
    source: 'Patient Review',
  },
  {
    quote: 'One of the best doctors I have ever seen, listens to you and your concerns. Explains things so you understand them.',
    source: 'Patient Review',
  },
]

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold-400 font-medium mb-4 tracking-wide uppercase text-sm">
                Expert Medical Consulting
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
                Bradley Scott Eilerman, M.D., M.H.I.
              </h1>
              <p className="text-xl md:text-2xl text-navy-200 mb-4">
                Board-Certified Endocrinologist
              </p>
              <p className="text-lg text-navy-300 mb-8 max-w-xl">
                Expert witness testimony, pharmaceutical consulting, and medical advisory services
                backed by over two decades of clinical experience and landmark research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-center">
                  Request Consultation
                </Link>
                <Link to="/about" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10 text-center">
                  View Credentials
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gold-600/20 rounded-full blur-2xl"></div>
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gold-600/30">
                  <img
                    src="/images/dr-eilerman.jpg"
                    alt="Dr. Bradley Scott Eilerman, M.D., M.H.I."
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-navy-700 pt-12">
            {credentials.map((cred) => (
              <div key={cred.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gold-400">{cred.value}</p>
                <p className="text-navy-300 text-sm mt-1">{cred.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiator - CATALYST Trial */}
      <section className="py-16 bg-gold-50 border-y border-gold-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <p className="text-gold-700 font-medium text-sm uppercase tracking-wide mb-2">Featured Research</p>
              <h2 className="text-2xl md:text-3xl font-serif text-navy-900 mb-4">
                CATALYST Trial Investigator
              </h2>
              <p className="text-navy-600">
                Lead investigator on the largest study ever conducted on hypercortisolism in
                difficult-to-control diabetes. Published in <em>Diabetes Care</em> (2025),
                demonstrating 24% prevalence of hypercortisolism and significant treatment outcomes.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link to="/publications" className="btn-primary">
                View Research
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Areas of Expertise</h2>
            <p className="section-subheading mx-auto">
              Comprehensive consulting across the full spectrum of endocrine disorders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area) => (
              <div key={area.title} className="card border border-navy-100 group hover:border-gold-300">
                <div className="text-gold-600 mb-4 group-hover:text-gold-500 transition-colors">
                  {area.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-navy-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-navy-600">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/expertise" className="btn-secondary">
              View All Expertise Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Consulting Services</h2>
            <p className="section-subheading mx-auto">
              Professional medical consulting for attorneys, pharmaceutical companies, and healthcare organizations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-navy-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy-900 mb-3">Expert Witness</h3>
              <p className="text-navy-600 mb-4">
                Comprehensive case review, standard of care analysis, deposition testimony,
                and trial testimony for medical malpractice and personal injury cases.
              </p>
              <Link to="/services" className="text-gold-700 font-medium hover:text-gold-800 inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-navy-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy-900 mb-3">Pharmaceutical Consulting</h3>
              <p className="text-navy-600 mb-4">
                Advisory board participation, clinical trial consultation, medical education
                development, and speaker programs for pharmaceutical companies.
              </p>
              <Link to="/services" className="text-gold-700 font-medium hover:text-gold-800 inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-navy-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-navy-900 mb-3">Speaking Engagements</h3>
              <p className="text-navy-600 mb-4">
                CME presentations, conference speaking, grand rounds, and medical education
                programs on endocrinology topics.
              </p>
              <Link to="/services" className="text-gold-700 font-medium hover:text-gold-800 inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">What Patients Say</h2>
            <p className="section-subheading mx-auto">
              Top 10% patient experience rating with over 550 reviews
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-navy-50 rounded-lg p-8 relative">
                <svg className="absolute top-6 left-6 w-10 h-10 text-gold-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="relative z-10 pt-8">
                  <p className="text-navy-700 italic mb-4">"{testimonial.quote}"</p>
                  <footer className="text-sm text-navy-500">— {testimonial.source}</footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-xl text-navy-300 mb-8">
            Schedule a consultation to discuss expert witness services, pharmaceutical consulting,
            or speaking engagement opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-gold-600 hover:bg-gold-700">
              Request Consultation
            </Link>
            <Link to="/fees" className="btn-secondary border-white text-white hover:bg-white/10">
              View Fee Schedule
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
