export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="flex items-start">
            <img
              src="/images/amt.svg"
              alt="AMT Logo"
              className="h-16 w-16 object-contain mr-4 invert brightness-0"
            />
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                Association Musulmans de Thonon
              </h3>
              <p className="text-gray-300">
                Un lieu de culte et de rassemblement pour la communauté musulmane de Thonon-les-Bains.
              </p>
            </div>
          </div>



          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">
              2 Avenue de Champagne<br />
              74200 Thonon-les-Bains<br />
              Email: mosqueeamtthonon@gmail.com<br />
              Téléphone: +33666474681
            </p>
          </div>

          {/* Social Media */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Réseaux Sociaux</h3>
            <div className="flex items-center space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/p/Mosqu%C3%A9e-Al-Sahaba-Thonon-AMT-100063646355222/?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 0 .592 0 1.324v21.351C0 23.406.597 24 1.325 24h11.495v-9.294H9.69v-3.622h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.406 24 22.675V1.324C24 .592 23.403 0 22.675 0z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/mosquee.amt.thonon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.312.974.974 1.25 2.241 1.312 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.337 2.633-1.312 3.608-.974.974-2.241 1.25-3.608 1.312-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.337-3.608-1.312-.974-.974-1.25-2.241-1.312-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.337-2.633 1.312-3.608C4.519 2.5 5.786 2.225 7.153 2.163 8.419 2.105 8.799 2.093 12 2.093m0-2.163C8.737 0 8.332.013 7.052.072 5.77.132 4.517.402 3.488 1.43 2.46 2.459 2.19 3.712 2.13 4.994.013 6.274 0 6.679 0 10.002v3.996c0 3.323.013 3.728.072 5.008.06 1.282.33 2.535 1.358 3.564 1.03 1.029 2.283 1.299 3.564 1.358 1.281.06 1.686.072 5.008.072s3.728-.013 5.008-.072c1.282-.06 2.535-.33 3.564-1.358 1.029-1.03 1.299-2.283 1.358-3.564.06-1.281.072-1.686.072-5.008s-.013-3.728-.072-5.008c-.06-1.282-.33-2.535-1.358-3.564-1.03-1.029-2.283-1.299-3.564-1.358C15.728.013 15.323 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8.001 4 4 0 0 1 0 8.001zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} Association Musulmans de Thonon. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}