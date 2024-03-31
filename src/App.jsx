import  { useState, useEffect } from "react";
import Ip from "./Ip";
import Map from "./Map";

function App() {
  const [location, setLocation] = useState([]);

  // Fetch user's current location based on load of web app because of empty dependencies
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // if its suceeds its callback resolve with data ,but with error its called back is reject 
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
        // Police headquaters in Abuja LoL
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
