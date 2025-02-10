import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression, Icon } from "leaflet";

export default function Map({
  adress,
  markerSrc,
  centerLatLng,
  vw,
}: {
  adress: string;
  markerSrc: string;
  centerLatLng: LatLngExpression;
  vw: number;
}) {
  const customIcon = new Icon({
    iconUrl: markerSrc,
    iconSize: [window.innerWidth * vw, window.innerWidth * vw],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <MapContainer
      center={centerLatLng}
      zoom={24}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={centerLatLng} icon={customIcon}>
        <Popup>{adress}</Popup>
      </Marker>
    </MapContainer>
  );
}
