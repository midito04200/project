export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="flex items-start">
            <img 
              src="/logo.png" 
              alt="AMT Logo" 
              className="h-16 w-16 object-contain mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold mb-2">Association Musulmans de Thonon</h3>
              <p className="text-gray-300">
                Un lieu de culte et de rassemblement pour la communauté musulmane de Thonon-les-Bains.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">
              Avenue de Champagne<br />
              74200 Thonon-les-Bains<br />
              Email: mosqueeamtthonon@gmail.com<br />
              Téléphone: 01 23 45 67 89
            </p>
          </div>

          {/* Social Media */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Réseaux Sociaux</h3>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.facebook.com/p/Mosqu%C3%A9e-Al-Sahaba-Thonon-AMT-100063646355222/?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <svg 
                  className="w-6 h-6 fill-current" 
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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