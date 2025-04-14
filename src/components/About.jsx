export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* À propos Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <div className="flex-1 prose prose-lg">
          <h2 className="text-2xl font-amiri text-primary-green mb-4">
            Qui somme nous ?
          </h2>
          <p className="text-gray-600">
            L'Association Mosquée de Thonon est un lieu de culte et de rassemblement pour la communauté musulmane de Thonon-les-Bains, dédié à la prière, l'apprentissage et le partage. Depuis sa création, elle répond aux besoins spirituels et sociaux des fidèles en proposant des services variés : prières quotidiennes, école coranique, cours d'arabe, célébrations religieuses, et accompagnement spirituel.
          </p>
        </div>
        <div className="flex-1">
          <div className="bg-gray-200 w-full h-full rounded-lg flex items-center justify-center">
            <img
              src="/images/CCC-generated-Image01.webp"
              alt="À propos de l'Association Mosquée de Thonon"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Nos Services Section */}
      <div className="flex flex-col md:flex-row-reverse gap-8 mb-16">
        <div className="flex-1 prose prose-lg">
          <h3 className="text-2xl font-amiri text-secondary-green mb-4">
            Nos Activités
          </h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Prières quotidiennes dans un cadre serein</li>
            <li>Prière du vendredi avec sermon (Khoutba)</li>
            <li>École coranique pour enfants et adultes</li>
            <li>Cours de la langue arabe pour enfants</li>
            <li>Célébration des fêtes religieuses</li>
            <li>Opérations caritatives</li>
            <li>Distribution de repas pendant le mois sacré de Ramadan</li>
            <li>Services funéraires</li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="bg-gray-200 w-full h-full rounded-lg flex items-center justify-center">
            <img
              src="images/association01.webp"
              alt="Nos Activités"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Nos Objectifs Section */}
      <div className="bg-primary-green text-white py-16 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Decorative Icon */}
          <div className="flex justify-center mb-8">
            <svg className="w-16 h-16 text-white/20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
            </svg>
          </div>

          <h2 className="text-4xl font-bold text-center mb-16">Nos Objectifs</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Objectif 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#E6C86E]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Offrir un lieu de culte accueillant et accessible à tous les fidèles</h3>
            </div>

            {/* Objectif 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#E6C86E]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Dispenser des cours d'éducation religieuse pour enfants et adultes</h3>
            </div>

            {/* Objectif 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#E6C86E]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Organiser des événements culturels et sociaux</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Objectif 4 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#E6C86E]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Promouvoir le dialogue interreligieux et l'harmonie sociale</h3>
            </div>

            {/* Objectif 5 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#E6C86E]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Soutenir les actions caritatives et humanitaires</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}