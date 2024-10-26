import React, { useEffect, useRef } from "react";
import L from "leaflet"; // Importing leaflet library
import "leaflet/dist/leaflet.css"; // Importing leaflet CSS

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current).setView([51.505, -0.09], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([51.5, -0.09])
      .addTo(map)
      // .bindPopup("A pretty CSS popup.<br> Easily customizable.")
      // .openPopup();

    
    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} className=" h-96 z-0" ></div>;
};

export default Map;
