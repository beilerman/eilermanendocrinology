import { Link } from 'react-router-dom'

const featuredPublications = [
  {
    title: 'Prevalence of hypercortisolism in difficult-to-control type 2 diabetes',
    journal: 'Diabetes Care',
    year: '2025',
    description: 'CATALYST trial screening phase results demonstrating 24% prevalence of hypercortisolism in patients with difficult-to-control type 2 diabetes—the largest study ever conducted on this topic.',
  },
  {
    title: 'Inadequately Controlled Type 2 Diabetes and Hypercortisolism: Improved Glycemia With Mifepristone Treatment',
    journal: 'Diabetes Care',
    year: '2025',
    description: 'CATALYST trial treatment phase results showing mifepristone achieved 1.32% HbA1c reduction vs placebo in patients with hypercortisolism and difficult-to-control diabetes.',
  },
  {
    title: 'Clinical management of patients with Cushing syndrome treated with mifepristone: consensus recommendations',
    journal: 'Clinical Diabetes and Endocrinology',
    year: '2020',
    description: 'Expert consensus recommendations for the practical clinical management of Cushing syndrome patients receiving mifepristone therapy.',
  },
]

const otherPublications = [
  {
    title: 'The Genetics of Polycystic Ovary Syndrome',
    type: 'Book Chapter',
    publication: 'The Complete Polycystic Ovary Syndrome Book',
    year: '',
  },
]

const clinicalTrials = [
  {
    name: 'CATALYST',
    sponsor: 'Corcept Therapeutics',
    focus: 'Hypercortisolism/Cushing\'s in difficult-to-control diabetes',
    role: 'Site Principal Investigator',
    status: 'Completed 2025',
  },
  {
    name: 'EMPA-KIDNEY',
    sponsor: 'Boehringer-Ingelheim',
    focus: 'Empagliflozin in chronic kidney disease',
    role: 'Site Principal Investigator',
    status: 'Completed',
  },
  {
    name: 'SUSTAIN 7',
    sponsor: 'Novo Nordisk',
    focus: 'Semaglutide vs Dulaglutide in Type 2 Diabetes',
    role: 'Site Principal Investigator',
    status: 'Completed',
  },
  {
    name: 'CLEAR',
    sponsor: 'Esperion',
    focus: 'Bempedoic acid cardiovascular outcomes',
    role: 'Site Principal Investigator',
    status: 'Completed',
  },
  {
    name: 'OCEAN',
    sponsor: 'Amgen',
    focus: 'Olpasiran cardiovascular outcomes',
    role: 'Site Principal Investigator',
    status: 'Ongoing',
  },
]

const additionalTrials = [
  'Multiple insulin trials (Sanofi, BD)',
  'GLP-1 receptor agonist studies',
  'SGLT2 inhibitor trials',
  'Obesity medication studies',
  'Thyroid medication studies',
]

export default function Publications() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 font-medium mb-4 tracking-wide uppercase text-sm">
            Research & Publications
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Contributing to Medical Knowledge
          </h1>
          <p className="text-xl text-navy-200 max-w-3xl">
            Published researcher with experience as principal investigator on landmark
            clinical trials in diabetes, obesity, and endocrine disorders.
          </p>
        </div>
      </section>

      {/* Featured - CATALYST */}
      <section className="py-16 bg-gold-50 border-b border-gold-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <svg className="w-6 h-6 text-gold-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-gold-700 font-medium uppercase text-sm tracking-wide">Featured Research</span>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-2">
              CATALYST Trial (2023-2025)
            </h2>
            <p className="text-gold-700 font-medium mb-6">
              The Largest Study Ever Conducted on Hypercortisolism in Diabetes
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-navy-900 mb-4">Study Overview</h3>
                <p className="text-navy-600 mb-4">
                  The CATALYST trial investigated the prevalence and treatment of hypercortisolism
                  in patients with difficult-to-control type 2 diabetes. Dr. Eilerman served as
                  a site principal investigator for this groundbreaking research.
                </p>
                <p className="text-navy-600">
                  The study was the first to systematically screen a large population of diabetes
                  patients for hypercortisolism and evaluate treatment outcomes.
                </p>
              </div>

              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="font-semibold text-navy-900 mb-4">Key Findings</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gold-700 font-bold text-sm">24%</span>
                    </div>
                    <p className="text-navy-700">
                      Prevalence of hypercortisolism in difficult-to-control T2DM
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gold-700 font-bold text-sm">1.3%</span>
                    </div>
                    <p className="text-navy-700">
                      HbA1c reduction with mifepristone vs placebo
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-gold-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-navy-700">
                      Published in <em>Diabetes Care</em> (2025)
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-10">Selected Publications</h2>

          <div className="space-y-6">
            {featuredPublications.map((pub, index) => (
              <div
                key={index}
                className="border border-navy-100 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-grow">
                    <h3 className="font-semibold text-navy-900 text-lg mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-navy-600 mb-3">{pub.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gold-700 font-medium">{pub.journal}</span>
                      <span className="text-navy-400">|</span>
                      <span className="text-navy-500">{pub.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Publications */}
          <div className="mt-12">
            <h3 className="font-serif text-xl font-semibold text-navy-900 mb-6">Additional Publications</h3>
            <div className="space-y-4">
              {otherPublications.map((pub, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-navy-50 rounded-lg">
                  <svg className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-navy-900">{pub.title}</h4>
                    <p className="text-navy-600 text-sm">
                      {pub.type} in {pub.publication}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* External Links */}
          <div className="mt-12 p-6 bg-navy-50 rounded-lg">
            <h3 className="font-semibold text-navy-900 mb-4">View Complete Publication List</h3>
            <p className="text-navy-600 mb-4">
              For a complete list of publications, visit the following profiles:
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-gold-700 hover:text-gold-800 font-medium"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                PubMed Profile
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-gold-700 hover:text-gold-800 font-medium"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Google Scholar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Trials */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-4">Clinical Trial Experience</h2>
          <p className="section-subheading mb-10">
            Principal investigator on major pharmaceutical trials across diabetes, obesity,
            and cardiovascular disease.
          </p>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {clinicalTrials.map((trial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-navy-900 text-lg">{trial.name}</h3>
                    <p className="text-gold-700 text-sm font-medium">{trial.sponsor}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    trial.status === 'Ongoing'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-navy-100 text-navy-600'
                  }`}>
                    {trial.status}
                  </span>
                </div>
                <p className="text-navy-600 mb-2">{trial.focus}</p>
                <p className="text-sm text-navy-500">{trial.role}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-navy-900 mb-4">Additional Trial Experience</h3>
            <div className="flex flex-wrap gap-3">
              {additionalTrials.map((trial, index) => (
                <span
                  key={index}
                  className="bg-navy-50 text-navy-700 px-4 py-2 rounded-full text-sm"
                >
                  {trial}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Research-Backed Expert Opinions
          </h2>
          <p className="text-xl text-navy-300 mb-8">
            Benefit from expert consulting grounded in current medical evidence and clinical research experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-gold-600 hover:bg-gold-700">
              Request Consultation
            </Link>
            <Link to="/expertise" className="btn-secondary border-white text-white hover:bg-white/10">
              View Expertise Areas
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
