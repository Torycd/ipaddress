export async function fetchRequest() {
  const Response = await fetch(
    "https://geo.ipify.org/api/v2/country?apiKey=at_K17fN7GAmlyTrbnxTGKX480U9xxV0&ipAddress=8.8.8.8"
  );
  const data = Response.json();
  const location  = data.location
  const ipAddress = data.ip
  // const timeZone = data.time_zone.offset
  const cityLocation = data.city
  const postalCode = data.zipcode
  const countryLocation = data.city
  const lat = data.latitude
  const lng = data.longitude
  const isp = data.isp

  return { location, ipAddress, cityLocation, postalCode, countryLocation, lat, lng, isp  };
}
