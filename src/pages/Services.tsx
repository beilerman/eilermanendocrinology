import { Link } from 'react-router-dom'

const expertWitnessServices = [
  {
    title: 'Medical Record Review',
    description: 'Comprehensive analysis of medical records, laboratory data, imaging studies, and clinical documentation to identify relevant medical issues and establish timelines.',
  },
  {
    title: 'Standard of Care Opinions',
    description: 'Expert assessment of whether medical care met accepted professional standards, with detailed written opinions supported by current medical literature.',
  },
  {
    title: 'Case Merit Evaluation',
    description: 'Preliminary case assessment to help attorneys evaluate the medical merits of potential litigation before significant investment.',
  },
  {
    title: 'Written Reports',
    description: 'Detailed expert reports summarizing medical opinions, supporting evidence, and conclusions suitable for court submission.',
  },
  {
    title: 'Deposition Testimony',
    description: 'Clear, professional deposition testimony with thorough preparation and effective communication of complex medical concepts.',
  },
  {
    title: 'Trial Testimony',
    description: 'Compelling courtroom testimony with the ability to explain technical medical information in terms accessible to judge and jury.',
  },
]

const pharmaServices = [
  {
    title: 'Advisory Board Participation',
    description: 'Strategic input on product development, clinical positioning, and market access based on real-world clinical experience and patient perspectives.',
  },
  {
    title: 'Clinical Trial Consultation',
    description: 'Protocol review, endpoint selection, and practical guidance on trial design from an experienced clinical trialist and principal investigator.',
  },
  {
    title: 'Medical Education Development',
    description: 'Content development for CME programs, medical education materials, and healthcare provider training aligned with current evidence.',
  },
  {
    title: 'Speaker Programs',
    description: 'Educational presentations for healthcare professionals on approved topics, with experience presenting for major pharmaceutical companies.',
  },
  {
    title: 'Key Opinion Leader Activities',
    description: 'Thought leadership, peer-to-peer education, and expert input on therapeutic areas including diabetes, obesity, and adrenal disorders.',
  },
]

const speakingTopics = [
  'Cushing\'s Syndrome: Recognition, Diagnosis, and Management',
  'Hypercortisolism in Difficult-to-Control Diabetes: CATALYST Trial Findings',
  'GLP-1 Receptor Agonists in Clinical Practice',
  'Type 2 Diabetes: A Modern Approach to Management',
  'Obesity Medicine: Beyond Lifestyle Modification',
  'Thyroid Disorders: Common Pitfalls in Diagnosis and Treatment',
  'Adrenal Insufficiency: Recognition and Management',
  'Population Health and Value-Based Care in Endocrinology',
  'Clinical Decision Support in Diabetes Management',
]

const pharmaExperience = [
  'Corcept Therapeutics',
  'Novo Nordisk',
  'Eli Lilly',
  'AbbVie',
  'Dexcom',
  'AstraZeneca',
  'Sanofi',
  'Boehringer Ingelheim',
  'Amgen',
  'And 15+ additional companies',
]

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 font-medium mb-4 tracking-wide uppercase text-sm">
            Consulting Services
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Professional Medical Consulting
          </h1>
          <p className="text-xl text-navy-200 max-w-3xl">
            Comprehensive consulting services for legal professionals, pharmaceutical companies,
            and healthcare organizations, backed by over 24 years of clinical experience.
          </p>
        </div>
      </section>

      {/* Expert Witness Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-navy-100 rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <div>
              <h2 className="section-heading mb-0">Expert Witness Services</h2>
              <p className="text-navy-600">For attorneys and legal professionals</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertWitnessServices.map((service, index) => (
              <div key={index} className="border border-navy-100 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-navy-900 text-lg mb-3">{service.title}</h3>
                <p className="text-navy-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-navy-50 rounded-lg p-8">
            <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Case Types</h3>
            <div className="grid md:grid-cols-2 gap-4 text-navy-700">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Medical malpractice defense and plaintiff
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Personal injury with endocrine sequelae
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Delayed or missed diagnosis
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Medication management issues
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Hospital policy and protocol cases
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  EHR and documentation disputes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pharmaceutical Consulting */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <svg className="w-7 h-7 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h2 className="section-heading mb-0">Pharmaceutical Consulting</h2>
              <p className="text-navy-600">For pharmaceutical and biotech companies</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {pharmaServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-navy-900 text-lg mb-3">{service.title}</h3>
                <p className="text-navy-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="font-serif text-xl font-semibold text-navy-900 mb-6">Industry Experience</h3>
            <p className="text-navy-600 mb-4">
              Extensive consulting and speaker experience with major pharmaceutical and medical device companies:
            </p>
            <div className="flex flex-wrap gap-3">
              {pharmaExperience.map((company, index) => (
                <span key={index} className="bg-navy-50 text-navy-700 px-4 py-2 rounded-full text-sm font-medium">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Engagements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-navy-100 rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h2 className="section-heading mb-0">Speaking Engagements</h2>
              <p className="text-navy-600">For conferences and medical education</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-6">Presentation Formats</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">CME Presentations</h4>
                    <p className="text-navy-600">Accredited continuing medical education programs with current evidence-based content</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Conference Speaking</h4>
                    <p className="text-navy-600">National and regional conference presentations on endocrinology topics</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Grand Rounds</h4>
                    <p className="text-navy-600">Academic medical education presentations for hospital and residency programs</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-6">Sample Topics</h3>
              <ul className="space-y-3">
                {speakingTopics.map((topic, index) => (
                  <li key={index} className="flex items-center gap-3 text-navy-700">
                    <svg className="w-5 h-5 text-gold-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Ready to Engage?
          </h2>
          <p className="text-xl text-navy-300 mb-8">
            Contact us to discuss your consulting needs or request a fee schedule.
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
