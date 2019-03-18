import React from "react";
import { Map, Marker, Polygon } from "google-maps-react";

import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        dataPointsToPlot: state.dataPoints.nitratePoints,
        coordinatesList: state.huc.coords
    };
}

const PlottedMap = props => {
    let markers = [];
    let shouldCreateMarkers = true;
    function createMarkers() {
        if (
            props.dataPointsToPlot !== undefined &&
            props.dataPointsToPlot !== []
        ) {
            for (var dataPoint of props.dataPointsToPlot) {
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
