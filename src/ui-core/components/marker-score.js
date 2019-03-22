import {
    DRINKING_LAYER,
    FISH_LAYER,
    SWIMMING_LAYER
} from "../../constants_shared/layers";

const FibiScores = {
    Good: 51,
    Lackin: 31,
    VeryLow: 0
};

const EcoliScores = {
    Low: 126,
    Medium: 234,
    High: 235
};

const NitrateScores = {
    Safe: 5,
    Polluted: 10,
    Extreme: 11
};

const highImage = "/images/high.png";
const medImage = "/images/med.png";
const lowImage = "/images/low.png";

export default function determineMarkerIcon(score, layer) {
    switch (layer) {
        case DRINKING_LAYER: {
            if (score <= NitrateScores.Safe) return lowImage;
            if (score <= NitrateScores.Polluted) return medImage;
            return highImage;
        }
        case SWIMMING_LAYER: {
            if (score <= EcoliScores.Low) return lowImage;
            if (score <= EcoliScores.Medium) return medImage;
            return highImage;
        }
        case FISH_LAYER: {
            if (score >= FibiScores.Good) return lowImage;
            if (score >= FibiScores.Lackin) return medImage;
            return highImage;
        }
        default: {
            throw new Error("Layer not set when creating markers!");
        }
    }
}
