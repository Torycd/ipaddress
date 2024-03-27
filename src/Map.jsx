import  { useEffect } from 'react';
import L from 'leaflet';

const Map = () => {
    useEffect(() => {
        let map = null;

        if (!map) {
            map = L.map('map').setView([51.505, -0.09], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
        }

        return () => {
            map.remove(); // Clean up the map when the component unmounts
        };
    }, []);

    return <div id="map" className="w-full h-200px"></div>;
}

export default Map;
