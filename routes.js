import {BrowserRouter as Router, Switch, Route } from ‘react-router-dom’;
import { NotFoundPage } from "./pages/about"

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    )
}