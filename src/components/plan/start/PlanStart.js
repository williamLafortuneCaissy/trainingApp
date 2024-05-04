import React, { useEffect, useRef, useState } from "react";
import { Card, Col, ProgressBar, Row } from "react-bootstrap";
import { Switch, Route, useRouteMatch, Redirect, Prompt, useParams } from 'react-router-dom';
import fakedata from '../../../data/dataPlan'
import Header from "../../_global/header";
import Set from "./Set";
import { Link } from 'react-router-dom';

// ===========================================================
// This Manages which set to be displayed
// ===========================================================
const PlanStart = () => {
    const layoutRef = useRef(null); // used to resetFocus on exercise switch

    // Get data based on the planId in the url
    let { planId } = useParams(); //get url id of the plan  in the url

    const storage = JSON.parse(localStorage.getItem("plans"))
    const data = storage.find(x => x.id == planId);

    const [activeSet, setActiveSet] = useState(1)
    const nextSet = () => setActiveSet(activeSet + 1)
    const previousSet = () => setActiveSet(activeSet - 1)

    const nbSets = data.sets.length || null;

    const getProgress = () => {

        let progress = null
        if (activeSet === 1) {
            progress = 0
        } else {
            progress = (activeSet - 1) / nbSets * 100;
        }

        return progress

    }

    const promptMessage = () => {
        if (activeSet === 1 || activeSet >= nbSets) {
            return true;
        } else {
            return 'Are you sure you want to leave?';
        }
    }

    // reset :focus when we change sets
    useEffect(() => {
        layoutRef.current.focus();
    }, [activeSet])

    return (
        <>
            <div ref={layoutRef} className="layout" tabIndex="-1">
                <Prompt when={true} message={promptMessage} />
                <Header title={data.title} backHref={'/plan'} />
                <main className="layout-main container d-flex flex-column">
                    {!nbSets ?
                        <p class="text-center">This plan has no exercises</p>
                        :
                        activeSet <= nbSets ?
                            <Set data={data.sets[activeSet - 1]} nextSet={nextSet} lastSet={activeSet === nbSets} />
                            :
                            <Card body className="text-center">
                                <div className="h1 mb-3">Good job !</div>
                                <Link to="/plan" className="btn btn-block btn-primary">Back to list</Link>
                            </Card>

                    }
                </main>

                {nbSets &&
                    <footer className="layout-footer bg-white text-primary">
                        <div className="container">
                            <div className="px-3 pt-3">
                                <ProgressBar now={getProgress()} />
                            </div>
                            <div className="d-flex">
                                {activeSet > 1 &&
                                    <div className="p-2">
                                        <button className="p-2" onClick={previousSet}>
                                            <i className="mdi mdi-chevron-left"></i>
                                            <span>Previous Set</span>
                                        </button>
                                    </div>
                                }
                                {activeSet <= nbSets &&
                                    <div className="p-2 ml-auto">
                                        <button className="p-2" onClick={nextSet}>
                                            {activeSet < nbSets ?
                                                <span>Next Set</span>
                                                :
                                                <span>Done</span>
                                            }
                                            <i className="mdi mdi-chevron-right"></i>
                                        </button>
                                    </div>
                                }
                            </div>
                        </div>
                    </footer>
                }
            </div>
        </>
    )
}

export default PlanStart;