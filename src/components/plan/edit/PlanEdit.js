import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Field, useFormik, Form as FormikForm, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Row, Form } from 'react-bootstrap';
import Header from '../../_global/header';
import SetEdit from './SetEdit';
import * as Yup from 'yup';

const initialValues = {
	planTitle: '',
}
const onSubmit = (values) => {
	console.log('form Data', values)
	alert('form submitted check console')
}
const validationSchema = Yup.object({
	planTitle: Yup.string().required('This field is required')
})

// ===============================================================
// this manages the add / remove / list Sets, as well as the title
// ===============================================================
const PlanEdit = () => {
	const [sets, setSets] = useState([])

    // this simulates the next set id
    const [idCounter, setIdCounter] = useState(0);

	// set.push(idCounter); idCounter++;
    const addSet = () => {
        setIdCounter(idCounter+1);
        setSets((prevSets) => [...prevSets, idCounter])
    }

    const deleteSet = (id) => {
        // exercises.filter will return all exercises except the id specified
        setSets(sets.filter(set => set !== id))
    }

	// https://www.youtube.com/watch?v=PpdXB9Ru6oI&list=PLC3y8-rFHvwiPmFbtzEWjESkqBVDbdgGu


	return (
		<div className="layout">
			<Header title={'Create plan'} backHref="/"/>
			<main className="layout-main container">
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					<FormikForm>
						<Form.Group>
							<Form.Label htmlFor="planTitle">Main Title</Form.Label>
							<Field
								className="form-control"
								id="planTitle"
								name="planTitle"
								type="text"
								placeholder="ex: My First Plan!"
							/>
							<ErrorMessage name="planTitle" />
						</Form.Group>
						{sets.map((id) => (
							<SetEdit key={id} deleteSet={() => deleteSet(id)}/>
						))}
						<div className="text-center">
							<Button variant="light" onClick={addSet}>
								<FontAwesomeIcon icon={faPlus} />
							</Button>
						</div>
						<Button type="submit" variant="light" block className="mt-3">Save</Button>
					</FormikForm>
				</Formik>
			</main>
		</div>

	);
}

export default PlanEdit;