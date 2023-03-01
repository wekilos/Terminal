import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import { isLoginAdmin } from "../utils";
import { Loading } from "../components/loading";
import { Login } from "../pages/index";

const Header = React.lazy(() => import("../components/header"));

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isLoginAdmin() ? (
                    <div>
                        <Suspense fallback={<Loading />}>
                            <Header />
                        </Suspense>
                        <div className="site-layout">
                            <div
                                style={{
                                    minHeight: "100vh",
                                }}
                                className="site-layout-background main_content"
                            >
                                <Component {...props} />
                            </div>
                        </div>
                    </div>
                ) : (
                    <Route component={Login} />
                )
            }
        />
    );
};

export default PrivateRoute;
