import React from "react";
import { connect } from "react-redux";

import Header from "./header";
import PlottedMap from "./map";
import SidebarRight from "./sidebar-right/sidebar-right";
import SidebarLeft from "./sidebar-left/sidebar-left";
import AddressModal from "../modals/address";
import { HEADER_TITLE } from "../constants/header";
import {selectors} from '../dux/huc';

function mapStateToProps(state) {
    return {
        displayUi: state.address.displayUi,
        hucName: selectors.getHucName(state)
    };
}

const Main = props => {
    return (
        <div className="main">
            <Header title={props.hucName || HEADER_TITLE}>
                <PlottedMap google={props.google} />
                <AddressModal />
            </Header>
        </div>
    );

    function renderUi() {
        if (props.displayUi) {
            return (
                <div>
                    <SidebarRight displayDescription={false} />
                    <SidebarLeft displayDescription={false}/>
                </div>
            );
        }
    }
};

export default connect(mapStateToProps)(Main);
