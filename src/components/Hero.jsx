import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] w-full overflow-hidden bg-[#061A2B] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Same-Day Prescription Delivery Across Calgary.
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-200 max-w-xl">
            Upload your prescription, we deliver in 2–4 hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-[#0FB9B1] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-teal-900/20 hover:bg-teal-400 transition-colors">
              Get Started
            </a>
            <a href="#download" className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-[#064663] transition-colors">
              Download App
            </a>
          </div>
        </div>
        <div className="hidden lg:block"></div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061A2B] via-transparent to-transparent opacity-70" />
    </section>
  )
}
