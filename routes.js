import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from ".pages/home.js"
import { NotFoundPage } from "./pages/about"

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <HomePage />
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    )
}