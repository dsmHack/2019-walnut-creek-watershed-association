import React, {Component} from "react"
import { Map, Marker, Polygon } from 'google-maps-react';

class PlottedMap extends Component {
    constructor(props) {
        super();
        this.markers = []
        this.shouldCreateMarkers = true;
    }

    createMarkers() {
        if(this.props.dataPointsToPlot !== undefined && this.props.dataPointsToPlot !== []){
            for(var dataPoint of this.props.dataPointsToPlot){
                this.markers.push(this.createMarker(dataPoint));
            };
            if(this.markers.length > 0){

            }
        }
        
    }

    createMarker(point) {
        console.log("Point", point);
        const actualPoint = point[1];
        let url = "/images/low.png";
        if(actualPoint.locId === "PCCB_WQX-977082"){
            url = "/images/med.png";
        }
        return <Marker
            key={actualPoint.locId}
            position={{ lat: actualPoint.lat, lng: actualPoint.long }}
            icon={{
                url: url,
                anchor: new window.google.maps.Point(24, 24),
                scaledSize: new window.google.maps.Size(48, 48)
            }}
        />
    }

    renderMarkers() {
        if(this.shouldCreateMarkers){
            this.createMarkers();
        }

        if(this.markers.length > 0 ){
            console.log("render Markers: ", this.markers);
            return this.markers
        }
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={13}
                initialCenter={{ lat: 41.583586, lng: -93.628419 }}>

                <Polygon
                    paths={this.props.coordinatesList}
                    strokeColor="#0000FF"
                    strokeOpacity={0.8}
                    strokeWeight={2}
                    fillColor="#0000FF"
                    fillOpacity={0.35} />

                {this.renderMarkers()}

            </Map>
        )
    }
}

export default PlottedMap;
