import React, { useEffect, useRef, useState }  from "react";
import { Col, ProgressBar, Row } from "react-bootstrap";
import { Switch, Route, useRouteMatch, Redirect, Prompt, useParams } from 'react-router-dom';
import fakedata from '../../../data/dataPlan'
import Header from "../../_global/header";
import Set from "./Set";

// ===========================================================
// This Manages which set to be displayed
// ===========================================================
const PlanStart = () => {
    const layoutRef = useRef(null); // used to resetFocus on exercise switch

    // Get data based on the planId in the url
    let { planId } = useParams(); //get url id of the plan  in the url
    planId = Number(planId); // useParams returns a string, we convert to number
    const data = fakedata.find(x => x.id === planId);

    const [activeSet, setActiveSet] = useState(1)
    const nextSet = () => setActiveSet(activeSet+1)
    const previousSet = () => setActiveSet(activeSet-1)

    const nbSets = data.sets.length;

    //  0 / 12
    const progress = activeSet / nbSets * 100;

    // TODO: Fix prompt message
    const promptMessage = (location) => {
        // if (location.pathname.startsWith("/plan")) {
        // } else {
        //     return 'Are you sure you want to leave?';
        // }
        return true;
    }

    const resetFocus = () => {
    }

    // reset :focus when we change sets
    useEffect(() => {
        layoutRef.current.focus();
    }, [activeSet])

    return (
        <>
            <div ref={layoutRef} className="layout" tabIndex="-1">
                <Prompt when={true} message={promptMessage}/>
                <Header title={data.title} backHref={'/plan'} />

                <Set data={data.sets[activeSet-1]} nextSet={nextSet} layoutRef={layoutRef} resetFocus={resetFocus}/>

                <footer className="layout-footer bg-white text-primary border-top">
                    <div className="px-3 pt-3">
                        <ProgressBar now={progress} />
                    </div>
                    <div className="d-flex justify-content-between">
                        {activeSet > 1 &&
                            <div className="p-2">
                                <button  className="p-2" onClick={previousSet}>
                                    <i className="mdi mdi-chevron-left"></i>
                                    <span>Previous Set</span>
                                </button>
                            </div>
                        }
                        {activeSet < nbSets &&
                            <div className="p-2">
                                <button  className="p-2" onClick={nextSet}>
                                    <span>Next Set</span>
                                    <i className="mdi mdi-chevron-right"></i>
                                </button>
                            </div>
                        }
                    </div>
                </footer>
            </div>
        </>
    )
}

export default PlanStart;