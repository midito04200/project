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
            <h2 className="text-5xl font-amiri mb-4">{project?.title}</h2>
            <p className="text-xl max-w-2xl mx-auto">{project?.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Donation Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Bank Transfer Details */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-amiri text-primary-green mb-6">Faire un don par virement bancaire</h3>
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
                <p className="font-mono">FR76 1810 6000 4896 7237 7517 275</p>
              </div>
              <div>
                <p className="font-semibold">BIC/SWIFT:</p>
                <p className="font-mono">AGRIFRPP881</p>
              </div>
              <div>
                <p className="font-semibold">Adresse:</p>
                <p>2 AVENUE DE CHAMPAGNE<br />74200 THONON LES BAINS</p>
              </div>
            </div>
          </div>

          {/* SumUp Payment */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-amiri text-primary-green mb-6">Faire un don par carte bancaire</h3>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-gray-600 mb-4">
                Scannez le QR code ci-dessous pour faire un don sécurisé par carte bancaire via SumUp
              </p>
              <img
                src="/sumup-qr.png"
                alt="QR Code pour paiement SumUp"
                className="w-48 h-48 object-contain"
              />
              <a
                href="https://sumup.link/amt-thonon"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-green text-white px-6 py-3 rounded-lg hover:bg-secondary-green transition-colors duration-300"
              >
                Faire un don avec SumUp
              </a>
            </div>
          </div>
        </div>

        {/* Project Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project?.features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-800">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}