import './assets/scss/style.scss';

import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import PlanView from './components/plan/view/PlanView';
import PlanStart from './components/plan/start/PlanStart';
import PlanEdit from './components/plan/edit/PlanEdit';
import PlanList from './components/plan/list/PlanList';


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    {/*
                    <Route path={'/exercise'}>
                        <Plan />
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
                     */}
                    <Route path={'/plan/create'}>
                        <PlanEdit />
                    </Route>
                    <Route path={'/plan/:planId/view'}>
                        <PlanView />
                    </Route>
                    <Route path={'/plan/:planId'}>
                        <PlanStart />
                    </Route>
                    <Route path={'/plan'}>
                        <PlanList />
                    </Route>
                    <Redirect from="/" to="/plan" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
