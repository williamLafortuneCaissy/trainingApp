import React, { Fragment }  from "react";
import { Card, Container } from "react-bootstrap";
import data from '../data/dataSceance'
import Header from "./global/header";

const PlanView = () => {

    return (
        <>
            <Header title={data.title} next={'Start'} nextHref={'/active'} />
            <Container>
                {data.sets.map((set, setKey) => (
                    <Card body key={setKey++} className="mb-3">

                        {/* added a second loop because of supersets */}
                        {set.exercises.map((exercise, key) => (
                            <Fragment key={exercise.title}>
                                {key > 0 && <hr/>}

                                <div className="d-flex justify-content-between">
                                    <div className="h4">{exercise.title}</div>
                                    {(key === 0 && set.series) &&
                                        <div>
                                            <span className="font-weight-bold small">Series : </span>
                                            <span>{set.series}x</span>
                                        </div>
                                    }
                                </div>
                                {exercise.description &&
                                    <p className="mb-1">{exercise.description}</p>
                                }
                                <div className="mb-2">
                                    <span className="font-weight-bold small">Rep : </span>
                                    <span>
                                        {exercise.time && `${exercise.time}s`}
                                        {(exercise.rep && exercise.time) && <span className="mx-2">-</span>}
                                        {exercise.rep && `${exercise.rep}x`}
                                    </span>
                                </div>
                            </Fragment>
                        ))}

                    </Card>
                ))}
            </Container>
        </>
    )
}

export default PlanView;