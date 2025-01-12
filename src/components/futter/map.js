import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Futter.module.css';

const Map = () => {
  // Координаты главного офиса Amazon в Сиэтле
  const position = [47.6205, -122.3493];

  // Иконка маркера (опционально)
  const amazonIcon = new L.Icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png', // Замените на URL вашей иконки
    iconSize: [60, 30], // Размер иконки
    iconAnchor: [19, 38], // Точка привязки иконки
  });

  return (
    <div className={styles.mapcontainer}>
      <MapContainer center={position} zoom={16} style={{ height: '300px', width: '600px'}}>
        <TileLayer
          attribution=''
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={amazonIcon}>
          <Popup>
            Главный офис Amazon
          </Popup>
        </Marker>
      </MapContainer> 
    </div>
  );
};

export default Map;