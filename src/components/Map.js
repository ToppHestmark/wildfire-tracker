import GoogleMapReact from 'google-map-react';
import { config } from './../config';

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
          bootstrapURLKeys={{ key: `${config.apiKey}` }}
          defaultCenter={center}
          defaultZoom={zoom}
        />
    
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 36.778259,
    lng: -119.417931
  },
  zoom: 6
}

export default Map
