import React from "react";
import { Map, Marker, Polygon } from "google-maps-react";
import {SWIMMING_LAYER, DRINKING_LAYER, FISH_LAYER} from "../../constants_shared/layers";

import { connect } from "react-redux";

import "./map.css";

function mapStateToProps(state) {
    return {
        nitratePoints: state.dataPoints.nitratePoints,
        ecoliPoints: state.dataPoints.ecoliPoints,
        fibiPoints: state.dataPoints.fibiPoints,
        coordinatesList: state.huc.coords,
        selectedLayer: state.layer.selectedLayer
    };
}

const PlottedMap = props => {
    let markers = [];
    let shouldCreateMarkers = true;

    let dataPoints = [];

    function setDataPoints() {
        switch(props.selectedLayer){
            case SWIMMING_LAYER: {
                return props.ecoliPoints;
            }
            case DRINKING_LAYER: {
                return props.nitratePoints;
            }
            case FISH_LAYER: {
                return props.fibiPoints;
            }
            default: {
                return [];
            }
        }
    }

    function createMarkers() {
        dataPoints = setDataPoints();
        if (
            dataPoints !== undefined &&
            dataPoints !== []
        ) {
            markers = [];
            for (var dataPoint of dataPoints) {
                markers.push(createMarker(dataPoint));
            }
            if (markers.length > 0) {
            }
        }
    }

    function createMarker(point) {
        let url = "/images/low.png";
        return (
            <Marker
                key={point.locId}
                position={{ lat: point.lat, lng: point.long }}
                icon={{
                    url: url,
                    anchor: new window.google.maps.Point(24, 24),
                    scaledSize: new window.google.maps.Size(48, 48)
                }}
            />
        );
    }

    function renderMarkers() {
        if (shouldCreateMarkers) {
            createMarkers();
        }

        if (markers.length > 0) {
            return markers;
        }
    }

    return (
        <Map
            className="map"
            disableDefaultUI={true}
            google={props.google}
            zoom={13}
            initialCenter={{ lat: 41.583586, lng: -93.628419 }}
        >
            <Polygon
                paths={props.coordinatesList}
                strokeColor="#0000FF"
                strokeOpacity={0.8}
                strokeWeight={2}
                fillColor="#0000FF"
                fillOpacity={0.35}
            />

            {renderMarkers()}
        </Map>
    );
};

export default connect(mapStateToProps)(PlottedMap);
