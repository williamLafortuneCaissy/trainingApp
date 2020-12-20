import './assets/scss/style.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlanView from './components/PlanView';
import PlanActive from './components/PlanActive';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path={'/'} exact>
                        <PlanView />
                    </Route>
                    <Route path={'/active'}>
                        <PlanActive />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
