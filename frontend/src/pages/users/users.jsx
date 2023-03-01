import React, { useEffect, useState } from "react";

import {
    Add,
    FilterAltOutlined,
    Edit,
    PersonOffOutlined,
    PersonOutlineOutlined,
    Delete,
} from "@mui/icons-material";
import "../../css/main.css";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    TextField,
    Select,
} from "@mui/material";
import { Modal, message } from "antd";
import CreateUser from "./createUser";
import { axiosInstance } from "../../utils/axiosIntance";

const Users = () => {
    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState(false);
    const [storeData, setStoreData] = useState();
    const [data, setData] = useState([]);
    const [password, setPassword] = useState("");
    const [filter, setFilter] = useState({
        username: "",
        role: 0,
        active: null,
    });

    const [employee, setEmployee] = useState({
        username: "",
        login: "",
        role: 0,
    });

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        console.log(filter);
        axiosInstance
            .get("/api/user/all", {
                params: {
                    username: filter?.username,
                    role: filter?.role,
                    active: filter?.active,
                },
            })
            .then((data) => {
                console.log("user", data.data);
                setData(data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getFilter = () => {
        getUsers();
    };
    const updateUser = () => {
        axiosInstance
            .patch("/api/user/update", employee)
            .then((data) => {
                console.log(data.data);
                getUsers();
                setUpdate(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const updateUserPass = () => {
        axiosInstance
            .patch("/api/user/update-pass", {
                id: employee.id,
                password: password,
            })
            .then((data) => {
                console.log(data.data);
                getUsers();
                setUpdate(false);
                setPassword("");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const DisActiveEmployee = (id) => {
        axiosInstance
            .patch("/api/user/disActive/" + id)
            .then((data) => {
                getUsers();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const ActiveEmployee = (id) => {
        axiosInstance
            .patch("/api/user/active/" + id)
            .then((data) => {
                getUsers();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const DeleteUser = (id) => {
        axiosInstance
            .patch("/api/user/delete/" + id)
            .then((data) => {
                message.success("Ulanyjy pozuldy!");
                getUsers();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="w-full bg-background min-h-[100vh] pt-8 pb-8">
            <Modal
                className="font-roboto"
                width={700}
                open={open}
                onCancel={() => setOpen(false)}
                footer={false}
            >
                <div className="bg-white">
                    <CreateUser
                        getUsers={getUsers}
                        onClose={() => setOpen(false)}
                    />
                </div>
            </Modal>
            <Modal
                className="font-roboto"
                width={700}
                open={update}
                onCancel={() => setUpdate(false)}
                footer={false}
            >
                <div className="bg-white">
                    <div className="w-full pt-0">
                        <h1 className="font-roboto text-black text-[24px] pb-4">
                            Işgär üýtgetmek
                        </h1>
                        <div className="my-3">
                            <TextField
                                className="h-[42px] font-roboto w-full"
                                id="outlined-basic"
                                label="Doly ady"
                                variant="outlined"
                                size="small"
                                value={employee.username}
                                onChange={(e) =>
                                    setEmployee({
                                        ...employee,
                                        username: e.target.value,
                                    })
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
                                value={employee.login}
                                onChange={(e) =>
                                    setEmployee({
                                        ...employee,
                                        login: e.target.value,
                                    })
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
                                value={employee.role}
                                onChange={(e) =>
                                    setEmployee({
                                        ...employee,
                                        role: e.target.value,
                                    })
                                }
                            >
                                <MenuItem value={1}>Admin</MenuItem>
                                <MenuItem value={2}>Operator</MenuItem>
                                <MenuItem value={3}>Ulanyjy</MenuItem>
                            </Select>
                        </FormControl>
                        <div className="w-full inline-flex justify-between">
                            <div className="my-3 w-2/3">
                                <TextField
                                    className="h-[42px] font-roboto w-full"
                                    id="outlined-basic"
                                    label="Password"
                                    variant="outlined"
                                    size="small"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="my-3 w-1/3 px-2">
                                <Button
                                    className="w-full"
                                    onClick={() => updateUserPass()}
                                    variant="outlined"
                                >
                                    üýtget
                                </Button>
                            </div>
                        </div>
                        <div className="w-full inline-flex justify-end mt-10">
                            <div className="mr-4">
                                <Button
                                    onClick={() => setUpdate(false)}
                                    color="error"
                                    variant="outlined"
                                >
                                    goýbolsun et
                                </Button>
                            </div>
                            <div className="mr-0">
                                <Button
                                    onClick={() => updateUser()}
                                    variant="outlined"
                                >
                                    üýtget
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <div className="w-[95%] mx-auto">
                <div className="w-[100%]  py-4  m-auto inline-flex justify-between">
                    <h5 className="text-[24px] leading-[42px] text-black font-[500] font-roboto whitespace-nowrap">
                        Işgärler
                    </h5>

                    <Button
                        onClick={() => setOpen(true)}
                        startIcon={<Add />}
                        variant="contained"
                        className="h-[42px] !text-[12px] bg-primary-light font-roboto"
                    >
                        Täze goş
                    </Button>
                </div>

                <div className="w-[100%]  bg-white px-4 py-4  m-auto inline-flex justify-between">
                    <div className="inline-flex justify-start">
                        <div className="mr-4">
                            <TextField
                                className="h-[42px] font-roboto"
                                id="outlined-basic"
                                label="Login ýa-da Ulanyjy ady"
                                variant="outlined"
                                size="small"
                                value={filter?.username}
                                onChange={(e) =>
                                    setFilter({
                                        ...filter,
                                        username: e.target.value,
                                    })
                                }
                                onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                        getFilter();
                                    }
                                }}
                            />
                        </div>

                        <div className="mr-4">
                            <FormControl
                                size="small"
                                sx={{ m: 0, minWidth: 180 }}
                            >
                                <InputLabel id="demo-simple-select-helper-label">
                                    Wezipesi
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={filter.role}
                                    label="Wezipesi"
                                    onChange={(e) =>
                                        setFilter({
                                            ...filter,
                                            role: e.target.value,
                                        })
                                    }
                                >
                                    <MenuItem value={0}>Hemmesi</MenuItem>
                                    <MenuItem value={1}>Admin</MenuItem>
                                    <MenuItem value={2}>Operator</MenuItem>
                                    <MenuItem value={3}>Ulanyjy</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="mr-4">
                            <FormControl
                                size="small"
                                sx={{ m: 0, minWidth: 180 }}
                            >
                                <InputLabel id="demo-simple-select-helper-label">
                                    Ýagdaýy
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    // value={age}
                                    label="Wezipesi"
                                    onChange={(e) =>
                                        setFilter({
                                            ...filter,
                                            active: e.target.value,
                                        })
                                    }
                                >
                                    <MenuItem value={null}>Hemmesi</MenuItem>
                                    <MenuItem
                                        className="text-green"
                                        value={true}
                                    >
                                        Aktiw
                                    </MenuItem>
                                    <MenuItem
                                        className="text-red"
                                        value={false}
                                    >
                                        Aktiw däl
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <Button
                        startIcon={<FilterAltOutlined />}
                        variant="contained"
                        className="h-[42px] !text-[12px] bg-primary-light font-roboto"
                        onClick={() => getFilter()}
                    >
                        Filter
                    </Button>
                </div>
            </div>
            <div className="w-[95%] mt-6 mx-auto bg-white">
                <table className="w-full border-collapse ">
                    <thead>
                        <tr className="border-b-2">
                            <th className="py-4 pl-8 text-left px-5 font-roboto">
                                Işgäriň ady
                            </th>
                            <th className="py-4 px-5 font-roboto">Login</th>
                            <th className="py-4 px-5 font-roboto">Wezipesi</th>
                            <th className="py-4 px-5 font-roboto">Ýagdaýy</th>
                            <th className="py-4 px-5 font-roboto">
                                Hereketler
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item) => {
                            return (
                                <tr className="border-b-2">
                                    <td className="py-4   !max-w-[150px] text-left px-5 font-roboto">
                                        <div className="text-left flex w-full font-roboto justify-start">
                                            {item?.active ? (
                                                <div
                                                    className={
                                                        "w-[15px] h-[15px] mt-1 mr-2 bg-green rounded-[100%]"
                                                    }
                                                ></div>
                                            ) : (
                                                <div
                                                    className={
                                                        "w-[15px] h-[15px] mt-1 mr-2 bg-red rounded-[100%]"
                                                    }
                                                ></div>
                                            )}
                                            {item?.username}
                                        </div>
                                    </td>
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.login}
                                    </td>
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.role == 1
                                            ? "Admin"
                                            : item?.role == 2
                                            ? "Operator"
                                            : "Ulanyjy"}
                                    </td>
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.active ? "Işjeň" : "Işjeň däl"}
                                    </td>

                                    <td className="py-4 px-5 font-roboto text-primary-dark cursor-pointer">
                                        <Edit
                                            onClick={() => {
                                                setUpdate(true);
                                                setEmployee(item);
                                            }}
                                        />
                                        {item?.active ? (
                                            <PersonOffOutlined
                                                onClick={() =>
                                                    DisActiveEmployee(item?.id)
                                                }
                                                className="text-red ml-2"
                                            />
                                        ) : (
                                            <>
                                                <PersonOutlineOutlined
                                                    onClick={() =>
                                                        ActiveEmployee(item?.id)
                                                    }
                                                    className="text-green ml-2"
                                                />
                                                <Delete
                                                    onClick={() =>
                                                        DeleteUser(item?.id)
                                                    }
                                                    className="text-red ml-2"
                                                />
                                            </>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default React.memo(Users);
