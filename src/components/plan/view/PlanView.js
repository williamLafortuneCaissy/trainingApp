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
                    <p class="text-center">This plan has no exercises</p>
                }
                {data.sets.map(set => (
                    <Card body key={set.id} className="mb-3">

                        {/* added a second loop because of sets */}
                        {set.exercises.map((exercise, exerciseIndex) => (
                            <Fragment key={exercise.id}>
                                {exerciseIndex > 0 && <hr />}

                                <div className="d-flex justify-content-between">
                                    <div className="h4">{exercise.title}</div>
                                    {(exerciseIndex === 0 && set.series) &&
                                        <div className="text-nowrap">
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
                                        {(exercise.nbs && exercise.nbsType) &&
                                            <>
                                                {exercise.nbs}
                                                {exercise.nbsType === "rep" && "x"}
                                                {exercise.nbsType === "sec" && "s"}
                                            </>
                                        }
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