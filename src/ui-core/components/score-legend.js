import React from "react";
import PropTypes from "prop-types";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import LegendRow from "./legend-row";
import {
    SWIMMING_LAYER,
    FISH_LAYER,
    DRINKING_LAYER
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

const ScoreLegend = props => {
    const { layer } = props;
    const ranks = SetLegend(layer);
    return (
        <Card className="legend">
            <CardHeader className="title" title={ranks.Title} />
            <CardContent>
                <LegendRow
                    ranking={ranks.High.Ranking}
                    score={ranks.High.Score}
                />
                <LegendRow
                    ranking={ranks.Med.Ranking}
                    score={ranks.Med.Score}
                />
                <LegendRow
                    ranking={ranks.Low.Ranking}
                    score={ranks.Low.Score}
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
                    Score: SWIM_LEGEND_HIGH_SCORE
                },
                Med: {
                    Ranking: SWIM_LEGEND_MEDIUM,
                    Score: SWIM_LEGEND_MEDIUM_SCORE
                },
                Low: {
                    Ranking: SWIM_LEGEND_LOW,
                    Score: SWIM_LEGEND_LOW_SCORE
                }
            };
        case FISH_LAYER:
            return {
                Title: FISH_LEGEND_TITLE,
                High: {
                    Ranking: SWIM_LEGEND_HIGH,
                    Score: SWIM_LEGEND_HIGH_SCORE
                },
                Med: {
                    Ranking: SWIM_LEGEND_MEDIUM,
                    Score: SWIM_LEGEND_MEDIUM_SCORE
                },
                Low: {
                    Ranking: SWIM_LEGEND_LOW,
                    Score: SWIM_LEGEND_LOW_SCORE
                }
            };
        case DRINKING_LAYER:
            return {
                Title: DRINKING_LEGEND_TITLE,
                High: {
                    Ranking: DRINKING_LEGEND_SAFE,
                    Score: DRINKING_LEGEND_SAFE_SCORE
                },
                Med: {
                    Ranking: DRINKING_LEGEND_POLLUTED,
                    Score: DRINKING_LEGEND_POLLUTED_SCORE
                },
                Low: {
                    Ranking: DRINKING_LEGEND_EXTREME,
                    Score: DRINKING_LEGEND_EXTREME_SCORE
                }
            };
    }
};

ScoreLegend.propTypes = {
    title: PropTypes.string.isRequired
};

export default ScoreLegend;
