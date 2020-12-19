import React, { Fragment, useState }  from "react";
import { Button, Card, Col, Container, Fade, Modal, ProgressBar, Row } from "react-bootstrap";
import { Switch, Link, Route, useRouteMatch, Redirect, useParams, Prompt } from 'react-router-dom';
import data from '../data/dataSceance'
import Header from "./global/header";
import Refocus from "./global/refocus";
import PlanExercise from "./PlanExercise";

const PlanActive = () => {
    let { path } = useRouteMatch(); // returns baseUrl

    const promptMessage = (location, action) => {
        if (location.pathname.startsWith("/active")) {
            return true;
        } else {
            return 'Are you sure you want to go to leave?';
        }
    }

    return (
        <>
            <div className="vh-100 d-flex flex-column">
                {/* <Prompt when={true} message={'Are you sure you want to leave?'} /> */}
                <Prompt when={true} message={promptMessage}/>
                <Header title={data.title} backHref={'/'} />
                <Switch>
                    <Route path={path} exact>
                        {/* redirect /active to /active/0 */}
                        <Redirect to={`${path}/0`} />
                    </Route>
                    <Route path={`${path}/:setId`} exact>
                        <PlanExercise />
                    </Route>
                </Switch>

            </div>
        </>
    )
}

export default PlanActive;