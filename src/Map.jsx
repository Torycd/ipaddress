import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

const Map = () => {
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLocation = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const currentLocation = [
          position.coords.latitude, 
          position.coords.longitude
        ];

        setLocation(currentLocation);
      } catch (error) {
        // handle error
      } finally {
        setLoading(false);  
      }
    };

    handleLocation();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MapContainer center={location} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={location}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  );
};

export default Map;
