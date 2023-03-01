import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";

import {
    Customers,
    Employees,
    Hasaplar,
    Home,
    Loans,
    Login,
    Stores,
    Terminallar,
    Tolegler,
    Users,
} from "../pages/index";
import { Loading } from "../components/loading";

const PrivateRoute = lazy(() => import("./PrivateRoute"));
const PublicRoute = lazy(() => import("./PublicRoute"));
const App = () => {
    return (
        // forceRefresh={true}
        // history={history}
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <PublicRoute
                        restricted={true}
                        component={Login}
                        path="/"
                        exact
                    />
                    <PrivateRoute
                        restricted={true}
                        component={Terminallar}
                        path="/terminal"
                        exact
                    />
                    <PrivateRoute
                        restricted={true}
                        component={Tolegler}
                        path="/toleg"
                        exact
                    />
                    <PrivateRoute
                        restricted={true}
                        component={Hasaplar}
                        path="/hasap"
                        exact
                    />
                    <PrivateRoute
                        restricted={true}
                        component={Users}
                        path="/users"
                        exact
                    />

                    <PublicRoute component={Login} path="*" />
                    <Route path="*" component={Login} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
