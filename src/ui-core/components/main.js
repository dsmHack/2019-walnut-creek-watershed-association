import React from "react";
import {connect} from 'react-redux';
import Header from "./header";
import PlottedMap from "./map";
import AddressModal from "./modals/address";
import { HEADER_TITLE } from "../constants/header";
import {selectors} from '../dux/huc';
import HelpStepper from './modals/help/help';

function mapStateToProps(state) {
    return {
        displayUi: state.appState.displayUi,
        hucName: selectors.getHucName(state)
    };
}

const Main = props => {
    return (
        <div className="main">
            <Header title={props.hucName || HEADER_TITLE}>
                <PlottedMap google={props.google} />
                <AddressModal />
                <HelpStepper />
            </Header>
        </div>
    );

    // function renderUi() {
    //     if (props.displayUi) {
    //         return (
    //             <div>
    //                 <SidebarRight displayDescription={false} />
    //                 <SidebarLeft displayDescription={false}/>
    //             </div>
    //         );
    //     }
    // }
};

export default connect(mapStateToProps)(Main);
