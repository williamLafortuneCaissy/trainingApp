import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import Header from '../../_global/header';
import fakedata from '../../../data/dataPlan'

const PlanList = () => {

    const { url } = useRouteMatch();

    const data = fakedata
    return (
        <>
            <Header title={'Plans'} next="Create" nextHref={url+"/create"} />
            <Container>
                <main>
                    <ListGroup>
                        {data.map((plan, key) => (
                            <ListGroup.Item key={key}>
                                <Form.Row>
                                    <Col xs="6" className="align-self-center"><h2 className="h5">{plan.title}</h2></Col>
                                    <Col xs="3">
                                        <Link to={url+'/'+plan.id+'/view'} className="btn btn-block btn-outline-primary">View</Link>
                                    </Col>
                                    <Col xs="3">
                                        <Link to={url+'/'+plan.id} className="btn btn-block btn-primary">Start</Link>
                                    </Col>
                                </Form.Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </main>
            </Container>
        </>
    );
}

export default PlanList;