import React from 'react';

export default function Donation() {
  const qrCodeUrl = "https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=https%3A%2F%2Fsumup.link%2Famt-thonon";

  return (
    <div id="faire-un-don" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Faire un don</h2>
          <p className="text-xl text-gray-600">Soutenez notre association et contribuez à notre project pour construire le Centre Culturel du chablais</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Cotizup Section */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6 text-primary-green">Par Cotizup</h2>
            <iframe
              src="https://www.cotizup.com/nouvelle-mosquee-thonon"
              title="Cotizup - Nouvelle Mosquée Thonon"
              width="100%"
              height="600"
              className="rounded-lg border-2 border-primary-green/20"
              allow="payment *"
            ></iframe>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-8 text-primary-green">Par carte bancaire</h2>

            <div className="space-y-8">
              <p className="text-xl">
                Scannez le QR code ci-dessous pour faire<br />
                un don sécurisé par carte bancaire via SumUp
              </p>

              <div className="flex justify-center">
                <div className="p-4 bg-white rounded-lg shadow-md border-2 border-primary-green/20">
                  <img
                    src={qrCodeUrl}
                    alt="QR Code SumUp"
                    className="w-64 h-64"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <a
                  href="https://sumup.link/amt-thonon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-green text-white px-8 py-3 rounded-lg hover:bg-secondary-green transition-colors duration-300"
                >
                  Faire un don avec SumUp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}