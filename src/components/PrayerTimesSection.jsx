import DonationSlider from './DonationSlider';

export default function PrayerTimesSection() {
  return (
    <div id="horaires" className="relative py-20 overflow-hidden">
      <DonationSlider opacity={0.85} />
      <div className="relative z-10">
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
    </div>
  );
}