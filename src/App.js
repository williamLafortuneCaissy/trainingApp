import './assets/scss/style.scss';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PlanSummary from './components/plan/view/PlanSummary';
import Plan from './components/plan/view/Plan';
import PlanEdit from './components/plan/edit/PlanEdit';
import PlanList from './components/plan/list/PlanList';


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path={'/exercise'}>
                        <Plan />
                    </Route>
                    <Route path={'/create'}>
                        <PlanEdit />
                    </Route>
                    <Route path={'/plan'}>
                        <PlanSummary />
                    </Route>
                    <Route path={'/list'}>
                        <PlanList />
                    </Route>
                    <Route path={'/'}>
                        <Link to={"/create"} className="btn btn-primary">Create</Link>
                        <Link to={"/plan"} className="btn btn-primary">View</Link>
                        <Link to={"/list"} className="btn btn-primary">List</Link>
                        <Link to={"/exercise"} className="btn btn-primary">Start</Link>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
