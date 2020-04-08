import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

import LocationDetails from '../location-details/location-details.comp';
import { MapWrapper } from './map.styled';

const Map = () => {
  const [center, setCenter] = useState({ lat: 6.5483768, lng: 3.0037971 });
  const [zoom, setZoom] = useState(11);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        setCenter({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
        setZoom(12);
      });
    }
  };

  return (
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationDetails
          lat={center.lat}
          lng={center.lng}
          text='My Marker'
          findMe={getLocation}
        />
      </GoogleMapReact>
    </MapWrapper>
  );
};

Map.defaultProps = {
  distanceToMouse: function distanceToMouse(pt, mousePos) {
    console.log('pt', pt);
    console.log('mousePos', mousePos);
    return Math.sqrt(
      (pt.x - mousePos.x) * (pt.x - mousePos.x) +
        (pt.y - mousePos.y) * (pt.y - mousePos.y)
    );
  }
};

export default Map;
