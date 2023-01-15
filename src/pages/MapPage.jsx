import React, { Component } from "react";
import { LoadScript } from "@react-google-maps/api";
import Map from "./Map";

const lib = ["places"];
const key = "AIzaSyDCUeHmdhNRj91M3se2_bHb8CfGVujoyD0";
class MapPage extends React.Component {
  render() {
    return (
      <LoadScript googleMapsApiKey={key} libraries={lib}>
        <Map />
      </LoadScript>
    );
  }
}

export default MapPage