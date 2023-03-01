import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/money.css";
import { axiosInstance } from "../utils/axiosIntance";

const Money = () => {
    const [text, setText] = useState("0 Manat");
    const [money, setMoney] = useState(0);
    const navigate = useNavigate();
    const toleg = () => {
        axiosInstance
            .post("/api/toleg/create", {
                money: +money,
                terminal_id: "437abeb4-8c5a-4f4f-84fe-f89ab8724608",
            })
            .then((data) => {
                console.log(data.data);
                navigate("/result");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="maneyDiv">
            <div className="childDiv">
                <h2 className="text">
                    Haýyr-sahawatyňyz <br />
                    üçin mukdar
                </h2>
                <div>
                    <div>
                        <input
                            className="input"
                            value={money}
                            onChange={(e) => setMoney(e.target.value)}
                        />
                    </div>
                    <div>
                        <button onClick={() => toleg()} className="button">
                            Sadaka ber
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Money;
