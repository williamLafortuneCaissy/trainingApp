import React, { useRef }  from "react";
import { Switch, Route, useRouteMatch, Redirect, Prompt } from 'react-router-dom';
import data from '../../../data/dataSceance'
import Header from "../../_global/header";
import Set from "./Set";

// ===========================================================
// This Magages which set to be displayed based on the url
// ===========================================================
const Plan = () => {
    let { path } = useRouteMatch(); // returns baseUrl
    const layoutRef = useRef(null); // used to resetFocus on exercise switch

    const promptMessage = (location) => {
        if (location.pathname.startsWith("/exercise")) {
            return true;
        } else {
            return 'Are you sure you want to go to leave?';
        }
    }

    const resetFocus = () => {
        layoutRef.current.focus();
    }

    return (
        <>
            <div ref={layoutRef} className="layout" tabIndex="-1">
                <Prompt when={true} message={promptMessage}/>
                <Header title={data.title} backHref={'/'} />
                <Switch>
                    <Route path={path} exact>
                        {/* redirect /active to /active/0 */}
                        <Redirect to={`${path}/0`} />
                    </Route>
                    <Route path={`${path}/:setId`} exact>
                        <Set layoutRef={layoutRef} resetFocus={resetFocus}/>
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default Plan;