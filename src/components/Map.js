import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { config } from './../config';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map(ev => {
    return ev.categories[0].id === 8
      ? <LocationMarker 
        onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        key={ev.id}  
        lat={ev.geometries[0].coordinates[1]} 
        lng={ev.geometries[0].coordinates[0]} 
        />
      : null;
  })

  return (
    <div className="map">
      <GoogleMapReact
          bootstrapURLKeys={{ key: `${config.apiKey}` }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 39.550053,
    lng: -105.782066
  },
  zoom: 5
}

export default Map;
