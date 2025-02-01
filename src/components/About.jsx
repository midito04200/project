export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* À propos */}
        <div className="prose prose-lg">
          <h2 className="text-2xl font-amiri text-primary-green mb-4">
            À propos de nous
          </h2>
          <p className="text-gray-600">
            L'Association Mosquée de Thonon est un lieu de culte et de rassemblement pour la communauté musulmane de Thonon-les-Bains, dédié à la prière, l'apprentissage et le partage. Depuis sa création, elle répond aux besoins spirituels et sociaux des fidèles en proposant des services variés : prières quotidiennes, école coranique, cours d'arabe, célébrations religieuses, et accompagnement spirituel. L'association s'engage à promouvoir les valeurs de paix, respect, et fraternité, tout en organisant des événements culturels et sociaux pour enrichir la vie communautaire. Elle encourage également le dialogue interreligieux et soutient des actions caritatives et humanitaires.
          </p>
        </div>

        {/* Nos Services */}
        <div className="prose prose-lg">
          <h3 className="text-2xl font-amiri text-secondary-green mb-4">Nos Activités</h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Prières quotidiennes dans un cadre serein</li>
            <li>Prière du vendredi avec sermon (Khoutba)</li>
            <li>École coranique pour enfants et adultes</li>
            <li>Cours d'arabe et d'éducation islamique</li>
            <li>Célébration des fêtes religieuses</li>
            <li>Accompagnement spirituel</li>
            <li>Services funéraires</li>
          </ul>
        </div>

        {/* Nos Objectifs */}
        <div className="prose prose-lg">
          <h3 className="text-2xl font-amiri text-secondary-green mb-4">Nos Contributions</h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Offrir un lieu de culte accueillant et accessible à tous les fidèles</li>
            <li>Dispenser des cours de la langue arabe pour enfants</li>
            <li>Organiser des événements culturels et sociaux</li>
            <li>Promouvoir le dialogue interreligieux et l'harmonie sociale</li>
            <li>Soutenir les actions caritatives et humanitaires</li>
          </ul>
        </div>
      </div>
    </div>
  )
}