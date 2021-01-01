import axios from "axios";
import React, { Fragment, useEffect }  from "react";
import { Card, Container } from "react-bootstrap";
import fakeData from '../data/dataSceance'
import Header from "./_global/header";

const Plan = () => {
    const fetchData = async () => {
        // axios returns a promise so we need to await to recieve the data instead of the promise
        // to use await, we need to run the function async
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        // console.log(res);

        // status 200 means everything went right
        if (res.status === 200) {
            const data = res.data;
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <Header title={fakeData.title} next={'Start'} nextHref={'/exercise'} />
            <Container>
                {fakeData.sets.map((set, setKey) => (
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

export default Plan;