export default function Categories() {
  const items = ['Prescriptions','OTC medications','Vitamins & supplements','Baby care','First aid','Pet meds']
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#064663]">Product Categories</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((t) => (
            <div key={t} className="rounded-xl border border-slate-200 bg-white p-5 hover:border-[#0FB9B1] transition-colors">
              <p className="font-semibold text-slate-800">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
