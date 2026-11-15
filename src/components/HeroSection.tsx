import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 md:px-8 lg:items-start lg:px-16 overflow-hidden">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#0D9488] via-[#0f766e] to-[#115e59]"
      />
      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#EA580C]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#EAB308]/20 blur-3xl"
      />

      {/* Desktop-only image; layered with teal overlays to match the hero palette. */}
      <div
        aria-hidden="true"
        className="absolute right-[7%] top-[14%] hidden h-[72%] w-[38%] max-w-[34rem] overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-[#042f2e]/30 lg:block"
      >
        <div className="absolute inset-0 opacity-75">
          <img
            src="/images/home/image-background-1.jpeg"
            alt=""
            className="h-full w-full object-contain object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f766e]/70 via-[#0f766e]/20 to-[#115e59]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#115e59]/45 via-transparent to-[#0D9488]/10" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl gap-6 animate-fade-in-up lg:absolute lg:left-[8%] lg:top-[14%] lg:ml-0 lg:max-w-[42%] lg:px-4 lg:items-start lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold text-white leading-[1.1]">
          Descubre experiencias únicas
          <span className="text-[#EAB308]"> alrededor del mundo</span>
        </h1>
        <p className="text-lg md:text-xl text-teal-50/90 leading-relaxed max-w-xl">
          Explora, filtra y guarda las mejores actividades en cada destino.
          Tu próxima aventura comienza aquí.
        </p>
        <Link
          href="/experiences"
          className="mt-4 inline-flex items-center gap-2 px-8 py-3.5 bg-[#EA580C] text-white font-semibold text-base rounded-xl shadow-lg hover:bg-[#d04d0a] hover:shadow-xl active:scale-[0.97] transition-all duration-200"
        >
          Explorar ahora
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>

      {/* Bottom wave decoration */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"
      />
    </section>
  );
}