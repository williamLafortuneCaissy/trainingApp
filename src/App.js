import './assets/scss/style.scss';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PlanView from './components/plan/PlanView';
import ExerciseSwitcher from './components/plan/exercise/ExerciseSwitcher';
import PlanEdit from './components/plan/PlanEdit';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path={'/exercise'}>
                        <ExerciseSwitcher />
                    </Route>
                    <Route path={'/create'}>
                        <PlanEdit />
                    </Route>
                    <Route path={'/plan'}>
                        <PlanView />
                    </Route>
                    <Route path={'/'}>
                        <Link to={"/create"} className="btn btn-primary">Create</Link>
                        <Link to={"/plan"} className="btn btn-primary">View</Link>
                        <Link to={"/exercise"} className="btn btn-primary">Start</Link>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
