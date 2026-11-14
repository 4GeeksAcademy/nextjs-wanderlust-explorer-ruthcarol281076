import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-bold text-white">
              🌍 Wanderlust Explorer
            </Link>
            <p className="mt-2 text-sm leading-relaxed max-w-xs">
              Descubre experiencias únicas alrededor del mundo. Explora, filtra y
              guarda tus actividades favoritas.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Navegación
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Inicio", href: "/" },
                { label: "Experiencias", href: "/experiences" },
                { label: "Favoritos", href: "/favorites" },
                { label: "Perfil", href: "/profile" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Design references */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Inspirado en
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href="https://www.guruwalk.com/es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GuruWalk
                </a>
              </li>
              <li>
                <a
                  href="https://www.tripadvisor.com.ve/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Tripadvisor
                </a>
              </li>
              <li>
                <a
                  href="https://www.getyourguide.com/es-es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GetYourGuide
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          &copy; 2026 Wanderlust Explorer. Proyecto de
          portfolio.
        </div>
      </div>
    </footer>
  );
}