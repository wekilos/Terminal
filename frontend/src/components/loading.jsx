import React, { useContext, useEffect, useState } from "react";
import NProgress from "nprogress";

import "./loading.css";
export const Loading = () => {
    useEffect(() => {
        NProgress.start();
        NProgress.configure({ showSpinner: false });
        NProgress.set(0.6);
        return () => {
            NProgress.done();
        };
    }, []);

    return (
        <div
            style={{
                height: "100vh",
                margin: "0 auto",
                backgroundColor: "#19345F",
            }}
        ></div>
    );
};
