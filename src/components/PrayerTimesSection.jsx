import DonationSlider from './DonationSlider';

export default function PrayerTimesSection() {
  return (
    <div id="horaires" className="relative py-20 overflow-hidden">
      <DonationSlider opacity={0.85} />
      <div className="relative z-10">
        <div className="w-full h-[600px] rounded-lg overflow-hidden">
          <iframe src="https://mawaqit.net/fr/w/thonon?showOnly5PrayerTimes=0" frameborder="0" scrolling="no" class="widget"></iframe>
        </div>
      </div>
    </div>
  );
}