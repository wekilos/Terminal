import React, { useState } from "react";

import dash from "../../images/dash.png";
import "../../css/main.css";
import "../../css/mdb.min.css";
import "../../css/tailwind.css";
import { message } from "antd";
import { axiosInstance } from "../../utils/axiosIntance";
import { useHistory } from "react-router-dom";
const Login = () => {
    const [msg, setMsg] = useState(false);
    const history = useHistory();

    const [data, setData] = useState({ login: "", password: "" });
    const login = () => {
        data.login.length > 0 && data.password.length > 0
            ? axiosInstance
                  .post("/api/user/login", data)
                  .then((data) => {
                      console.log(data.data);
                      if (data.data.login) {
                          message.success("Üstünlikli ulgama girdiňiz!");
                          localStorage.setItem(
                              "userData",
                              JSON.stringify(data.data)
                          );
                          history.push({ pathname: "/terminal" });
                      } else {
                          message.warning("Ulanyjy adyňyz nädogry!");
                      }
                  })
                  .catch((err) => {
                      console.log(err);
                      message.warning("Internet ýok!");
                  })
            : message.warning("Maglumaty doly giriziň");
    };
    return (
        <div className="flex h-screen justify-center">
            <div className="w-1/2 relative">
                <div className="absolute-center w-8/12">
                    <div className="flex flex-column justify-center items-center gap-y-2 logo-text text-primary-dark">
                        <p className="font-eczar">Admin Panel</p>
                    </div>
                    {msg && (
                        <div className="pt-12 pb-4">
                            <div
                                className="bg-rose-100 rounded-lg py-2 px-6  text-base text-rose-500 mb-3"
                                role="alert"
                            >
                                message
                            </div>
                        </div>
                    )}
                    <div>
                        <div className="form-outline mt-4">
                            <input
                                type="text"
                                onChange={(e) =>
                                    setData({ ...data, login: e.target.value })
                                }
                                onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                        login();
                                    }
                                }}
                                className="form-control "
                                style={{ border: "1px solid #efefef" }}
                            />
                            <label className="form-label" htmlFor="typeText">
                                Login
                            </label>
                        </div>
                        <div className="form-outline my-8">
                            <input
                                type="password"
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        password: e.target.value,
                                    })
                                }
                                onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                        login();
                                    }
                                }}
                                className="form-control"
                                style={{ border: "1px solid #efefef" }}
                            />
                            <label className="form-label" htmlFor="typeText">
                                Parol
                            </label>
                        </div>

                        <button
                            onClick={() => login()}
                            className="btn vl-btn w-full justify-center mt-8"
                        >
                            Login
                        </button>
                    </div>
                </div>
                <span className="sb-1 text-black x-center pb-8 bottom-0">
                    Powered by WB
                </span>
            </div>
        </div>
    );
};

export default React.memo(Login);
