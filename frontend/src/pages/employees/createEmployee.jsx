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

const CreateStore = (props) => {
    const [data, setData] = useState({
        password: "",
        username: "",
        firstname: "",
        phone: "",
        EmployeeStatusId: 0,
        StoreId: 0,
    });
    const [status, setStatus] = useState([]);
    const [stores, setStores] = useState([]);

    const createStore = () => {
        console.log(data);
        if (
            data.username.length > 0 &&
            data.password.length > 0 &&
            data.firstname.length > 0 &&
            data.EmployeeStatusId &&
            data.StoreId
        ) {
            axiosInstance
                .post("/api/employee/create", data)
                .then((data) => {
                    console.log(data.data);
                    if (data.data.msg == "Suссessfully") {
                        message.success("Ustunlikli!");
                        props?.onClose();
                        props?.getEmployess();
                        setData({
                            password: "",
                            username: "",
                            firstname: "",
                            phone: "",
                            EmployeeStatusId: 0,
                            StoreId: 0,
                        });
                    } else if (
                        data.data.msg == "Bu username-de employee onden bar!"
                    ) {
                        message.warning("Bu username-de employee onden bar!");
                    } else {
                        message.warning("Network error!");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            message.warning("Maglumatlary Doly girizin!");
        }
    };

    useEffect(() => {
        getEmployeeStatuses();
        getStores();
    }, []);
    const getStores = () => {
        axiosInstance
            .get("/api/store/all")
            .then((data) => {
                setStores(data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const getEmployeeStatuses = () => {
        axiosInstance
            .get("/api/emp/status/all")
            .then((data) => {
                setStatus(data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="w-full pt-0">
            <h1 className="font-roboto text-black text-[24px] pb-4">
                Işgär döretmek
            </h1>
            <div className="my-3">
                <TextField
                    className="h-[42px] font-roboto w-full"
                    id="outlined-basic"
                    label="Doly ady"
                    variant="outlined"
                    size="small"
                    value={data.firstname}
                    onChange={(e) =>
                        setData({ ...data, firstname: e.target.value })
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
                    label="Paroly"
                    variant="outlined"
                    size="small"
                    value={data.password}
                    onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                    }
                />
            </div>
            <div className="my-3">
                <TextField
                    className="h-[42px] font-roboto w-full"
                    id="outlined-basic"
                    label="Telefon"
                    variant="outlined"
                    size="small"
                    type="number"
                    value={data.phone}
                    onChange={(e) =>
                        setData({ ...data, phone: +e.target.value })
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
                    value={data.EmployeeStatusId}
                    onChange={(e) =>
                        setData({ ...data, EmployeeStatusId: e.target.value })
                    }
                >
                    <MenuItem disabled value={0}></MenuItem>
                    {status?.map((item) => {
                        return (
                            <MenuItem value={item?.id}>{item?.title}</MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
            <FormControl
                className="h-[42px] font-roboto w-full"
                size="small"
                sx={{ m: 0, minWidth: 150 }}
            >
                <InputLabel id="demo-simple-select-helper-label">
                    Dükanlar
                </InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    // value={age}
                    label="Wezipesi"
                    value={data.StoreId}
                    onChange={(e) =>
                        setData({ ...data, StoreId: e.target.value })
                    }
                >
                    <MenuItem disabled value={0}></MenuItem>
                    {stores?.map((item) => {
                        return (
                            <MenuItem value={item?.id}>{item?.title}</MenuItem>
                        );
                    })}
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
                    <Button onClick={() => createStore()} variant="outlined">
                        Döret
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default React.memo(CreateStore);
