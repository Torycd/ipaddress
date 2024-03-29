import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { fetchRequest } from "./hooks/useHttp.js";

const Map = () => {
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lat, setLat] = useState("")

  useEffect(() => {
    const handleLocation = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const currentLocation = [
          position.coords.latitude,
          position.coords.longitude,
        ];

        setLocation(currentLocation);
      } catch (error) {
        const defaultLocation = [9.05294804288, 7.507094031];
        setLocation(defaultLocation);
      } finally {
        setLoading(false);
      }
    };

    handleLocation();
  }, []);

  useEffect(() => {

    fetchRequest()
      .then(data => setLat(data.location))
      .catch(() => setLat(null));

  }, []);
  console.log(lat)
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
