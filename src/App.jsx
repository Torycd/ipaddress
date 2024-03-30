import  { useState, useEffect } from "react";
import Ip from "./Ip";
import Map from "./Map";

function App() {
  const [location, setLocation] = useState([]);

  // Fetch user's current location
  useEffect(() => {
    const fetchLocation = async () => {
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
        console.error("Error fetching location:", error);
        // Set default location if geolocation fails
        setLocation([9.05294804288, 7.507094031]);
      }
    };

    fetchLocation();
  }, []);

  return (
    <div className="h-auto">
      <Ip setLocation={setLocation} />
      <Map key={location.join(',')} location={location} />
    </div>
  );
}

export default App;
