import { Link } from 'react-router-dom'

const feeSchedule = [
  {
    service: 'Retainer',
    rate: '$500',
    description: 'Non-refundable retainer to initiate engagement',
    notes: 'Required before case review begins',
  },
  {
    service: 'Consultation, Document Review & Report Writing',
    rate: '$500/hour',
    description: 'Phone consultations, medical record review, written reports and declarations',
    notes: 'Billed in 15-minute increments',
  },
  {
    service: 'Deposition Testimony',
    rate: '$800/hour',
    description: 'Preparation and attendance for deposition testimony',
    notes: 'Includes preparation time',
  },
  {
    service: 'Trial Testimony',
    rate: '$800/hour',
    description: 'Courtroom testimony and trial preparation',
    notes: 'Minimum 8-hour day at trial rate',
  },
]

const travelPolicy = [
  {
    type: 'Ground Travel',
    policy: 'Half of trial rate ($400/hour) for round trip travel time from Union, KY',
    details: 'Travel time calculated via Google Maps',
  },
  {
    type: 'Mileage',
    policy: 'IRS standard mileage reimbursement',
    details: 'Current IRS rate applied',
  },
  {
    type: 'Air Travel',
    policy: 'Arranged for distances over 400 miles round trip',
    details: 'Economy or business class as appropriate',
  },
  {
    type: 'Accommodations',
    policy: 'Hotel and meals reimbursed at cost',
    details: 'Receipts required',
  },
]

export default function Fees() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hero-animate">
          <p className="text-gold-400 font-medium mb-4 tracking-wide uppercase text-sm">
            Engagement Terms
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Fee Schedule
          </h1>
          <p className="text-xl text-navy-200 max-w-3xl">
            Clear, professional fee structure for expert witness and consulting services.
          </p>
        </div>
      </section>

      {/* Fee Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-10">Service Rates</h2>

          <div className="space-y-6">
            {feeSchedule.map((item, index) => (
              <div
                key={index}
                className="border border-navy-100 rounded-xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-grow">
                    <h3 className="font-semibold text-navy-900 text-lg mb-1">
                      {item.service}
                    </h3>
                    <p className="text-navy-600">{item.description}</p>
                    {item.notes && (
                      <p className="text-navy-500 text-sm mt-2 italic">{item.notes}</p>
                    )}
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-2xl font-bold text-gold-700">{item.rate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trial Minimum */}
          <div className="mt-8 bg-navy-50 rounded-xl p-6">
            <h3 className="font-semibold text-navy-900 mb-2">Trial Day Minimum</h3>
            <p className="text-navy-600">
              Trial testimony requires a minimum of 8 hours per trial day at the $800/hour rate,
              regardless of actual time spent in court.
            </p>
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-16 bg-gold-50 border-y border-gold-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">Cancellation Policy</h2>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Deposition and Trial Cancellations</h3>
                <p className="text-navy-600">
                  Cancellation with less than or equal to one week notice requires payment
                  of one full day of trial time (8 hours at $800/hour = $6,400).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Policy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-10">Travel Policy</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {travelPolicy.map((item, index) => (
              <div key={index} className="border border-navy-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">{item.type}</h3>
                <p className="text-navy-700 mb-2">{item.policy}</p>
                <p className="text-navy-500 text-sm">{item.details}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-navy-50 rounded-lg">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-navy-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-navy-900 mb-1">Base Location</h3>
                <p className="text-navy-600">
                  Union, Kentucky (Greater Cincinnati area). All travel times and distances
                  calculated from this location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-8">Payment Terms</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-navy-900 mb-3">Retainer</h3>
              <p className="text-navy-600 text-sm">
                Non-refundable $500 retainer required to initiate engagement.
                Applied to first invoice.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-navy-900 mb-3">Invoicing</h3>
              <p className="text-navy-600 text-sm">
                Invoices issued monthly or upon completion of services.
                Detailed time records provided.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-navy-900 mb-3">Payment Due</h3>
              <p className="text-navy-600 text-sm">
                Payment due within 30 days of invoice date.
                Accepted: check, ACH, wire transfer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-10">Engagement Process</h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gold-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 text-lg mb-2">Initial Contact</h3>
                <p className="text-navy-600">
                  Submit a case inquiry through the contact form or email. Provide a brief
                  description of the matter and relevant timeline.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gold-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 text-lg mb-2">Conflict Check</h3>
                <p className="text-navy-600">
                  Preliminary review to confirm no conflicts of interest and that the case
                  falls within areas of expertise.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gold-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 text-lg mb-2">Retainer Agreement</h3>
                <p className="text-navy-600">
                  Upon acceptance, execute engagement letter and submit retainer to begin work.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gold-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 text-lg mb-2">Case Review</h3>
                <p className="text-navy-600">
                  Thorough review of medical records and relevant materials, followed by
                  consultation and written report as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-xl text-navy-300 mb-8">
            Contact us to initiate a case review or discuss consulting needs.
          </p>
          <Link to="/contact" className="btn-primary bg-gold-600 hover:bg-gold-700">
            Request Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
