export default async function availableCarparks() {
  const currentTime = encodeURI(new Date().toISOString());
  const response = await fetch(
    "https://api.data.gov.sg/v1/transport/carpark-availability?date_time=" +
      currentTime
  );
  const data = await response.json();
  return data.items[0].carpark_data;
}
