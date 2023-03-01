import React, { Suspense } from "react";
import { Route, useHistory } from "react-router-dom";
import { Loading } from "../components/loading";

import { isLogin } from "../utils/index";
const Headers = React.lazy(() => import("../components/header"));

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    const history = useHistory();

    return (
        <Route
            {...rest}
            render={(props) =>
                isLogin() || true ? (
                    <div>
                        <div
                            className="site-layout"
                            style={{
                                width: "100%",
                                margin: "0 auto",
                            }}
                        >
                            <Component {...props} />
                        </div>
                    </div>
                ) : (
                    history.push({ pathname: "/login" })
                )
            }
        />
    );
};

export default PublicRoute;
