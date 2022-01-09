import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
// ==============================================
// this manages the form
// ==============================================
// @param {func} deleteExercise deletes this exercise
const ExerciseEdit = ({ exercise, removeExercise, handleChange }) => {

    const inputNameSuffix = `.${exercise.setId}.${exercise.id}`

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
                    name={`title${inputNameSuffix}`}
                    type="text"
                    placeholder="ex: Foward Fold"
                    onChange={handleChange}
                    value={exercise.title}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    name={`description${inputNameSuffix}`}
                    type="text"
                    placeholder="ex: 1 per leg"
                    onChange={handleChange}
                    value={exercise.description}
                />
            </Form.Group>
            <Row className="pb-2">
                <Form.Group as={Col} xs="8">
                    <Form.Label>Reps / Secs</Form.Label>
                    <Form.Row>
                        <Col xs="6">
                            <Form.Control
                                name={`nbs${inputNameSuffix}`}
                                type="number"
                                min={0}
                                placeholder="-"
                                onChange={handleChange}
                                value={exercise.rep}
                            />
                        </Col>
                        <Col xs="6">
                            <Form.Control
                                name={`nbsType${inputNameSuffix}`}
                                as="select"
                                onChange={handleChange}
                                value={exercise.nbsType}
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
                                name={`weight${inputNameSuffix}`}
                                type="number"
                                min={0}
                                placeholder="-"
                                onChange={handleChange}
                                value={exercise.weight}
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
                                name={`break${inputNameSuffix}`}
                                type="number"
                                min={0}
                                placeholder="-"
                                onChange={handleChange}
                                value={exercise.break}
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