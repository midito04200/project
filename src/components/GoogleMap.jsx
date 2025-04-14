import { useEffect, useRef } from "react";

const GoogleMap = ({ lat, lng, zoom = 14 }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initializeMap = () => {
      new window.google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom,
      });
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AlzaSyBGarT49cDBO3-l1gu9ALEtLqO21LWmYE`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    } else {
      initializeMap();
    }
  }, [lat, lng, zoom]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "400px",
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    />
  );
};

export default GoogleMap;
