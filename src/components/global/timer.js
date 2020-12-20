import { Fragment, useEffect } from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Timer = (props) => {
    const [seconds, setSeconds] = useState(null);
    const [timer, setTimer] = useState(false); // used to open modal + start/close timer
    const [start, setStart] = useState(null); // date.now() when timer start, used for time diff

    const startTimer = () => {
        setSeconds(props.time);
        setStart( Date.now() );
        setTimer(true);
    }
    const stopTimer = () => {
        setSeconds(0);
        setTimer(false);
    }

    useEffect(() => {
        let interval = null;
        if (timer) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    const diff = ((Date.now() - start) / 1000).toFixed(0);
                    setSeconds(props.time - diff);
                } else {
                    clearInterval(interval);
                }
            }, 1000);
        }

        // returns something on unmount (can return function to trigger it)
        return () => clearInterval(interval);

    }, [timer, seconds]);


    return (
        <Fragment>

            <Button size="lg" onClick={startTimer}>Open modal</Button>
            <Modal show={timer} onHide={stopTimer} className="text-dark timer">
                <Modal.Body>
                    <div>
                        <div className="display-1 timer-number mb-5">
                            {seconds}
                        </div>
                        <Button variant="secondary" size="lg" onClick={stopTimer}>Stop Timer</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </Fragment>
    );
}

export default Timer;