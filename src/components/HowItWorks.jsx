import { Upload, Pill, Truck } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { icon: Upload, title: 'Upload your prescription', desc: 'Snap a photo or upload a file securely.' },
    { icon: Pill, title: 'Pharmacy fills it', desc: 'Licensed partners verify and prepare your meds.' },
    { icon: Truck, title: 'Delivered in hours', desc: 'Tracked, contactless delivery to your door.' },
  ]

  return (
    <section id="how" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#064663]">How It Works</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-teal-100 text-[#064663] flex items-center justify-center">
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
