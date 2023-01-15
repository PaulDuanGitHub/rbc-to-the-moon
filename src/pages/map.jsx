/*global google*/
import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

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

        if (event.key == "Enter" && this.myRef.current.value != "") {
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
        } else if (event.type == "click" && this.myRef.current.value != "") {
            console.log(this.myRef.current.value);
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
                <div id="">
                    <input
                        id="searchbox"
                        type="text"
                        ref={this.myRef}
                        placeholder="Customized your placeholder"
                        onClick={this.search}
                        onKeyDown={this.search}
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `240px`,
                            height: `32px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                            position: "absolute",
                            left: "50%",
                            marginLeft: "-120px"
                        }}
                    />
                </div>
                <br />
                <div>
                    <GoogleMap
                        center={this.state.currentLocation}
                        zoom={12}
                        onLoad={map => this.onMapLoad(map)}
                        mapContainerStyle={{ height: "400px", width: "800px" }}
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



