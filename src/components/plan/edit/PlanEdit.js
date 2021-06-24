import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setNestedObjectValues, useFormik } from 'formik';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Header from '../../_global/header';
import SetEdit from './SetEdit';
import * as Yup from 'yup';

const initialValues = {
	planTitle: '',
}
const onSubmit = (values) => {
	alert('form submitted check console')
	console.log('form Data', values)
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
	const formik = useFormik({
		// short way of doing initialValues: initialValues
		initialValues,
		onSubmit,
		// validate
		validationSchema
	})

	return (
		<div className="layout">
			<Header title={'Create plan'} backHref="/"/>
			<main className="layout-main container">
				<Form onSubmit={formik.handleSubmit}>
					<Form.Group controlId="planTitle">
						<Form.Label>Main Title</Form.Label>
						<Form.Control
							type="text"
							placeholder="ex: My First Plan!"
							value={formik.values.title}
							onChange={formik.handleChange}
							onBlur={formik.HandleBlur}
						/>
						{/* this will only show the error if the user just edited the input */}
						{formik.touched.planTitle && formik.errors.planTitle &&
							<div className="text-danger">{formik.errors.planTitle}</div>
						}
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
				</Form>
			</main>
		</div>

	);
}

export default PlanEdit;