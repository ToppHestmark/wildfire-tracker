import GoogleMapReact from 'google-map-react';
import { config } from './../config';
import LocationMarker from './LocationMarker';

const Map = ({ eventData, center, zoom }) => {
  const markers = eventData.map(ev => {
    return ev.categories[0].id === 8
      ? <LocationMarker key={ev.id} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
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
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 36.778259,
    lng: -119.417931
  },
  zoom: 5
}

export default Map;
