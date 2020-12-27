import React, { Fragment, useEffect, useState } from 'react';
// eslint-disable-next-line
import { Button, Card, Col, Container, Modal, ProgressBar, Row } from 'react-bootstrap';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import data from '../../data/dataSceance'
import Timer from '../_global/timer';



const Exercise = (props) => {
    // url variables
    let { setId } = useParams(); //get url id base on parent :setId
    setId = Number(setId);
    const { path } = useRouteMatch('/active'); //path = baseUrl that matches until /active

    // data vars
    const set = data.sets[setId];
    const nbSets = data.sets.length;
    const progress = setId / (nbSets-1) * 100;

    const [seriesDone, setSeriesDone] = useState(0);

    useEffect(() => {
        console.log('reset Focus');
        props.resetFocus();
    });

    const getNextBtn = () => {
        let btn = null;

        // const currentStatus = null
        if (seriesDone < set.series) {
            btn =
                <Button variant="secondary" block onClick={() => setSeriesDone(seriesDone+1)}>Check</Button>
        } else if (setId < nbSets-1) {
            btn =
                <Link to={`${path}/${setId+1}`} className="btn btn-secondary btn-block">
                    <span>Next</span>
                    <i className="mdi mdi-arrow-right lh-1"></i>
                </Link>
        } else if (setId === nbSets-1) {
            btn =
                <Link to={`/`} className="btn btn-secondary btn-block">
                    <span>Done !</span>
                </Link>
        } else {
            console.error("Could not get PlanExercise's next btn", setId, nbSets);
        }

        return btn;

    }

    const getSeriesBtns = () => {

        // function that sets the right serie based on the clicked btn
        const toggleSeriesDone = (serieId) => {
            if (seriesDone === serieId+1) {
                // if clicked on the last active btn, it toggles it
                setSeriesDone(serieId)
            } else {
                // else make the clicked btn active
                setSeriesDone(serieId+1)
            }
        }

        let el = [];
        for (let i = 0; i < set.series; i++) {

            // doneClass = 'done' on all btns before seriesDone number
            const doneClass = i < seriesDone ? 'done' : '';

            el.push(
                <button
                    key={`Serie${i}`}
                    onClick={() => toggleSeriesDone(i)}
                    className={`series-btn ${doneClass}`}>
                    x
                </button>
            )
        }
        return el;
    }

    return (
        <>
            <main className="layout-main container d-flex flex-column">
                {set.exercises.map((exercise, key) => (
                    <Card body key={key} className="text-center mb-3">
                        <div className="h2">{exercise.title}</div>
                        {exercise.description &&
                            <p className="mb-1">( {exercise.description} )</p>
                        }
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
                    </Card>
                ))}
                <div className="mt-auto mb-3">
                    {set.series &&
                        <Fragment>
                            <div className="text-center mb-3">
                                <div className="text-light mb-3 lh-1">Series</div>
                                {getSeriesBtns()}
                            </div>
                        </Fragment>
                    }

                    {getNextBtn()}
                </div>
            </main>
            <footer className="layout-footer bg-white text-primary border-top">
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

export default Exercise;