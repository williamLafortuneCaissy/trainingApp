import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import ExerciseEdit from './ExerciseEdit';
import { exerciseFormat } from '../../../data/dataHelper';
import uuid from 'react-uuid';
// =======================================================
// this manages the add / remove / list exercice
// =======================================================
// @param {func} deleteSet deletes this set
const SetEdit = ({ index, set, addExercise, removeExercise }) => {
    // console.log("set: ", set)

    useEffect(() => {
        addExercise()
    }, []);

    const getOptions = () => {
        let options = []
        for (let i = 1; i < 10; i++) {
            options.push(
                <option key={i} value={i}>{i}</option>
            )
        }

        return options
    }

    const exerciceElements = set.exercises.map(exercise => (
        <ExerciseEdit
            key={exercise.id}
            removeExercise={() => removeExercise(set.id, exercise.id)}
        />
    ))

    return (
        <>
            <Card className="mb-3 set">
                <Card.Header className="d-flex py-2">
                    <div className="d-flex align-items-center">
                        <Form.Label className="mb-0 mr-3">Series:</Form.Label>
                        <Form.Control
                            as="select"
                            name={"serie"}
                        >
                            {getOptions()}
                        </Form.Control>
                    </div>
                    {/* <button className="ml-auto" type="button" onClick={deleteSet}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button> */}
                </Card.Header>
                <Card.Body>
                    {exerciceElements}
                    <div className="text-center">
                        <button type="button" className="my-n2 py-2 px-3" onClick={addExercise}><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default SetEdit;