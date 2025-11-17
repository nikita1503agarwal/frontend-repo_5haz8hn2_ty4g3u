export default function DownloadApp() {
  return (
    <section id="download" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#064663]">Get the App</h2>
          <p className="mt-4 text-slate-600">Manage prescriptions, track deliveries, and chat with pharmacists.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-white font-medium">Download on iOS</a>
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-white font-medium">Get it on Android</a>
          </div>
        </div>
        <div className="aspect-[9/16] w-full rounded-2xl bg-slate-100 border border-slate-200" />
      </div>
    </section>
  )
}
