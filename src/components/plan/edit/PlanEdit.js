import { faLink, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Row, Form } from 'react-bootstrap';
import Header from '../../_global/header';
import SetEdit from './SetEdit';
import { setFormat } from '../../../data/dataHelper';
import uuid from 'react-uuid'
import { useEffect } from 'react';

const initialValues = {
	planTitle: '',
	sets: [],
}

// ===============================================================
// this manages the add / remove / list Sets, as well as the title
// ===============================================================
const PlanEdit = () => {
	const [form, setForm] = useState({
		title: "",
		sets: []
	})

	//used to check if we have a set without any exercise
	const [checkEmptySets, setCheckEmptySets] = useState(false);

	function updateTitle(e) {
		setForm(prevForm => ({
			...prevForm,
			title: e.target.value,
		}))
	}

	function addSet() {
		setForm(prevForm => ({
			title: prevForm.title,
			sets: [
				...prevForm.sets,
				{
					id: uuid(),
					series: '',
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
								title: '',
								description: '',
								nbs: '', // number
								nbsType: 'rep', // rep || sec
								break: '',
							}
						],
					}
					:
					prevSet
			)),
		}))
	}

	function removeSet(setId) {
		console.log('removeSet')
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


	const setElements = form.sets.map((set, i) => (
		<SetEdit
			key={set.id}
			set={set}
			addExercise={() => addExercise(set.id)}
			removeExercise={removeExercise}
		/>
	))

	return (
		<div className="layout">
			<Header title={'Create plan'} backHref="/" />
			<main className="layout-main container">
				<Form>
					<Form.Group>
						<Form.Label htmlFor="planTitle">Main Title</Form.Label>
						<Form.Control
							type="text"
							className="form-control"
							name="title"
							placeholder="ex: My First Plan!"
							value={form.title}
							onChange={updateTitle}
						/>
					</Form.Group>
					{setElements}
					<div className="text-center">
						<Button variant="light" onClick={addSet}>
							<FontAwesomeIcon icon={faPlus} />
						</Button>
					</div>


					{/* {oldSets.map((id) => (
						<SetEdit key={id} deleteSet={() => deleteSet(id)}/>
					))} */}
					<Button type="submit" variant="light" block className="mt-3">Save</Button>
				</Form>
			</main>
			{console.log("render", form)}
		</div>

	);
}

export default PlanEdit;