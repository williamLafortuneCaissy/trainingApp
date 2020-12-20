import React, { useState } from 'react';
// eslint-disable-next-line
import { Button, Card, Col, Container, Modal, ProgressBar, Row } from 'react-bootstrap';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import data from '../data/dataSceance'
import Timer from './global/timer';


const PlanExercise = (props) => {
    let { setId } = useParams(); //get url id base on parent :setId
    setId = Number(setId);
    const { path } = useRouteMatch('/active'); //path = baseUrl that matches until /active

    const nbSets = data.sets.length;
    const progress = setId / (nbSets-1) * 100;
    const set = data.sets[setId];

    const [done, setDone] = useState(true); // sets to true to enable the "next exercise" btn

    const getNextBtn = () => {
        if (done) {
            if (setId < nbSets-1) {
                return (
                    <Link to={`${path}/${setId+1}`} className="btn btn-secondary btn-block">
                        <span>Next</span>
                        <i className="mdi mdi-arrow-right"></i>
                    </Link>
                );
            } else {
                return(
                    <Link to={`/`} className="btn btn-secondary btn-block">
                        <span>Done !</span>
                    </Link>
                );
            }
        }

    }

    return (
        <>
            <main className="flex-grow-1 overflow-auto pt-3">
                <Container>
                    {set.exercises.map((exercise, key) => (
                        <Card body key={key} className="text-center mb-3">
                            <div className="h2">{exercise.title}</div>
                            <div className="d-flex justify-content-around">
                                {exercise.time &&
                                    <>
                                        <div className="mb-4">
                                            <div className="display-1">{exercise.time}</div>
                                            <div className="h3">Seconds</div>
                                        </div>
                                    </>
                                }
                                {exercise.rep &&
                                    <div className="mb-4">
                                        <div className="display-1">{exercise.rep}</div>
                                        <div className="h3">Times</div>
                                    </div>
                                }
                            </div>
                            {exercise.time &&
                                <div className="mb-4">
                                    <Timer time={exercise.time} />
                                    {/* <div className="display-1 text-center">{timer}</div> */}
                                </div>
                            }
                            {getNextBtn()}
                        </Card>
                    ))}
                </Container>
            </main>
            <footer className="bg-white text-primary border-top">
                <div className="px-3 pt-3">
                    <ProgressBar now={progress} />
                </div>
                <Row noGutters>
                    <Col xs={5}>
                        {setId > 0 &&
                            <Link to={`${path}/${setId - 1}`} className="text-reset p-3 d-flex align-items-center">
                                <i className="mdi mdi-chevron-left"></i>
                                <span>Previous Exercise</span>
                            </Link>
                        }
                    </Col>
                    <Col xs={{size:5, offset:2}}>
                        {setId < nbSets-1 &&
                            <Link to={`${path}/${setId + 1}`} className="text-reset p-3 d-flex align-items-center justify-content-end">
                                <span>Next Exercise</span>
                                <i className="mdi mdi-chevron-right"></i>
                            </Link>
                        }
                    </Col>
                </Row>
            </footer>
        </>
    );
}

export default PlanExercise;