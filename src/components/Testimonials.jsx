export default function Testimonials() {
  const quotes = [
    { name: 'Sofia R.', text: 'So convenient for my mom—meds arrived in 3 hours!'},
    { name: 'Daniel M.', text: 'The reminders and chat make refills effortless.'},
    { name: 'Priya K.', text: 'Love the speed and professionalism.'},
    { name: 'Mark T.', text: 'Reliable and friendly service every time.'},
  ]
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#064663]">What Customers Say</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {quotes.map((q) => (
            <div key={q.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-700">“{q.text}”</p>
              <p className="mt-4 font-semibold text-slate-900">{q.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
