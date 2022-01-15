import { faLink, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Row, Form } from 'react-bootstrap';
import Header from '../../_global/header';
import SetEdit from './SetEdit';
import { setFormat } from '../../../data/dataHelper';
import uuid from 'react-uuid'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const initialValues = {
	planTitle: '',
	sets: [],
}

// ===============================================================
// this manages the add / remove / list Sets, as well as the title
// ===============================================================
const PlanEdit = () => {
	const [form, setForm] = useState({
		id: uuid(),
		title: "",
		sets: []
	})

	//used to check if we have a set without any exercise
	const [checkEmptySets, setCheckEmptySets] = useState(false);

	// simple helper used to simplify complex setForm()
	// return new object with the updated prop
	// {prevObject} | "prop"
	function updateProp(prevObject, prop, value) {
		return {
			...prevObject,
			[prop]: value
		}
	}

	function handleChange(e) {
		// inputName is: prop.{setId}.{exerciseId}
		// setId and exerciseId if nessessary

		const splittedName = e.target.name.split(".")
		const prop = splittedName[0]
		const setId = splittedName[1] || null
		const exerciseId = splittedName[2] || null

		setForm(prevForm => {
			if (!setId) {
				return updateProp(prevForm, prop, e.target.value)
			} else {
				return {
					...prevForm,
					sets: prevForm.sets.map(prevSet => {
						if (prevSet.id === setId) {
							if (!exerciseId) {
								// update 2nd level (series)
								return updateProp(prevSet, prop, e.target.value)
							} else {
								return {
									...prevSet,
									exercises: prevSet.exercises.map(prevExercise => (
										// update 3rd level (title, description, etc...)
										updateProp(prevExercise, prop, e.target.value)
									)),
								}
							}
						} else {
							prevSet
						}
					})
				}
			}
		})
	}

	function addSet() {
		setForm(prevForm => ({
			title: prevForm.title,
			sets: [
				...prevForm.sets,
				{
					id: uuid(),
					series: "1",
					exercises: []
				}
			],
		}))
	}

	function addExercise(setId) {
		setForm(prevForm => ({
			title: prevForm.title,
			sets: prevForm.sets.map(prevSet => (
				prevSet.id === setId ?
					{
						...prevSet,
						exercises: [
							...prevSet.exercises,
							{
								id: uuid(),
								setId: prevSet.id,
								title: '',
								description: '',
								nbs: '', // number
								nbsType: 'rep', // rep || sec
								weight: '',
								break: '',
							}
						],
					}
					:
					prevSet
			)),
		}))
	}

	function removeExercise(setId, exerciseId) {
		setForm(prevForm => {
			return {
				...prevForm,
				sets: prevForm.sets.map(prevSet => {
					if (prevSet.id === setId) {
						return {
							...prevSet,
							exercises: prevSet.exercises.filter(prevExercise => prevExercise.id !== exerciseId)
						}
					} else {
						return prevSet
					}
				})
			}
		})
		setCheckEmptySets(true)
	}

	// remove every sets that has no exercises
	useEffect(() => {
		if (checkEmptySets) {
			setForm(prevForm => {
				return {
					...prevForm,
					sets: prevForm.sets.filter(set => set.exercises.length > 0)
				}
			})
			setCheckEmptySets(false)
		}
	}, [checkEmptySets]);

	let history = useHistory()
	function handleSubmit(e) {
		e.preventDefault()

		// console.log("Submit", form)
		const allPlans = JSON.parse(localStorage.getItem("plans")) || []
		allPlans.push(form)
		localStorage.setItem("plans", JSON.stringify(allPlans))

		history.push('/plan')
	}

	const setElements = form.sets.map(set => (
		<SetEdit
			key={set.id}
			set={set}
			addExercise={() => addExercise(set.id)}
			removeExercise={removeExercise}
			handleChange={handleChange}
		/>
	))

	return (
		<div className="layout">
			<Header title={'Create plan'} backHref="/" />
			<main className="layout-main container">
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label htmlFor="planTitle">Main Title</Form.Label>
						<Form.Control
							type="text"
							className="form-control"
							name="title"
							placeholder="ex: My First Plan!"
							value={form.title}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					{setElements}
					<div className="text-center">
						<Button variant="light" onClick={addSet}>
							<FontAwesomeIcon icon={faPlus} />
						</Button>
					</div>
					<Button type="submit" variant="light" block className="mt-3">Save</Button>
				</Form>
			</main>
			{/* {console.log("render", form)} */}
		</div>

	);
}

export default PlanEdit;