import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Map = ({ location }) => {
  const [loading, setLoading] = useState(true);
  const [mapLocation, setMapLocation] = useState([]);

  // Update map location when the location prop changes
  useEffect(() => {
    if (location) {
      setMapLocation(location);
    }
  }, [location]);

  // Update loading state when map location is set
  useEffect(() => {
    if (mapLocation.length > 0) {
      setLoading(false);
    }
  }, [mapLocation]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MapContainer center={mapLocation} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={mapLocation}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  );
};

Map.propTypes = {
  location: PropTypes.array,
};

export default Map;
