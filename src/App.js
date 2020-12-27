import './assets/scss/style.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Plan from './components/Plan';
import ExerciseSwitcher from './components/exercise/ExerciseSwitcher';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path={'/'} exact>
                        <Plan />
                    </Route>
                    <Route path={'/active'}>
                        <ExerciseSwitcher />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
