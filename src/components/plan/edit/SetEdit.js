import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Formik, Field, FieldArray, useFormik, Form as FormikForm, ErrorMessage, isEmptyArray } from 'formik';
import ExerciseEdit from './ExerciseEdit';
import { exerciseFormat } from '../../../data/dataHelper';
// =======================================================
// this manages the add / remove / list exercice
// =======================================================
// @param {func} deleteSet deletes this set
const SetEdit = ({setPos, set, deleteSet}) => {

    // used only to detect when the set is isEmptyArray, we remove the set in useEffect
    const [nbExercises, setNbExercises] = useState(1)

    useEffect(() => {
        if (!nbExercises) {
            deleteSet();
        }
    }, [nbExercises])

    //TODO: fix ui and add series input

    return (
        <>
            <Card className="mb-3 superSet">
                <Card.Body>
                    <FieldArray name={'sets['+setPos+'].exercises'}>
                        {(arrayHelpers) => {
                            const {push, remove, form} = arrayHelpers;
                            const set = form.values.sets[setPos];

                            //TODO: FIX WIERD BUG
                            /*
                                step to reproduce bug:
                                - add set
                                - add set
                                - delete 1rst set
                                - add set
                                - delete 1rst set -> exercise gets deleted, but not set
                            */


                            const handleDelete = (key, set) => {
                                console.log('exercises: ', set.exercises)
                                console.log('setPos: ', setPos)
                                setNbExercises(nbExercises-1)
                                remove(key)
                            }

                            const handleAdd = () => {
                                push(exerciseFormat);
                                setNbExercises(nbExercises+1)
                            }

                            return (
                                <>
                                    {set.exercises.map((exercise, key) => (
                                        <ExerciseEdit
                                            key={key}
                                            setPos={setPos}
                                            exercisePos={key}
                                            deleteExercise={ () => handleDelete( key, set ) }/>
                                    ))}
                                    <div className="text-center">
                                        <button type="button" className="my-n2 py-2 px-3" onClick={handleAdd}><FontAwesomeIcon icon={faPlus} /></button>
                                    </div>
                                </>
                            )
                        }}

                    </FieldArray>
                </Card.Body>
            </Card>
        </>
    );
}

export default SetEdit;