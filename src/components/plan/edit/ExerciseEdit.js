import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
// ==============================================
// this manages the form
// ==============================================
// @param {func} deleteExercise deletes this exercise
const ExerciseEdit = ({ removeExercise }) => {

    return (
        <>
            <Form.Group>
                <div className="d-flex align-items-start">
                    <Form.Label>Exercise</Form.Label>
                    <button type="button" className="ml-auto" onClick={removeExercise}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <Form.Control
                    name={'exercise'}
                    type="text"
                    placeholder="ex: Foward Fold"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    name={'description'}
                    type="text"
                    placeholder="ex: 1 per leg"
                />
            </Form.Group>
            <Row className="pb-2">
                <Form.Group as={Col} xs="6">
                    <Form.Label>Reps / Secs</Form.Label>
                    <Form.Row>
                        <Col xs="6">
                            <Form.Control
                                name={'rep'}
                                type="number"
                                placeholder="0"
                            />
                        </Col>
                        <Col xs="6">
                            <Form.Control
                                name={'nbsType'}
                                as="select"
                            >
                                <option key={'rep'} value="rep">Rep</option>
                                <option key={'sec'} value="sec">Sec</option>
                            </Form.Control>
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group as={Col} xs="6">
                    <Form.Label>Weight</Form.Label>
                    <Form.Row>
                        <Col xs="6">
                            <Form.Control
                                name={'weight'}
                                type="number"
                                placeholder="0"
                            />
                        </Col>
                        <Col xs="6" className="align-self-end">lbs</Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group as={Col} xs="6" className="mb-0">
                    <Form.Label>Break</Form.Label>
                    <Form.Row>
                        <Col xs="6">
                            <Form.Control
                                name={'break'}
                                type="number"
                                placeholder="0"
                            />
                        </Col>
                        <Col xs="6" className="align-self-end">sec</Col>
                    </Form.Row>
                </Form.Group>
            </Row>
            <hr />
        </>
    );
}

export default ExerciseEdit;