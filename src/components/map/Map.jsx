import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";

function Map() {
  return (
    <MapContainer center={[28.1274016, -15.4471736]} zoom={13} className="map-container">
      <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[28.1274016, -15.4471736]}>
        <Popup>
          We're Here!
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map;