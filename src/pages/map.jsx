import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Component } from 'react';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

class Map extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyDCUeHmdhNRj91M3se2_bHb8CfGVujoyD0"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default Map