import './assets/scss/style.scss';

import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import PlanView from './components/plan/view/PlanView';
import PlanStart from './components/plan/start/PlanStart';
import PlanEdit from './components/plan/edit/PlanEdit';
import PlanList from './components/plan/list/PlanList';


function App() {
    return (
        <div className="App">
            <BrowserRouter basename="/trainingApp">
                <Switch>
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
            </BrowserRouter>
        </div>
    );
}

export default App;
