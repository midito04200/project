import React from 'react';

export default function NewMosqueProject() {
  const qrCodeUrl = "https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=https%3A%2F%2Fsumup.link%2Famt-thonon";

  return (
    <div className="py-20">
      {/* Header Section */}
      <div className="text-center mb-20">
        {/* Decorative Icon */}
        <div className="flex justify-center mb-8">
          <svg className="w-16 h-16 text-primary-green" viewBox="0 0 24 24" fill="currentColor">
            {/* SVG content */}
          </svg>
        </div>
      </div>

      {/* First Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-6">Un Espace Adapté aux Besoins Croissants</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Avec le développement démographique de Thonon-Les-Bains et du Chablais dans son ensemble, la nécessité d'un espace plus adapté aux besoins des fidèles devient une évidence. Les locaux actuels, malgré plusieurs ajustements, ne suffisent plus à accueillir les nombreux pratiquants, notamment lors des prières du vendredi et du mois de Ramadan. Face à cet afflux croissant, nous devons aujourd'hui repenser notre lieu de culte pour offrir un cadre plus spacieux, fonctionnel et accueillant.
            </p>
          </div>
          <div className="flex-1">
            <div className="bg-gray-200 w-full aspect-4/3 rounded-lg flex items-center justify-center">
              <img
                src="/images/eskizze.webp"
                alt="Centre Culturel du Chablais"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Second Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-6">Un Centre de Savoir et de Transmission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ce projet ne se limite pas à un simple lieu de prière. Il ambitionne de créer un véritable centre de vie et de transmission du savoir, où chacun pourra approfondir sa connaissance de l'Islam, apprendre la langue arabe, et se former aux valeurs essentielles de la spiritualité et du vivre-ensemble.
            </p>
          </div>
          <div className="flex-1">
            <div className="bg-gray-200 w-full aspect-4/3 rounded-lg flex items-center justify-center">
              <img
                src="/images/unlieudesavoir.webp"
                alt="Un Lieu de Savoir"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-6">Un Lieu de Foi, de Partage et de Dialogue</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Le centre culturel sera un espace de sérénité et d'échange, où la foi se conjugue avec l'éducation et la convivialité. En plus des prières quotidiennes, il accueillera des conférences, des rencontres culturelles et des moments de partage, favorisant ainsi le dialogue et l'unité au sein de la communauté.
            </p>
          </div>
          <div className="flex-1">
            <div className="bg-gray-200 w-full aspect-4/3 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Image à venir</span>
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Surface */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-primary-green" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm0-4h2v2h-2zm-4 8h2v2H9zm0-8h2v2H9zm10-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Surface totale</h4>
              <p className="text-5xl font-bold mb-2">2000</p>
              <p className="text-xl">m²</p>
            </div>

            {/* Capacity */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-primary-green" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Capacité d'accueil</h4>
              <p className="text-5xl font-bold mb-2">2000</p>
              <p className="text-xl">personnes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}