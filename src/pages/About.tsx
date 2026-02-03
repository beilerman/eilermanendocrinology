import { Link } from 'react-router-dom'

const education = [
  {
    degree: 'M.D. with High Distinction',
    institution: 'University of Kentucky School of Medicine',
    year: '2001',
  },
  {
    degree: 'Masters of Health Informatics (M.H.I.)',
    institution: 'Northern Kentucky University',
    year: '2016',
  },
  {
    degree: 'B.S., Biochemistry and Molecular Biology, cum laude',
    institution: 'Centre College of Kentucky',
    year: '1997',
  },
]

const training = [
  {
    type: 'Fellowship in Diabetes, Endocrinology and Metabolism',
    institution: 'University Hospital, Cincinnati',
    years: '2006-2008',
  },
  {
    type: 'Fellowship in Adult Transitions in Developmental Pediatrics',
    institution: 'Cincinnati Children\'s Hospital',
    years: '2005-2006',
  },
  {
    type: 'Residency in Internal Medicine and Pediatrics',
    institution: 'University Hospital and Cincinnati Children\'s Hospital',
    years: '2002-2005',
  },
]

const certifications = [
  { board: 'American Board of Endocrinology, Diabetes, and Metabolism', year: '2008' },
  { board: 'American Board of Obesity Medicine', year: '2012' },
  { board: 'American Board of Internal Medicine', year: '2005' },
  { board: 'American Board of Pediatrics', year: '2005' },
]

const positions = [
  {
    title: 'Clinical Endocrinologist and Research Director',
    organization: 'St. Elizabeth Regional Diabetes Center',
    period: '2008 - Present',
  },
  {
    title: 'Clinical Director of Value Based Performance',
    organization: 'St. Elizabeth Physicians',
    period: '2022 - Present',
  },
  {
    title: 'Adjunct Assistant Professor of Medicine',
    organization: 'University of Kentucky College of Medicine - Northern Kentucky Campus',
    period: '2020 - Present',
  },
  {
    title: 'Co-founder and Chief Medical Officer',
    organization: 'PATH Clinical Decision Support Software, LLC',
    period: '2013 - Present',
  },
]

const honors = [
  { title: "Cincinnati's Top Doctors", source: 'Cincinnati Magazine', years: '2010-2020, 2022-2025' },
  { title: 'First Place, Poster Competition', source: 'AACE Annual Meeting', years: '2016' },
  { title: 'Innov8 for Health Winner', source: 'StartUp Competition', years: '2013' },
  { title: 'The Endocrine Society Medical Student Achievement Award', source: '', years: '2001' },
  { title: 'Alpha Omega Alpha', source: 'Medical Honor Society', years: '2000' },
  { title: 'Phi Beta Kappa', source: '', years: '1997' },
]

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <p className="text-gold-400 font-medium mb-4 tracking-wide uppercase text-sm">
                About
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Bradley Scott Eilerman, M.D., M.H.I.
              </h1>
              <p className="text-xl text-navy-200 mb-6">
                Board-Certified Endocrinologist | Research Director | Health Informatics Expert
              </p>
              <p className="text-navy-300 leading-relaxed">
                Dr. Eilerman is a practicing clinical endocrinologist with over 24 years of experience
                in patient care, clinical research, and medical education. He combines deep clinical
                expertise with advanced training in health informatics to provide comprehensive
                consulting services for legal, pharmaceutical, and healthcare organizations.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg flex items-center justify-center border-2 border-gold-600/30">
                <div className="text-center">
                  <div className="w-32 h-32 bg-navy-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-navy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-navy-400 text-sm">Professional Photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Positions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-10">Current Positions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {positions.map((position, index) => (
              <div key={index} className="border border-navy-100 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-navy-900 text-lg">{position.title}</h3>
                <p className="text-gold-700 font-medium">{position.organization}</p>
                <p className="text-navy-500 text-sm mt-1">{position.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Certifications */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-10">Board Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="w-16 h-16 bg-gold-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy-900 text-sm mb-1">{cert.board}</h3>
                <p className="text-navy-500 text-sm">Since {cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Training */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="section-heading mb-8">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-gold-600 font-semibold">{edu.year}</span>
                    </div>
                    <div className="flex-grow border-l-2 border-navy-200 pl-6 pb-6">
                      <h3 className="font-semibold text-navy-900">{edu.degree}</h3>
                      <p className="text-navy-600">{edu.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Training */}
            <div>
              <h2 className="section-heading mb-8">Training</h2>
              <div className="space-y-6">
                {training.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-20 text-right">
                      <span className="text-gold-600 font-semibold text-sm">{item.years}</span>
                    </div>
                    <div className="flex-grow border-l-2 border-navy-200 pl-6 pb-6">
                      <h3 className="font-semibold text-navy-900">{item.type}</h3>
                      <p className="text-navy-600">{item.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-8">Approach to Consulting</h2>
          <div className="space-y-6 text-navy-200 text-lg">
            <p>
              I bring the same rigor to consulting work that I apply to patient care. Every case
              deserves thorough analysis based on current medical evidence and established standards
              of care.
            </p>
            <p>
              My dual training in internal medicine and pediatrics, combined with sub-specialty
              expertise in endocrinology and obesity medicine, provides a comprehensive perspective
              that many specialists lack. This breadth of training allows me to evaluate complex
              cases that cross traditional specialty boundaries.
            </p>
            <p>
              With a Master's degree in Health Informatics, I understand the technical aspects of
              electronic health records, clinical decision support systems, and quality metrics—
              factors increasingly relevant in medical-legal cases involving documentation,
              system errors, or institutional policies.
            </p>
          </div>
        </div>
      </section>

      {/* Honors & Recognition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-10">Honors & Recognition</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {honors.map((honor, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-navy-50 rounded-lg">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-gold-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">{honor.title}</h3>
                  {honor.source && <p className="text-navy-600 text-sm">{honor.source}</p>}
                  <p className="text-gold-700 text-sm font-medium">{honor.years}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold-50 border-t border-gold-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">
            Learn More About My Services
          </h2>
          <p className="text-navy-600 mb-8">
            Explore my consulting services, areas of clinical expertise, or research publications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="btn-primary">
              View Services
            </Link>
            <Link to="/expertise" className="btn-secondary">
              Areas of Expertise
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
