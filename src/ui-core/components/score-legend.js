import React from "react";
import {connect} from 'react-redux';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import LegendRow from "./legend-row";
import {
    SWIMMING_LAYER,
    FISH_LAYER
} from "../../constants_shared/layers";
import {
    SWIM_LEGEND_HIGH,
    SWIM_LEGEND_HIGH_SCORE,
    SWIM_LEGEND_MEDIUM,
    SWIM_LEGEND_MEDIUM_SCORE,
    SWIM_LEGEND_LOW,
    SWIM_LEGEND_LOW_SCORE,
    SWIM_LEGEND_TITLE,
    FISH_LEGEND_TITLE,
    DRINKING_LEGEND_TITLE,
    DRINKING_LEGEND_SAFE,
    DRINKING_LEGEND_SAFE_SCORE,
    DRINKING_LEGEND_POLLUTED,
    DRINKING_LEGEND_POLLUTED_SCORE,
    DRINKING_LEGEND_EXTREME,
    DRINKING_LEGEND_EXTREME_SCORE
} from "../constants/legend";

import "./header.css";

function mapStateToProps(state) {
    return {
        selectedLayer: state.layer.selectedLayer
    }
}

const ScoreLegend = props => {
    const ranks = SetLegend(props.selectedLayer);
    return (
        <Card className="legend">
            <CardHeader className="title" title={ranks.Title} />
            <CardContent>
                <LegendRow
                    ranking={ranks.High.Ranking}
                    score={ranks.High.Score}
                    icon={ranks.High.icon}
                />
                <LegendRow
                    ranking={ranks.Med.Ranking}
                    score={ranks.Med.Score}
                    icon={ranks.Med.icon}
                />
                <LegendRow
                    ranking={ranks.Low.Ranking}
                    score={ranks.Low.Score}
                    icon={ranks.Low.icon}
                />
            </CardContent>
        </Card>
    );
};

const SetLegend = layer => {
    switch (layer) {
        case SWIMMING_LAYER:
            return {
                Title: SWIM_LEGEND_TITLE,
                High: {
                    Ranking: SWIM_LEGEND_HIGH,
                    Score: SWIM_LEGEND_HIGH_SCORE,
                    icon: "/images/high.png"
                },
                Med: {
                    Ranking: SWIM_LEGEND_MEDIUM,
                    Score: SWIM_LEGEND_MEDIUM_SCORE,
                    icon: "/images/med.png"
                },
                Low: {
                    Ranking: SWIM_LEGEND_LOW,
                    Score: SWIM_LEGEND_LOW_SCORE,
                    icon: "/images/low.png"
                }
            };
        case FISH_LAYER:
            return {
                Title: FISH_LEGEND_TITLE,
                High: {
                    Ranking: SWIM_LEGEND_HIGH,
                    Score: SWIM_LEGEND_HIGH_SCORE,
                    icon: "/images/low.png"
                },
                Med: {
                    Ranking: SWIM_LEGEND_MEDIUM,
                    Score: SWIM_LEGEND_MEDIUM_SCORE,
                    icon: "/images/med.png"
                },
                Low: {
                    Ranking: SWIM_LEGEND_LOW,
                    Score: SWIM_LEGEND_LOW_SCORE,
                    icon: "/images/high.png"
                }
            };
        default: {
            return {
                Title: DRINKING_LEGEND_TITLE,
                High: {
                    Ranking: DRINKING_LEGEND_SAFE,
                    Score: DRINKING_LEGEND_SAFE_SCORE,
                    icon: "/images/low.png"
                },
                Med: {
                    Ranking: DRINKING_LEGEND_POLLUTED,
                    Score: DRINKING_LEGEND_POLLUTED_SCORE,
                    icon: "/images/med.png"
                },
                Low: {
                    Ranking: DRINKING_LEGEND_EXTREME,
                    Score: DRINKING_LEGEND_EXTREME_SCORE,
                    icon: "/images/high.png"
                }
            };
        }
    }
};

export default connect(mapStateToProps)(ScoreLegend);
