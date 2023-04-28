"use client";

import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// leaflet is not exactly supported by react, it's an open source we need a little
// workaround to make it work

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl; // this error is a Typscript error, to fix it, add the comment "// @ts-ignore" above
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
});

interface MapProps {
    center?: number[]; // this numbers will be latitude and longitud
}

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const Map: React.FC<MapProps> = ({ center }) => {
    return (
        <MapContainer
            center={(center as L.LatLngExpression) || [51, -0.09]}
            zoom={center ? 4 : 2}
            scrollWheelZoom={false}
            className="h-[35vh] rounded-lg"
        >
            <TileLayer url={url} attribution={attribution} />
            {center && <Marker position={center as L.LatLngExpression} />}
        </MapContainer>
    );
};

export default Map;
