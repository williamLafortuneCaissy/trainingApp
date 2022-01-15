import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, Form, ListGroup, Row } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import Header from '../../_global/header';
import fakedata from '../../../data/dataPlan'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlanList = () => {

    const { url } = useRouteMatch();

    // set default data so we dont have to create a plan everytime
    if (!localStorage.getItem("plans")) {
        localStorage.setItem("plans", JSON.stringify(fakedata))
    }
    const [plans, setPlans] = useState(JSON.parse(localStorage.getItem("plans")) || []);

    function handleDelete(planId) {
        setPlans(prevPlan => prevPlan.filter(plan => plan.id != planId))
    }

    useEffect(() => {
        localStorage.setItem("plans", JSON.stringify(plans))
    }, [plans]);

    return (
        <div className="layout">
            <Header title={'Plans'} next="Create" nextHref={url + "/create"} />
            <main className="layout-main container">
                <ListGroup>
                    {plans.map((plan, key) => (
                        <ListGroup.Item key={key} className="bg-light">
                            <Form.Row>
                                <Col xs="auto" className="align-self-center flex-grow-1"><h2 className="h5">{plan.title}</h2></Col>
                                <Col xs="auto">
                                    <Link to={url + '/' + plan.id} className="btn btn-block btn-primary">Start</Link>
                                </Col>
                                <Col xs="auto">
                                    {/* <Link to={url + '/' + plan.id + '/view'} className="btn btn-block btn-link">View</Link> */}
                                    <Dropdown>
                                        <Dropdown.Toggle variant="link" className="no-caret">
                                            <FontAwesomeIcon icon={faEllipsisV} />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item as={Link} to={url + '/' + plan.id + '/view'}>View</Dropdown.Item>
                                            {/* <Dropdown.Divider /> */}
                                            {/* <Dropdown.Item href="#/action-3">Edit</Dropdown.Item> */}
                                            <Dropdown.Divider />
                                            <Dropdown.Item onClick={() => handleDelete(plan.id)}>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
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