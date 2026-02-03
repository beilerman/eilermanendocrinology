import { Link } from 'react-router-dom'

const expertiseAreas = [
  {
    title: "Cushing's Syndrome / Hypercortisolism",
    description: 'Nationally recognized expertise in the diagnosis and management of Cushing\'s syndrome, including experience as an investigator on the landmark CATALYST trial—the largest study ever conducted on hypercortisolism in diabetes.',
    caseTypes: [
      'Delayed or missed Cushing\'s diagnosis',
      'Complications from undiagnosed hypercortisolism',
      'Treatment decisions and medication management',
      'Post-surgical adrenal insufficiency',
      'Cyclic Cushing\'s syndrome cases',
    ],
    featured: true,
  },
  {
    title: 'Diabetes Mellitus',
    description: 'Comprehensive expertise in all forms of diabetes including Type 1, Type 2, gestational diabetes, and diabetic emergencies (DKA, HHS). Extensive experience with insulin management, oral agents, and newer therapies including GLP-1 agonists and SGLT2 inhibitors.',
    caseTypes: [
      'Insulin dosing errors and hypoglycemia',
      'DKA management and prevention',
      'Delayed diabetes diagnosis',
      'Medication selection and contraindications',
      'Glycemic control during hospitalization',
    ],
    featured: false,
  },
  {
    title: 'Thyroid Disorders',
    description: 'Expert evaluation of hypothyroidism, hyperthyroidism (including Graves\' disease), thyroid nodules, thyroid cancer, and thyroiditis. Experience with both medical management and surgical decision-making.',
    caseTypes: [
      'Thyroid storm and myxedema coma',
      'Missed thyroid cancer diagnosis',
      'Thyroid medication errors',
      'Thyroid surgery complications',
      'Thyroid disease in pregnancy',
    ],
    featured: false,
  },
  {
    title: 'Obesity Medicine',
    description: 'Board-certified in Obesity Medicine with extensive experience in medical weight management, including GLP-1 receptor agonist therapies, metabolic surgery evaluation, and comprehensive lifestyle interventions.',
    caseTypes: [
      'Weight loss medication adverse effects',
      'Bariatric surgery complications',
      'Medical clearance for weight loss procedures',
      'GLP-1 medication management',
      'Metabolic complications of obesity',
    ],
    featured: false,
  },
  {
    title: 'Adrenal Disorders',
    description: 'Expertise in adrenal insufficiency (including Addison\'s disease), pheochromocytoma, adrenal incidentalomas, and hyperaldosteronism. Experienced in both diagnosis and emergency management of adrenal crisis.',
    caseTypes: [
      'Adrenal crisis recognition and treatment',
      'Adrenal insufficiency diagnosis delays',
      'Steroid tapering and withdrawal',
      'Pheochromocytoma management',
      'Adrenal surgery indications',
    ],
    featured: false,
  },
  {
    title: 'Pituitary Disorders',
    description: 'Experience with pituitary tumors (adenomas), hypopituitarism, acromegaly, and prolactinomas. Understanding of both medical and surgical management approaches.',
    caseTypes: [
      'Pituitary tumor diagnosis and management',
      'Hypopituitarism following surgery or trauma',
      'Pituitary apoplexy',
      'Growth hormone disorders',
      'Prolactinoma treatment decisions',
    ],
    featured: false,
  },
  {
    title: 'Parathyroid & Calcium Disorders',
    description: 'Expertise in hyperparathyroidism, hypoparathyroidism, hypercalcemia, and hypocalcemia. Experience with both medical management and surgical decision-making for parathyroid disease.',
    caseTypes: [
      'Hypercalcemic crisis',
      'Post-surgical hypocalcemia',
      'Parathyroid surgery complications',
      'Missed hyperparathyroidism',
      'Osteoporosis management',
    ],
    featured: false,
  },
  {
    title: 'Gonadal & Hormone Disorders',
    description: 'Experience with testosterone deficiency, hypogonadism, polycystic ovary syndrome (PCOS), and hormone replacement therapy. Published research on PCOS genetics.',
    caseTypes: [
      'Testosterone therapy complications',
      'Hypogonadism diagnosis and treatment',
      'PCOS management',
      'Growth hormone therapy',
      'Hormone therapy in gender medicine',
    ],
    featured: false,
  },
  {
    title: 'Osteoporosis & Bone Health',
    description: 'Comprehensive expertise in osteoporosis diagnosis, risk stratification, and treatment including bisphosphonates, denosumab, anabolic therapies, and fracture prevention strategies.',
    caseTypes: [
      'Osteoporosis medication adverse effects',
      'Atypical femur fractures',
      'Inadequate osteoporosis treatment',
      'Osteonecrosis of the jaw',
      'Secondary osteoporosis workup',
    ],
    featured: false,
  },
  {
    title: 'Health Informatics & Clinical Decision Support',
    description: 'Master\'s degree in Health Informatics with expertise in electronic health record systems, clinical decision support software, and quality metrics. Co-founder of PATH Clinical Decision Support Software.',
    caseTypes: [
      'EHR-related medical errors',
      'Clinical decision support failures',
      'Documentation and communication issues',
      'System design and workflow problems',
      'Quality metric compliance',
    ],
    featured: false,
  },
  {
    title: 'Population Health & Quality Improvement',
    description: 'Clinical Director of Value Based Performance with expertise in population health management, quality metrics, and healthcare systems improvement.',
    caseTypes: [
      'Healthcare system policies and protocols',
      'Quality of care standards',
      'Institutional compliance issues',
      'Care coordination failures',
      'Value-based care disputes',
    ],
    featured: false,
  },
]

