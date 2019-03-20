import React from "react";
import { connect } from "react-redux";

import Header from "./header";
import PlottedMap from "./map";
import SidebarRight from "./sidebar-right";
import SidebarLeft from "./sidebar-left";
import AddressModal from "../modals/address";
import LayerSelection from "./layer-selection";
import { HEADER_TITLE } from "../constants/header";

function mapStateToProps(state) {
    return {
        displayUi: state.address.displayUi
    };
}

const Main = props => {
    return (
        <div className="main">
            <Header title={HEADER_TITLE} />
            <PlottedMap google={props.google} />
            {renderUi()}
            <AddressModal />
        </div>
    );

    function renderUi() {
        if (props.displayUi) {
            return (
                <div>
                    <LayerSelection />
                    <SidebarRight displayDescription={false} />
                    <SidebarLeft displayDescription={false}/>
                </div>
            );
        }
    }
};

export default connect(mapStateToProps)(Main);
