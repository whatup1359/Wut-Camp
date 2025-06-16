"use client";

import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import L from "leaflet";

const iconUrl =
  "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = L.icon({
  iconUrl: iconUrl,
  iconSize: [20, 30],
});

type Latlng = [number, number];
type LocationMarkerProps = {
  position: Latlng | null;
  setPosition: (position: Latlng) => void;
};

function LocationMarker({ position, setPosition }: LocationMarkerProps) {
  const map = useMapEvents({
    click(e) {
      const newLocation: Latlng = [e.latlng.lat, e.latlng.lng];
      setPosition(newLocation);
      map.flyTo(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={markerIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const MapLandmark = ({
  location,
}: {
  location?: { lat: number; lng: number };
}) => {
  const defaultLocation: Latlng = [13, 100];
  const [position, setPosition] = useState<Latlng | null>(null);
  console.log(position);
  return (
    <>
      <input type="hidden" name="lat" value={position ? position[0] : ""} />

      <input type="hidden" name="lng" value={position ? position[1] : ""} />

      {typeof window != "undefined" && (
        <MapContainer
          className="h-[30vh] rounded-lg z-0 relative"
          center={location || defaultLocation}
          zoom={7}
          scrollWheelZoom={true}
        >
          <Marker position={location || defaultLocation} icon={markerIcon}>
            <Popup>You are here</Popup>
          </Marker>
          <LocationMarker position={position} setPosition={setPosition} />

          <LayersControl>

            <LayersControl.BaseLayer name="Open Street Map" checked>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name="ESRI Imagery">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              />
            </LayersControl.BaseLayer>

          </LayersControl>
        </MapContainer>
      )}
    </>
  );
};
export default MapLandmark;
