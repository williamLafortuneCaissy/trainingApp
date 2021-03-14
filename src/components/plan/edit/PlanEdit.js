import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Header from '../../_global/header';
import SetEdit from './SetEdit';



const PlanEdit = (props) => {
	const [title, setTitle] = useState(null);

	// Array containing nb of sets inside each super sets
	// ex: [1, 2, 1] => 1x1 set, 1x2 superset, 1x1 set
	const [data, setData] = useState([]);

	const addSuperset = () => {
		console.log(data.length);
		setData((data) => [...data, 1])
	}

	const updateSuperset = (supersetId, value) => {
		let newArr = [...data];
		newArr[supersetId] = newArr[supersetId] + value; // add || remove set from superset
		newArr = newArr.filter(superSet => superSet != 0); // removes superset with no set [0]

		setData(newArr);

	}

	const getSets = (nbSets, superSetId) => {
		let sets = [];
		for (let i = 0; i < nbSets; i++) {
			sets.push(
				<SetEdit key={'set-'+i}
					updateSuperset={updateSuperset}
					superSetId={superSetId}
				/>
			)
		}
		return sets;
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
					{data.map((superSetValue, superSetId) => (
						<div className="superSet" key={'superset-' + superSetId}>
							{getSets(superSetValue, superSetId)}
							<div className="text-center mt-n3 mb-n2">
								<button type="button" className="py-2 px-3 reboot-button" onClick={() => updateSuperset(superSetId, 1)}><FontAwesomeIcon icon={faPlus} /></button>
							</div>
						</div>
					))}

					<div className="text-center">
						<Button variant="light" onClick={addSuperset}>
							<FontAwesomeIcon icon={faPlus} />
						</Button>
					</div>
				</Form>
			</main>
		</div>

	);
}

export default PlanEdit;