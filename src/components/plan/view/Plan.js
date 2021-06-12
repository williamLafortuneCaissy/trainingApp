import React, { useRef }  from "react";
import { Switch, Route, useRouteMatch, Redirect, Prompt, useParams } from 'react-router-dom';
import fakedata from '../../../data/dataPlan'
import Header from "../../_global/header";
import Set from "./Set";

// ===========================================================
// This Manages which set to be displayed based on the url
// ===========================================================
const Plan = () => {
    // TODO: Research routeMatch and make it work?
    // TODO: Check why we used param instead of state to switch between sets
    // let { path } = useRouteMatch(); // returns baseUrl
    const layoutRef = useRef(null); // used to resetFocus on exercise switch

    let { planId } = useParams(); //get url id base on parent :planId
    planId = Number(planId); // useParams returns a string, we convert to number
    const data = fakedata.find(x => x.id === planId);
    // console.log(path)

    // TODO: Fix prompt message
    const promptMessage = (location) => {
        // if (location.pathname.startsWith("/plan")) {
        // } else {
        //     return 'Are you sure you want to leave?';
        // }
        return true;
    }

    const resetFocus = () => {
        layoutRef.current.focus();
    }

    return (
        <>
            <div ref={layoutRef} className="layout" tabIndex="-1">
                <Prompt when={true} message={promptMessage}/>
                <Header title={data.title} backHref={'/plan'} />
                Set
                {/* <Switch>
                    <Route path={path} exact>
                        //redirect /plan to /plan/0
                        <Redirect to={`${path}/0`} />
                    </Route>
                    <Route path={`${path}/:setId`} exact>
                        <Set layoutRef={layoutRef} resetFocus={resetFocus}/>
                    </Route>
                </Switch> */}
            </div>
        </>
    )
}

export default Plan;