export default function Expertise() {
  const featuredArea = expertiseAreas.find((area) => area.featured)
  const otherAreas = expertiseAreas.filter((area) => !area.featured)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 font-medium mb-4 tracking-wide uppercase text-sm">
            Clinical Expertise
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Areas of Practice
          </h1>
          <p className="text-xl text-navy-200 max-w-3xl">
            Comprehensive expertise across the full spectrum of endocrine disorders,
            supported by over 24 years of clinical experience and active research involvement.
          </p>
        </div>
      </section>

      {/* Featured Expertise - Cushing's */}
      {featuredArea && (
        <section className="py-16 bg-gold-50 border-b border-gold-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-6 h-6 text-gold-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-gold-700 font-medium uppercase text-sm tracking-wide">Featured Expertise</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                  {featuredArea.title}
                </h2>
                <p className="text-navy-700 text-lg mb-6">
                  {featuredArea.description}
                </p>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-navy-900 mb-4">CATALYST Trial (2023-2025)</h3>
                  <p className="text-navy-600 mb-4">
                    Dr. Eilerman served as an investigator on the CATALYST trial, the largest study
                    ever conducted on hypercortisolism in difficult-to-control diabetes. The study
                    demonstrated:
                  </p>
                  <ul className="space-y-2 text-navy-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      24% prevalence of hypercortisolism in patients with difficult-to-control T2DM
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      1.32% HbA1c reduction with mifepristone treatment vs placebo
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Published in <em>Diabetes Care</em> (2025)
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-4">Relevant Case Types</h3>
                <ul className="space-y-3">
                  {featuredArea.caseTypes.map((caseType, index) => (
                    <li key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                      <svg className="w-5 h-5 text-gold-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-navy-700">{caseType}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Expertise Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-12">Additional Areas of Expertise</h2>
          <div className="space-y-8">
            {otherAreas.map((area, index) => (
              <div
                key={index}
                className="border border-navy-100 rounded-lg p-8 hover:shadow-md transition-shadow"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-serif font-semibold text-navy-900 mb-3">
                      {area.title}
                    </h3>
                    <p className="text-navy-600">{area.description}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy-500 uppercase tracking-wide mb-3">
                      Relevant Case Types
                    </h4>
                    <ul className="space-y-2">
                      {area.caseTypes.slice(0, 3).map((caseType, caseIndex) => (
                        <li key={caseIndex} className="flex items-center gap-2 text-sm text-navy-700">
                          <svg className="w-4 h-4 text-gold-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {caseType}
                        </li>
                      ))}
                      {area.caseTypes.length > 3 && (
                        <li className="text-sm text-navy-500">
                          + {area.caseTypes.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Qualifications */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">Unique Qualifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">Dual Board Certification</h3>
              <p className="text-navy-600 text-sm">
                Internal Medicine AND Pediatrics—a rare combination providing comprehensive perspective
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">Health Informatics</h3>
              <p className="text-navy-600 text-sm">
                M.H.I. degree with expertise in EHR systems and clinical decision support
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">Active Researcher</h3>
              <p className="text-navy-600 text-sm">
                Principal investigator on landmark trials including CATALYST
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">Active Clinician</h3>
              <p className="text-navy-600 text-sm">
                Sees 400+ patients monthly with top 10% satisfaction scores
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Have a Case in These Areas?
          </h2>
          <p className="text-xl text-navy-300 mb-8">
            Contact us to discuss how Dr. Eilerman's expertise can assist with your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-gold-600 hover:bg-gold-700">
              Request Case Review
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
