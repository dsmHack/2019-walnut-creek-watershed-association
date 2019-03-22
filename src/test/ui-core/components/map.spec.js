import React from "react";

import PlottedMap from "../../../ui-core/components/map";

describe("Plotted Map", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<PlottedMap.WrappedComponent />);
    });

    it("should contain a map", () => {
        expect(wrapper.find("Map").length).toBe(1);
    });

    it("should contain a polygon to draw the huc", () => {
        expect(wrapper.find("Polygon").length).toBe(1);
    });
});
