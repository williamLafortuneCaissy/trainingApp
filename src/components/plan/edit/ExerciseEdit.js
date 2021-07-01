import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Field } from 'formik';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
// ==============================================
// this manages the form
// ==============================================
// @param {func} deleteExercise deletes this exercise
const ExerciseEdit = ({setPos, exercisePos, deleteExercise}) => {

    const baseName = 'sets['+setPos+'].exercises['+exercisePos+']';

    return (
        <>
            <button type="button" className="superSet-delete" onClick={deleteExercise}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <Form.Group>
                <Form.Label>Exercise</Form.Label>
                <Field
                    className="form-control"
                    id={baseName+'.title'}
                    name={baseName+'.title'}
                    type="text"
                    placeholder="ex: Foward Fold"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Description (optionnal)</Form.Label>
                <Field
                    className="form-control"
                    id={baseName+'.description'}
                    name={baseName+'.description'}
                    type="text"
                    placeholder="ex: 1 per leg"
                />
            </Form.Group>
            <Row className="pb-2"> {/* pb-2 to match label's line-height */}
                <Form.Group as={Col} xs="6" className="mb-0">
                    <Form.Label>Reps / Secs</Form.Label>
                    <Form.Row>
                        <Col xs="6">
                            <Field
                                className="form-control"
                                id={baseName+'.nbs'}
                                name={baseName+'.nbs'}
                                type="number"
                                placeholder="ex: 15"
                            />
                        </Col>
                        <Col xs="6">
                            <Field
                                className="custom-select"
                                id={baseName+'.nbs'}
                                name={baseName+'.nbsType'}
                                as="select"
                            >
                                <option value="rep">Rep</option>
                                <option value="sec">Sec</option>
                            </Field>
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group as={Col} xs="6" className="mb-0">
                    <Form.Label>Weight (optionnal)</Form.Label>
                    <Form.Row>
                        <Col xs="6">
                            <Field
                                className="form-control"
                                id={baseName+'.weight'}
                                name={baseName+'.weight'}
                                type="number"
                                placeholder="ex: 15"
                            />
                        </Col>
                        <Col xs="6" className="align-self-end">lbs</Col>
                    </Form.Row>
                </Form.Group>
            </Row>
            <hr/>
        </>
    );
}

export default ExerciseEdit;