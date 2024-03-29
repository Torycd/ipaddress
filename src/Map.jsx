import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
// import { fetchRequest } from "./hooks/useHttp.js";

const Map = () => {
  const [location, setLocation] = useState([]);
  useEffect(() => {
    async function handleLocation() {
      try {
        // const places = await fetchRequest();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = [
            position.coords.latitude,
            position.coords.longitude,
          ];

          setLocation(sortedPlaces);
        });
      } catch (error) {
        // ..
      }
    }
    console.log(location);

    // handleLocation();
  }, [location]);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
