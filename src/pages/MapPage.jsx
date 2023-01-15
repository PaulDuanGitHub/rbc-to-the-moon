import React, { Component } from "react";
import { LoadScript } from "@react-google-maps/api";
import Map from "./Map";
import "./MapPage.css"
import QRComponment from "./QRComponenet";

const lib = ["places"];
const key = "AIzaSyDCUeHmdhNRj91M3se2_bHb8CfGVujoyD0";
class MapPage extends React.Component {
    render() {
        return (
            <div>
                <div className="map-page-title">
                    Find a Banking Institution Near Me
                </div>
                <div className="map-page-des">
                    Make an appointment at your nearest RBC branch to learn more about banking, investing, borrowing, credit card services and more.
                </div>
                <LoadScript googleMapsApiKey={key} libraries={lib}>
                    <Map />
                </LoadScript>
                {/* <QRComponment></QRComponment> */}
            </div>
        );
    }
}

export default MapPage