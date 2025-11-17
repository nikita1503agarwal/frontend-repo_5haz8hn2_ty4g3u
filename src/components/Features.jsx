import { Clock, RefreshCcw, BellRing, MessageSquare, ShoppingBag } from 'lucide-react'

export default function Features() {
  const features = [
    { icon: Clock, title: 'Same-day delivery', desc: '2–4 hour delivery windows across Calgary.' },
    { icon: RefreshCcw, title: 'Automated refills', desc: 'Set it and never run out of meds.' },
    { icon: BellRing, title: 'Medication reminders', desc: 'Smart, timely reminders on your phone.' },
    { icon: MessageSquare, title: 'Real pharmacist chat', desc: 'Secure chat with licensed pharmacists.' },
    { icon: ShoppingBag, title: 'Health essentials', desc: 'Order OTC, vitamins, baby care and more.' },
  ]

  return (
    <section id="features" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#064663]">Key Features</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-[#0FB9B1]/15 text-[#064663] flex items-center justify-center">
                <Icon />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
