import {
    DRINKING_LAYER,
    FISH_LAYER,
    SWIMMING_LAYER
} from "../../constants_shared/layers";
import determineMarkerIcon from "../../ui-core/components/marker-score";

describe("Marker Score", () => {
    describe("fibi scores", () => {
        it("good score", () => {
            const goodScore = determineMarkerIcon(55, FISH_LAYER);
            expect(goodScore).toBe("/images/low.png");
        });

        it("lacking score", () => {
            const lackinScore = determineMarkerIcon(35, FISH_LAYER);
            expect(lackinScore).toBe("/images/med.png");
        });

        it("very low score", () => {
            const veryLowScore = determineMarkerIcon(5, FISH_LAYER);
            expect(veryLowScore).toBe("/images/high.png");
        });
    });

    describe("ecoli scores", () => {
        it("low score", () => {
            const lowScore = determineMarkerIcon(122, SWIMMING_LAYER);
            expect(lowScore).toBe("/images/low.png");
        });

        it("medium score", () => {
            const mediumScore = determineMarkerIcon(188, SWIMMING_LAYER);
            expect(mediumScore).toBe("/images/med.png");
        });

        it("high score", () => {
            const highScore = determineMarkerIcon(250, SWIMMING_LAYER);
            expect(highScore).toBe("/images/high.png");
        });
    });

    describe("nitrate scores", () => {
        it("safe score", () => {
            const safeScore = determineMarkerIcon(3, DRINKING_LAYER);
            expect(safeScore).toBe("/images/low.png");
        });

        it("medium score", () => {
            const pollutedScore = determineMarkerIcon(8, DRINKING_LAYER);
            expect(pollutedScore).toBe("/images/med.png");
        });

        it("high score", () => {
            const extremeScore = determineMarkerIcon(12, DRINKING_LAYER);
            expect(extremeScore).toBe("/images/high.png");
        });
    });
});
