import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import ExerciseEdit from './ExerciseEdit';
// =======================================================
// this maganes the add / remove / list exercice
// =======================================================
const SetEdit = (props) => {

    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [setNb, setSetNb] = useState(null);
    const [setType, setSetType] = useState(null);
    const [weight, setWeight] = useState(null);

    const [series, setSeries] = useState(0)
    const [exercises, setExercises] = useState([])

    // this simulates the next exercise id
    const [idCounter, setIdCounter] = useState(0);


    // initialise empty set
    useEffect(() => {
        if (!exercises.length) {
            addExercise()
        }
    }, [])


    // set.push(idCounter); idCounter++;
    const addExercise = () => {
        setIdCounter(idCounter+1);
        setExercises((prevExercises) => [...prevExercises, idCounter])
    }

    const deleteExercise = (id) => {
        console.log('delete: ', id)
        // exercises.filter will return all exercises except the id specified
        console.log('old exercises: ', exercises)
        setExercises(exercises.filter(exercise => exercise !== id))
        console.log('new exercises: ', exercises)
        console.log(exercises)
    }

    return (
        <>

            <div className="superSet">
                {exercises?.map((id) => (
                    <ExerciseEdit key={id} deleteExercise={() => deleteExercise(id)}/>
                ))}
                <div className="text-center mt-n3 mb-n2">
                    <button type="button" className="py-2 px-3 reboot-button" onClick={addExercise}><FontAwesomeIcon icon={faPlus} /></button>
                </div>
            </div>
        </>
    );
}

export default SetEdit;