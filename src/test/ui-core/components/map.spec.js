import React from "react";

import PlottedMap from "../../../ui-core/components/map";

describe("Plotted Map", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<PlottedMap />);
    });
    
    it("should render", () => {
        shallow(<PlottedMap />);
    })

    it("should contain a map", () => {
        console.log('wrapper', wrapper.debug());
        //There is an issue with mocking connected components in new
        //React redux versions (Connected, withStyles, etc);
        //These tests will need to be written when that is fixed
        //or by downgrading to a previous version
        //Reserach React Context API & Enzyme Context Testing
    })
}) 