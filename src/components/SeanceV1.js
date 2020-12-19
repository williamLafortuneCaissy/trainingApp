import React  from "react";
import { Button, Card, Container, ProgressBar } from "react-bootstrap";
const data = {
    "title": "Séance",
    "sets" : [
        {
            "series": null,
            "exercises": [
                {
                    "title": "Head Spin Clock",
                    "time": null,
                    "rep": 3,
                },
            ],
        },
        {
            "series": null,
            "exercises": [
                {
                    "title": "Head Spin Anti-Clock",
                    "time": null,
                    "rep": 3,
                },
            ],
        },
        {
            "series": null,
            "exercises": [
                {
                    "title": "Head to shoulders",
                    "time": 10,
                    "rep": 2,
                },
            ],
        },
        {
            "series": null,
            "exercises": [
                {
                    "title": "Foward fold",
                    "time": 10,
                    "rep": null,
                },
            ],
        },
        {
            "series": 3,
            "exercises": [
                {
                    "title": "Child's Pose",
                    "time": 10,
                    "rep": null,
                },
                {
                    "title": "Cobra Pose",
                    "time": 10,
                    "rep": null,
                },
            ],
        },
        {
            "series": 2,
            "exercises": [
                {
                    "title": "Down-Dog",
                    "time": 20,
                    "rep": null,
                },
                {
                    "title": "Pidgeon pose",
                    "time": 20,
                    "rep": null,
                },
            ],
        },
        {
            "series": null,
            "exercises": [
                {
                    "title": "Full Body Stretch",
                    "time": 10,
                    "rep": null,
                },
            ],
        },
        {
            "series": null,
            "exercises": [
                {
                    "title": "Back twist",
                    "time": 10,
                    "rep": null,
                },
            ],
        },
        {
            "series": null,
            "exercises": [
                {
                    "title": "Big hug - Rounded back",
                    "time": 10,
                    "rep": null,
                },
            ],
        },
        {
            "series": 2,
            "exercises": [
                {
                    "title": "Butterfly",
                    "time": 10,
                    "rep": null,
                },
            ],
        },
        {
            "series": null,
            "exercises": [
                {
                    "title": "1 legged fowad Fold",
                    "time": 10,
                    "rep": null,
                },
            ],
        },
        {
            "series": null,
            "exercises": [
                {
                    "title": "Wide-angle Foward Fold",
                    "time": 10,
                    "rep": null,
                },
            ],
        },

    ],
}
class SeanceV1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    };


    render() {

        const getSeries = (current, max) => {
            // eslint-disable-next-line
            var max = max || 1;
            return <span className="text-nowrap align-self-center">{current} / {max}</span>
        };

        return (
            <div className="bg-dark min-vh-100">
                <Container className="text-center container-mobile">
                    <h1 className="h4 text-white">{data.title}</h1>
                    {data.sets.map((set, setKey) => (

                        <Card body className="mb-3" key={setKey}>
                            {/* added a second loop because of supersets */}
                            {set.exercises.map((exercise, key) => (

                                <div key={key} className="mb-3">
                                    <div className="h5">{exercise.title}</div>
                                    <div className="mb-2">
                                        <span>
                                            {exercise.time && `${exercise.time}s`}
                                            {(exercise.rep && exercise.time) && <span className="mx-2">-</span>}
                                            {exercise.rep && `${exercise.rep}x`}
                                        </span>
                                    </div>
                                    <div className="mb-2 d-flex align-items-center">
                                        <Button className="mr-2" variant="primary" size="sm">Start</Button>
                                        <div className="flex-grow-1">
                                            <ProgressBar className="justify-content-start" now={100} label={10}/>
                                        </div>
                                    </div>
                                </div>

                            ))}
                            <hr/>
                            <div className="d-flex">
                                <Button variant="light">undo</Button>
                                <Button className="mx-2" block variant="primary" size="sm" >Next</Button>
                                {getSeries(0, set.series)}
                            </div>
                        </Card>

                    ))}
                </Container>
            </div>
        )
    }
}

export default SeanceV1;