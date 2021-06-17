import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import ExerciseEdit from './ExerciseEdit';
// =======================================================
// this manages the add / remove / list exercice
// =======================================================
// @param {func} deleteSet deletes this set
const SetEdit = ({deleteSet}) => {

    const [exercises, setExercises] = useState([])

    // this simulates the next exercise id
    const [idCounter, setIdCounter] = useState(0);

    // used to add an exercise at the start
    const [init, setInit] = useState(true)


    // initialise empty set && remove the set if it contains no exercises
    useEffect(() => {
        if (!exercises.length) {
            if (init) {
                addExercise()
                setInit(false)
            } else {
                deleteSet()
            }
        }
    }, [exercises])

    // set.push(idCounter); idCounter++;
    const addExercise = () => {
        setIdCounter(idCounter+1);
        setExercises((prevExercises) => [...prevExercises, idCounter])
    }

    const deleteExercise = (id) => {
        // exercises.filter will return all exercises except the id specified
        setExercises(exercises.filter(exercise => exercise !== id))
    }

    return (
        <>
            <Card className="mb-3 superSet">
                <Card.Body>
                    {exercises?.map((id) => (
                        <ExerciseEdit key={id} deleteExercise={() => deleteExercise(id)}/>
                    ))}
                    <div className="text-center">
                        <button type="button" className="my-n2 py-2 px-3 reboot-button" onClick={addExercise}><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default SetEdit;