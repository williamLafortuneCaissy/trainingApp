import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Header from '../../_global/header';
import SetEdit from './SetEdit';

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

	return (
		<div className="layout">
			<Header title={'Create plan'} backHref="/"/>
			<main className="layout-main container">
				<Form>
					<Form.Group controlId="planTitle">
						<Form.Label>Main Title</Form.Label>
						<Form.Control type="text" placeholder="ex: My First Plan!"/>
					</Form.Group>
					{sets.map((id) => (
						<SetEdit key={id} deleteSet={() => deleteSet(id)}/>
					))}

					<div className="text-center">
						<Button variant="light" onClick={addSet}>
							<FontAwesomeIcon icon={faPlus} />
						</Button>
					</div>
				</Form>
			</main>
		</div>

	);
}

export default PlanEdit;