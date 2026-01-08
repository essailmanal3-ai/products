import { useEffect, useState } from "react";

function Geo() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation not supported");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        });
      },
      (err) => {
        console.log("Error:", err.message);
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
  <div style={{ marginTop: 40, padding: 20, borderTop: "1px solid #ccc" }}>
    <h2>geolocalisation</h2>

    {position ? (
      <>
        <p><strong>Latitude:</strong> {position.lat}</p>
        <p><strong>Longitude:</strong> {position.lng}</p>
        <p><strong>Accuracy:</strong> {position.accuracy} meters</p>
        <p><strong>Live update:</strong> Yes</p>


        <div style={{ marginTop: 20 }}>
          <iframe
            title="map"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps?q=${position.lat},${position.lng}&z=15&output=embed`}
          ></iframe>
        </div>
      </>
    ) : (
      <p>Getting your location...</p>
    )}
  </div>
);

}

export default Geo;
