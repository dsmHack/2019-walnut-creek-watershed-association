import React, {Component} from "react"
import { Map, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react';

class PlottedMap extends Component {
    constructor(props) {
        super();
        this.state = {
            dataPointsToPlot: props.dataPointsToPlot,
            coordinatesList: []
        };
    }

    setCoordinatesList(coordinatesList) {
        this.setState({
            coordinatesList
        });
    }

    createMarkers() {
        if(this.state.dataPointsToPlot != undefined){
            this.state.dataPointsToPlot.forEach(dataPoint => {
                return this.createMarker(dataPoint);
            });
        }
        
    }

    createMarker(point) {
        return <Marker
            position={{ lat: point.lat, lng: point.lng }}
            icon={{
                url: "/images/low.png",
                anchor: new window.google.maps.Point(24, 24),
                scaledSize: new window.google.maps.Size(48, 48)
            }}
        />
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={17}
                initialCenter={{ lat: 41.583586, lng: -93.628419 }}>

                <Polygon
                    paths={this.state.coordinatesList}
                    strokeColor="#0000FF"
                    strokeOpacity={0.8}
                    strokeWeight={2}
                    fillColor="#0000FF"
                    fillOpacity={0.35} />

                {this.createMarkers()}

            </Map>
        )
    }
}

export default PlottedMap;