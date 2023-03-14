import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/result.css";

const Result = () => {
    const navigate = useNavigate();
    return (
        <div className="successDiv">
            <div className="childDiv">
                <h2 className="text">
                    Tölegiňiz amala aşyryldy! <br />
                    Haýyr-sahabatyňyz üçin <br />
                    Sag boluň!
                </h2>
                <div>
                    <button onClick={() => navigate("/")} className="button">
                        Sagbol
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Result;
