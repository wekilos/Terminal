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
    const [data, setData] = useState({
        password: "",
        username: "",
        login: "",
        role: 0,
    });

    const createUser = () => {
        console.log(data);
        if (
            data.username.length > 0 &&
            data.password.length > 0 &&
            data.login.length > 0 &&
            data.role != 0
        ) {
            axiosInstance
                .post("/api/user/create", data)
                .then((data) => {
                    console.log(data.data);
                    if (data.data.msg == "Suссessfully") {
                        message.success("Ustunlikli!");
                        props?.onClose();
                        props?.getUsers();
                        setData({
                            password: "",
                            username: "",
                            login: "",
                            role: 0,
                        });
                    } else if (
                        data.data.msg == "Bu username-de employee onden bar!"
                    ) {
                        message.warning("Bu login-da ulanyjy bar!");
                    } else {
                        message.warning("Internet ýalňyşlyk!");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            message.warning("Maglumatlary Doly girizin!");
        }
    };

    return (
        <div className="w-full pt-0">
            <h1 className="font-roboto text-black text-[24px] pb-4">
                Ulanyjy döretmek
            </h1>
            <div className="my-3">
                <TextField
                    className="h-[42px] font-roboto w-full"
                    id="outlined-basic"
                    label="Doly ady"
                    variant="outlined"
                    size="small"
                    value={data.username}
                    onChange={(e) =>
                        setData({ ...data, username: e.target.value })
                    }
                />
            </div>
            <div className="my-3">
                <TextField
                    className="h-[42px] font-roboto w-full"
                    id="outlined-basic"
                    label="Login"
                    variant="outlined"
                    size="small"
                    value={data.login}
                    onChange={(e) =>
                        setData({ ...data, login: e.target.value })
                    }
                />
            </div>
            <div className="my-3">
                <TextField
                    className="h-[42px] font-roboto w-full"
                    id="outlined-basic"
                    label="Paroly"
                    variant="outlined"
                    size="small"
                    value={data.password}
                    onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                    }
                />
            </div>

            <FormControl
                className="h-[42px] font-roboto w-full"
                size="small"
                sx={{ mb: 2, minWidth: 150 }}
            >
                <InputLabel id="demo-simple-select-helper-label">
                    Wezipesi
                </InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    // value={age}
                    label="Wezipesi"
                    value={data.role}
                    onChange={(e) => setData({ ...data, role: e.target.value })}
                >
                    <MenuItem value={1}>Admin</MenuItem>
                    <MenuItem value={2}>Operator</MenuItem>
                    <MenuItem value={3}>Ulanyjy</MenuItem>
                </Select>
            </FormControl>
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
                    <Button onClick={() => createUser()} variant="outlined">
                        Döret
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default React.memo(CreateUser);
