/**
 * PrayerTimesSection displays an embedded iframe with the prayer times for the mosque.
 * This component renders a styled section containing the Mawaqit prayer times widget.
 */
export default function PrayerTimesSection() {
  return (
    <section id="horaires" className="relative py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="w-full h-[600px]">
            <iframe
              title="Mawaqit Prayer Times"
              src="https://mawaqit.net/fr/w/amt-mosquee-as-sahaba-thonon-les-bains-74200-france?showOnly5PrayerTimes=0"
              style={{ border: 0, overflow: 'hidden' }}
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}