export default function Membership() {
  return (
    <section id="membership" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#064663]">MediSwift Plus</h2>
            <p className="mt-4 text-slate-600">Unlimited deliveries, savings, and support for you and your family.</p>
            <ul className="mt-6 space-y-2 text-slate-700 list-disc list-inside">
              <li>Unlimited deliveries</li>
              <li>10% off OTC</li>
              <li>Family account</li>
              <li>Priority support</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="text-5xl font-bold text-[#064663]">$19.99<span className="text-xl text-slate-500">/month</span></div>
            <a href="#get-started" className="mt-6 inline-flex items-center justify-center rounded-md bg-[#0FB9B1] px-6 py-3 text-base font-semibold text-white shadow hover:bg-teal-500 transition-colors">Become a Member</a>
          </div>
        </div>
      </div>
    </section>
  )
}
