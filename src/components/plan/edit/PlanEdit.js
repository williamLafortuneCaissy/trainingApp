import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Field, FieldArray, useFormik, Form as FormikForm, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Row, Form } from 'react-bootstrap';
import Header from '../../_global/header';
import SetEdit from './SetEdit';
import * as Yup from 'yup';
import { setFormat } from '../../../data/dataHelper';

const initialValues = {
	planTitle: '',
	sets: [],
}
const onSubmit = (values, onSubmitProps) => {
	console.log('form Data', values)
	alert('form submitted check console')

	// when we submit, formik set a prop isSubmitting to true
	// we want to reset this prop when it is done submitting
	onSubmitProps.setSubmitting(false)
}
const validationSchema = Yup.object({
	planTitle: Yup.string().required('This field is required')
})

// ===============================================================
// this manages the add / remove / list Sets, as well as the title
// ===============================================================
const PlanEdit = () => {

	// formik tutorial
	// https://www.youtube.com/watch?v=PpdXB9Ru6oI&list=PLC3y8-rFHvwiPmFbtzEWjESkqBVDbdgGu

	return (
		<div className="layout">
			<Header title={'Create plan'} backHref="/"/>
			<main className="layout-main container">
				<Formik
					initialValues={initialValues}
					// validationSchema={validationSchema}
					onSubmit={onSubmit}
					validateOnBlur={false}
					validateOnChange={false}
				>
					{(formik) => {
						return (
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
									{/* this format let us make a custom error message. can also be done with the <Field></Field> component */}
									{/* the children is a function rendering a custom html element */}
									<ErrorMessage name="planTitle">
										{(error) => <div className="text-danger">{error}</div>}
									</ErrorMessage>
								</Form.Group>
								<FieldArray name="sets">
									{(arrayHelpers) => {
										// get only the nessessary props inside arrayHelpers (push(), remove(), form)
										const {push, remove, form} = arrayHelpers;

										return (
											<>
												{form.values.sets.map((set, key) => (
													<SetEdit key={key} setPos={key} deleteSet={() => remove(key)}/>
												))}
												<div className="text-center">
													<Button variant="light" onClick={() => push(setFormat)}>
														<FontAwesomeIcon icon={faPlus} />
													</Button>
												</div>
											</>
										)
									}}
								</FieldArray>
								{/* {oldSets.map((id) => (
									<SetEdit key={id} deleteSet={() => deleteSet(id)}/>
								))} */}
								<Button type="submit" variant="light" block className="mt-3">Save</Button>
							</FormikForm>
						)
					}}
				</Formik>
			</main>
		</div>

	);
}

export default PlanEdit;