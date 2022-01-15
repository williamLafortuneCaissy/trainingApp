import React, { Fragment } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router";
import fakedata from '../../../data/dataPlan'
import Header from "../../_global/header";

const PlanView = () => {

    let { planId } = useParams(); //get url id base on parent :planId

    const storage = JSON.parse(localStorage.getItem("plans"))
    const data = storage.find(x => x.id == planId);
    console.log(data)

    return (
        <div className="layout">
            <Header title={data.title} next={'Start'} nextHref={'/plan/' + data.id} backHref="/" />
            <main className="layout-main container">
                {!data.sets.length &&
                    <p class="text-center">This plan has no exerces</p>
                }
                {data.sets.map((set, setKey) => (
                    <Card body key={setKey++} className="mb-3">

                        {/* added a second loop because of supersets */}
                        {set.exercises.map((exercise, key) => (
                            <Fragment key={exercise.title}>
                                {key > 0 && <hr />}

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
            </main>
        </div>
    )
}

export default PlanView;