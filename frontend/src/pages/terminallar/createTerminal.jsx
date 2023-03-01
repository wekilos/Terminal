import React, { useEffect, useState } from "react";
import {
    FormControl,
    InputLabel,
    MenuItem,
    TextField,
    Select,
    Button,
} from "@mui/material";
import { axiosInstance } from "../../utils/axiosIntance";
import { message } from "antd";

const CreateUser = (props) => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const [data, setData] = useState({
        name: "",
        address: "",
        UserId: userData?.id,
    });

    const createTerminal = () => {
        console.log(data);
        if (data.name.length > 0 && data.address.length > 0 && data.UserId) {
            axiosInstance
                .post("/api/terminal/create", data)
                .then((data) => {
                    console.log(data.data);
                    if (data.data.msg != "Bu address-de terminal onden bar!") {
                        message.success("Üstünlikli!");
                        props?.onClose();
                        props?.getTerminals();
                        setData({
                            password: "",
                            username: "",
                            login: "",
                            role: 0,
                        });
                    } else if (
                        data.data.msg == "Bu address-de terminal onden bar!"
                    ) {
                        message.warning("Bu address-da terminal bar!");
                    } else {
                        message.warning("Internet ýalňyşlyk!");
                    }
                })
                .catch((err) => {
                    console.log(err);
                    message.warning("Internet ýalňyşlyk!");
                });
        } else {
            message.warning("Maglumatlary Doly girizin!");
        }
    };

    return (
        <div className="w-full pt-0">
            <h1 className="font-roboto text-black text-[24px] pb-4">
                Terminal döretmek
            </h1>
            <div className="my-3">
                <TextField
                    className="h-[42px] font-roboto w-full"
                    id="outlined-basic"
                    label="Ady"
                    variant="outlined"
                    size="small"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                />
            </div>
            <div className="my-3">
                <TextField
                    className="h-[42px] font-roboto w-full"
                    id="outlined-basic"
                    label="Salgysy"
                    variant="outlined"
                    size="small"
                    value={data.address}
                    onChange={(e) =>
                        setData({ ...data, address: e.target.value })
                    }
                />
            </div>

            <div className="w-full inline-flex justify-end mt-10">
                <div className="mr-4">
                    <Button
                        onClick={() => props.onClose()}
                        color="error"
                        variant="outlined"
                    >
                        Goýbolsun et
                    </Button>
                </div>
                <div className="mr-0">
                    <Button onClick={() => createTerminal()} variant="outlined">
                        Döret
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default React.memo(CreateUser);
