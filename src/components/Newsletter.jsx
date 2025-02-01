export default function Newsletter() {
  return (
    <div className="bg-background-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-amiri text-primary-green mb-4">
              Restez informé
            </h3>
            <p className="text-gray-600">
              Inscrivez-vous à notre newsletter pour recevoir les dernières actualités
            </p>
          </div>
          
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre email"
                className="newsletter-input"
                required
                aria-label="Adresse email pour la newsletter"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                S'inscrire
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              En vous inscrivant, vous acceptez notre politique de confidentialité.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}