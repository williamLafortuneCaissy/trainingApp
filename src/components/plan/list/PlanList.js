import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../_global/header';
import fakedata from '../../../data/dataPlan'

const PlanList = (props) => {

    const data = fakedata
    return (
        <>
            <Header title={'Plans'} backHref="/"/>
            <Container>
                <main>
                    <ListGroup>
                        {data.map((plan, key) => (
                            <ListGroup.Item key={key}>

                                <Form.Row>
                                    <Col xs="6" className="align-self-center"><h2 className="h5">{plan.title}</h2></Col>
                                    <Col xs="3">
                                        <Button variant="outline-primary" block>View</Button>
                                    </Col>
                                    <Col xs="3">
                                        <Button variant="primary" block>Start</Button>
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