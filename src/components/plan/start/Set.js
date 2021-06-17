import React, { Fragment, useEffect, useState } from 'react';
// eslint-disable-next-line
import { Button, Card, Col, Container, Modal, ProgressBar, Row } from 'react-bootstrap';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import fakedata from '../../../data/dataPlan'
import Timer from '../../_global/timer';

/*
* @param {bool} lastSet
*/
const Set = ({data, nextSet, lastSet}) => {

    const [activeSerie, setActiveSerie] = useState(1)

    // force the reset of activeSerie everytime its a new sets
    useEffect(() => {
        setActiveSerie(1)
    }, [data])


    const getSeriesBtns = () => {
        let btns = [];
        for (let i = 1; i <= data.series; i++) {
            let className = 'series-btn ';

            if (i <= activeSerie) {
                className+= 'active ';
            }

            btns.push(
                <button
                    key={`Serie${i}`}
                    onClick={() => setActiveSerie(i)}
                    className={className}>
                    {i}
                </button>
            )
        }
        return btns;
    }

    const getNextBtn = () => {
        let text = null;
        let onClick = null;

        if (activeSerie < data.series) {
            onClick = () => setActiveSerie(activeSerie+1);
            text = 'Next Series';

        } else if (!lastSet) {
            onClick = nextSet;
            text = 'Next Series';

        } else {
            onClick = nextSet;
            text = 'Done !';
        }

        return <Button variant="secondary" block onClick={onClick}>{text}</Button>;

    }

    return (
        <>
            {data.exercises.map((exercise, key) => (
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
                {data.series > 1 &&
                    <Fragment>
                        <div className="text-center mb-3">
                            <div className="text-light mb-3 lh-1">Series</div>
                            {getSeriesBtns()}
                        </div>
                    </Fragment>
                }

                {getNextBtn()}
            </div>
        </>
    );
}

export default Set;