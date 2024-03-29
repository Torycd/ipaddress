export async function fetchRequest() {
  const response = await fetch(
    "https://geo.ipify.org/api/v2/country?apiKey=at_K17fN7GAmlyTrbnxTGKX480U9xxV0&ipAddress=8.8.8.8"
  );
  const data = response.json();
  // const location  = data.location
  // const ipAddress = data.ip
  // const timeZone = data.time_zone.offset
  // const cityLocation = data.city
  // const postalCode = data.zipcode
  // const countryLocation = data.city
  // const lat = data.latitude
  // const lng = data.longitude
  // const isp = data.isp

  return { location: data.location };
}
