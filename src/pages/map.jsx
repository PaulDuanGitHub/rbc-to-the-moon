/*global google*/
import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import "./Map.css"
import SearchIcon from "../img/search.png"
import { Button } from "react-bootstrap";

let markerArray = [];
class Map extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    state = {
        currentLocation: { lat: 0, lng: 0 },
        markers: [],
        bounds: null,
        map: null
    };

    search = (event) => {
        let map = this.state.map;

        if (this.myRef.current.value != "" && (event.key == "Enter" || event.type == "click")) {
            console.log(this.myRef.current.value);
            let request = {
                query: this.myRef.current.value,
                fields: ["name", "geometry"]
            };
            let service = new google.maps.places.PlacesService(map);

            service.findPlaceFromQuery(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                this.setState({currentLocation: {lat:results[0].geometry.location.lat(), lng:results[0].geometry.location.lng()}},()=>{
                    console.log("Search Location");
                    console.log(this.state.currentLocation);
                    this.search2();
                })
            }
            });
        }
    };
    search2= () => {
        let map = this.state.map;
        
        console.log("Search Location");
        console.log(this.state.currentLocation);
        let request2 = {
            location: this.state.currentLocation,
            radius: 8000,
            keyword: "RBC Royal Bank Branch"
        };
        let service = new google.maps.places.PlacesService(map);

        service.nearbySearch(request2, (results, status) => {
            console.log("nearby" + status);
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    let place = results[i].geometry.location;
                    console.log("nearby");
                    service.getDetails({ placeId: results[i].place_id }, (result, status) => {
                        if (status === google.maps.places.PlacesServiceStatus.OK) {
                            console.log(result.formatted_address);
                        }
                    })
                    markerArray.push(place);
                }
                this.setState({ markers: markerArray });
                // console.log(markerArray);
            }
        });

    };
    onMapLoad = map => {
        this.setState({map: map})
        navigator?.geolocation.getCurrentPosition(
            ({ coords: { latitude: lat, longitude: lng } }) => {
                const pos = { lat, lng };
                this.setState({ currentLocation: pos });
            }
        );
        google.maps.event.addListener(map, "bounds_changed", () => {
            console.log(map.getBounds());
            this.setState({ bounds: map.getBounds() });
        });
    };

    render() {
        return (
            <div>
                <div>
                    <input
                        className="map-page-sb"
                        id="searchbox"
                        type="text"
                        ref={this.myRef}
                        placeholder="Customized your placeholder"
                        // onClick={this.search}
                        onKeyDown={this.search}
                    />
                    <Button style={{backgroundImage: `url(${SearchIcon})`}} className="map-page-search-icon" onClick={this.search}></Button>
                </div>
                <div className="map-page-map">
                    <GoogleMap
                        center={this.state.currentLocation}
                        zoom={12}
                        onLoad={map => this.onMapLoad(map)}
                        mapContainerStyle={{ height: "468px", width: "744px" }}
                    >
                        {this.state.markers.map((mark, index) => (
                            <Marker key={index} position={mark} />
                        ))}
                    </GoogleMap>
                </div>
                
            </div>
        );
    }
}

export default Map;



