import React from 'react';

export default function Donation() {
  const qrCodeUrl =
    'https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=https%3A%2F%2Fsumup.link%2Famt-thonon';

  return (
    <section id="donations" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 font-montserrat">
      <div className="bg-[#2D6A4F] rounded-2xl overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-8 py-12">
          {/* Left: Icon + Title */}
          <div className="flex-1 text-center md:text-left text-white">
            <div className="flex justify-center md:justify-start mb-4">
              <svg className="w-14 h-14 text-[#95D5B2]" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 7h16v2H4z" fill="currentColor" opacity="0.08" />
                <path d="M12 2l7 5v5a7 7 0 01-14 0V7l7-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3 className="text-2xl md:text-3xl font-amiri font-bold text-white mb-6">
              Par virement bancaire
            </h3>

            <div className="space-y-6 text-white/95 text-base md:text-lg">
              <div>
                <div className="text-sm uppercase font-semibold tracking-wide">Titulaire du compte</div>
                <div className="mt-1 font-medium">ASSOC. LES MUSULMANS DE THONON</div>
              </div>

              <div>
                <div className="text-sm uppercase font-semibold tracking-wide">Banque</div>
                <div className="mt-1 font-medium">CA DES SAVOIE - THONON CONCORDE</div>
              </div>

              <div>
                <div className="text-sm uppercase font-semibold tracking-wide">IBAN</div>
                <div className="mt-1 font-medium">FR76 1810 6000 4896 7237 7517 275</div>
              </div>

              <div>
                <div className="text-sm uppercase font-semibold tracking-wide">BIC / SWIFT</div>
                <div className="mt-1 font-medium">AGRIFRPP881</div>
              </div>

              <div>
                <div className="text-sm uppercase font-semibold tracking-wide">Adresse</div>
                <div className="mt-1 font-medium">
                  2 AVENUE DE CHAMPAGNE<br />
                  74200 THONON LES BAINS
                </div>
              </div>
            </div>
          </div>

          
          
        </div>
      </div>
    </section>
  );
}