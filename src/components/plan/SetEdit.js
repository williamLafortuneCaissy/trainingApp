import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const SetEdit = (props) => {

    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [setNb, setSetNb] = useState(null);
    const [setType, setSetType] = useState(null);
    const [weight, setWeight] = useState(null);
    return (
        <>
            <button type="button" className="superSet-delete" onClick={() => props.updateSuperset(props.superSetId, -1)}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <Form.Group controlId="name-1">
                <Form.Label>Exercise</Form.Label>
                <Form.Control type="text" placeholder="ex: Foward Fold"/>
            </Form.Group>
            <Form.Group controlId="description-1">
                <Form.Label>Description (optionnal)</Form.Label>
                <Form.Control type="text" placeholder="ex: 1 per leg"/>
            </Form.Group>
            <Row className="pb-2"> {/* pb-2 to match label's line-height */}
                <Form.Group as={Col} xs="6" className="mb-0">
                    <Form.Label htmlFor="setNb-1">Set</Form.Label>
                    <Form.Row>
                        <Col xs="6">
                            <Form.Control id="setNb-1" type="number" placeholder="ex: 15"/>
                        </Col>
                        <Col xs="6">
                            <Form.Control id="setType-1" as="select" custom>
                                <option>Rep</option>
                                <option>Sec</option>
                            </Form.Control>
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group as={Col} xs="6" className="mb-0">
                    <Form.Label htmlFor="weight-1">Weight (optionnal)</Form.Label>
                    <Form.Row>
                        <Col xs="6">
                            <Form.Control id="weight-1" type="number" placeholder="ex: 15"/>
                        </Col>
                        <Col xs="6" className="align-self-end">lbs</Col>
                    </Form.Row>
                </Form.Group>
            </Row>
            <hr className="border-light"/>
        </>
    );
}

export default SetEdit;