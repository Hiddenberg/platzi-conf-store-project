import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MAPS_API_KEY = import.meta.env.VITE_MAPS_API_KEY;

export default function Map() {
   const mapStyles = {
      height: "50vh",
      width: "100%"
   };
   const defaultCenter = {
      lat: 19.316759486792016,
      lng: -99.0730563834439
   };

   return (
      <LoadScript googleMapsApiKey={MAPS_API_KEY} >
         <GoogleMap zoom={10} mapContainerStyle={mapStyles} center={defaultCenter}>
            <Marker position={defaultCenter} />
         </GoogleMap>
      </LoadScript>
   );
}