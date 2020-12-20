import { Fragment } from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Timer = (props) => {
    let startTime = props.startTime;
    const timer = props.timer;

    var timerInterval = null;
    const startTimer = () => {
        startTime = Date.now();
        console.log('timer started');

        timerInterval = setInterval(() => {
            console.log(time);
            const diff = (Date.now() - startTime) / 1000;
            const nextTime = timer - diff;
            {nextTime < 0 ? stopTimer():
                setTime( nextTime.toFixed(0) );
            }
        }, 100);
    }
    const stopTimer = () => {
        console.log('timer stoped');
        clearInterval(timerInterval)
    }

    const [modal, setModal] = useState(false)
    const [time, setTime] = useState(0);
    const openModal = () => {
        startTimer();
        setModal(true)
    }
    const closeModal = () => {
        stopTimer();
        setModal(false)
    }

    return (
        <Fragment>

            <Button variant="primary" size="lg" onClick={openModal}>Start Timer</Button>

            <Modal show={modal} onHide={closeModal} className="text-dark timer">
                <Modal.Body>
                    <div>
                        <div className="display-1 timer-number mb-5">
                            {time}
                        </div>
                        <Button variant="secondary" onClick={closeModal}>Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </div>
                </Modal.Body>
            </Modal>

        </Fragment>
    );
}

export default Timer;