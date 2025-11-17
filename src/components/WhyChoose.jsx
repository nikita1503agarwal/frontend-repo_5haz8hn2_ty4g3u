import { ShieldCheck, CreditCard, ThermometerSun, Lock } from 'lucide-react'

export default function WhyChoose() {
  const points = [
    { icon: ShieldCheck, title: 'Verified pharmacy partners' },
    { icon: CreditCard, title: 'Insurance integration' },
    { icon: ThermometerSun, title: 'Cold-chain delivery' },
    { icon: Lock, title: 'Secure & compliant (PIPEDA/HIA)' },
  ]
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#064663]">Why Choose MediSwift</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, title }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-[#0FB9B1]/15 text-[#064663] flex items-center justify-center">
                <Icon />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
