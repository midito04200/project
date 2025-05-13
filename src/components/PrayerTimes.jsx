export default function PrayerTimes() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">
          HORAIRES DES PRIÈRES (15°)
        </h2>
      </div>

      <div className="w-full h-[600px] rounded-lg overflow-hidden">
        <iframe
          title="Mawaqit Prayer Times"
          src="https://mawaqit.net/fr/w/amt-mosquee-as-sahaba-thonon-les-bains-74200-france?showOnly5PrayerTimes=0"
          frameBorder="0"
          scrolling="no"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
