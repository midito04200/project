import PrayerTimes from './PrayerTimes';
import DonationSlider from './DonationSlider';

export default function PrayerTimesSection() {
  return (
    <div id="horaires" className="relative py-20 overflow-hidden">
      <DonationSlider opacity={0.85} />
      <div className="relative z-10">
        <PrayerTimes />
      </div>
    </div>
  );
}