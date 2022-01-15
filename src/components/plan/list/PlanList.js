import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import Header from '../../_global/header';
import fakedata from '../../../data/dataPlan'

const PlanList = () => {

    const { url } = useRouteMatch();

    // set default data so we dont have to create a plan everytime
    if (!localStorage.getItem("plans")) {
        localStorage.setItem("plans", JSON.stringify(fakedata))
    }
    const data = JSON.parse(localStorage.getItem("plans")) || []

    return (
        <div className="layout">
            <Header title={'Plans'} next="Create" nextHref={url + "/create"} />
            <main className="layout-main container">
                <ListGroup>
                    {data.map((plan, key) => (
                        <ListGroup.Item key={key} className="bg-light">
                            <Form.Row>
                                <Col xs="6" className="align-self-center"><h2 className="h5">{plan.title}</h2></Col>
                                <Col xs="3">
                                    <Link to={url + '/' + plan.id + '/view'} className="btn btn-block btn-outline-primary">View</Link>
                                </Col>
                                <Col xs="3">
                                    <Link to={url + '/' + plan.id} className="btn btn-block btn-primary">Start</Link>
                                </Col>
                            </Form.Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </main>
        </div>
    );
}

export default PlanList;