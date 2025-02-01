import { useContent } from '../hooks/useContent';
import DonationSlider from './DonationSlider';

export default function NewMosqueProject() {
  const { data: project, loading } = useContent('mosque-project');

  if (loading) {
    return <div>Chargement du projet...</div>;
  }

  return (
    <div className="py-20">
      {/* Hero Section with Animated Background */}
      <div className="relative h-[500px] mb-16">
        <DonationSlider opacity={0.85} />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-gray-800">
            <h2 className="text-5xl font-amiri mb-4">Centre Culturel du Chablais (CCC)</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Un espace moderne dédié à l'échange, l'apprentissage et le partage au cœur du Chablais
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Image */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative group cursor-pointer">
            <img
              src="https://myalgeria.com/wp-content/uploads/2020/11/24.jpg"
              alt="Façade du Centre Culturel du Chablais"
              className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/800x600?text=Image+non+disponible';
              }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-lg" />
          </div>
        </div>

        {/* Donation Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Bank Transfer Details */}
          <div className="bg-white p-8 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <svg className="w-16 h-16 text-primary-green" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M9 3v4M15 3v4" />
              </svg>
            </div>
            <h3 className="text-2xl font-amiri text-primary-green mb-6 text-center">Faire un don par virement bancaire</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Titulaire du compte:</p>
                <p>ASSOC. LES MUSULMANS DE THONON</p>
              </div>
              <div>
                <p className="font-semibold">Banque:</p>
                <p>CA DES SAVOIE - THONON CONCORDE</p>
              </div>
              <div>
                <p className="font-semibold">IBAN:</p>
                <p className="font-mono bg-gray-50 p-2 rounded">FR76 1810 6000 4896 7237 7517 275</p>
              </div>
              <div>
                <p className="font-semibold">BIC/SWIFT:</p>
                <p className="font-mono bg-gray-50 p-2 rounded">AGRIFRPP881</p>
              </div>
              <div>
                <p className="font-semibold">Adresse:</p>
                <p>2 AVENUE DE CHAMPAGNE<br />74200 THONON LES BAINS</p>
              </div>
            </div>
          </div>

          {/* Card Payment */}
          <div className="bg-white p-8 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <svg className="w-16 h-16 text-primary-green" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h.01M11 15h2M6 6h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-amiri text-primary-green mb-6 text-center">Faire un don par carte bancaire</h3>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-gray-600 mb-4 text-center">
                Cliquez sur le bouton ci-dessous pour faire un don sécurisé par carte bancaire
              </p>
              <a
                href="https://sumup.link/amt-thonon"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-green text-white px-6 py-3 rounded-lg hover:bg-secondary-green transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Faire un don avec carte bancaire
              </a>
            </div>
          </div>
        </div>

        {/* Project Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project?.features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <p className="text-lg text-gray-800">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}