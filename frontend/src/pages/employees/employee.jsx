import React, { useEffect, useState } from "react";

import {
    Add,
    FilterAltOutlined,
    Edit,
    PersonOffOutlined,
    PersonOutlineOutlined,
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
import { Modal } from "antd";
import CreateEmployee from "./createEmployee";
import { axiosInstance } from "../../utils/axiosIntance";

const Stores = () => {
    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState(false);
    const [storeData, setStoreData] = useState();
    const [data, setData] = useState([]);
    const [status, setStatus] = useState([]);
    const [filter, setFilter] = useState({
        username: "",
        EmployeeStatusId: 0,
        active: null,
    });

    const [employee, setEmployee] = useState({
        password: "",
        username: "",
        firstname: "",
        phone: "",
        EmployeeStatusId: 0,
        StoreId: 0,
    });
    const [stores, setStores] = useState([]);

    useEffect(() => {
        getEmployess();
        getEmployeeStatuses();
        getStores();
    }, []);

    const getEmployess = () => {
        console.log(filter);
        axiosInstance
            .get("/api/employee/all", {
                params: {
                    username: filter?.username,
                    EmployeeStatusId: filter?.EmployeeStatusId,
                    active: filter?.active,
                },
            })
            .then((data) => {
                console.log(data.data);
                setData(data.data);
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
    const getFilter = () => {
        getEmployess();
    };
    const updateEmployee = () => {
        axiosInstance
            .patch("/api/employee/update", employee)
            .then((data) => {
                console.log(data.data);
                getEmployess();
                setUpdate(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const DisActiveEmployee = (id) => {
        axiosInstance
            .patch("/api/employee/disActive/" + id)
            .then((data) => {
                getEmployess();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const ActiveEmployee = (id) => {
        axiosInstance
            .patch("/api/employee/active/" + id)
            .then((data) => {
                getEmployess();
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
                    <CreateEmployee
                        getEmployess={getEmployess}
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
                                value={employee.firstname}
                                onChange={(e) =>
                                    setEmployee({
                                        ...employee,
                                        firstname: e.target.value,
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
                                value={employee.username}
                                onChange={(e) =>
                                    setEmployee({
                                        ...employee,
                                        username: e.target.value,
                                    })
                                }
                            />
                        </div>
                        {/* <div className="my-3">
                            <TextField
                                className="h-[42px] font-roboto w-full"
                                id="outlined-basic"
                                label="Paroly"
                                variant="outlined"
                                size="small"
                                value={employee.password}
                                onChange={(e) =>
                                    setEmployee({
                                        ...employee,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div> */}
                        <div className="my-3">
                            <TextField
                                className="h-[42px] font-roboto w-full"
                                id="outlined-basic"
                                label="Telefon"
                                variant="outlined"
                                size="small"
                                type="number"
                                value={employee.phone}
                                onChange={(e) =>
                                    setEmployee({
                                        ...employee,
                                        phone: +e.target.value,
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
                                value={employee.EmployeeStatusId}
                                onChange={(e) =>
                                    setEmployee({
                                        ...employee,
                                        EmployeeStatusId: e.target.value,
                                    })
                                }
                            >
                                <MenuItem disabled value={0}></MenuItem>
                                {status?.map((item) => {
                                    return (
                                        <MenuItem value={item?.id}>
                                            {item?.title}
                                        </MenuItem>
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
                                value={employee.StoreId}
                                onChange={(e) =>
                                    setEmployee({
                                        ...employee,
                                        StoreId: e.target.value,
                                    })
                                }
                            >
                                <MenuItem disabled value={0}></MenuItem>
                                {stores?.map((item) => {
                                    return (
                                        <MenuItem value={item?.id}>
                                            {item?.title}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
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
                                    onClick={() => updateEmployee()}
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
                                label="Işgär ýa-da Ulanyjy ady"
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
                        {/* <div className="mr-4">
                            <TextField
                                className="h-[42px] font-roboto mr-4"
                                id="outlined-basic"
                                label="Ulanyjy ady"
                                variant="outlined"
                                size="small"
                            />
                        </div> */}
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
                                    // value={age}
                                    label="Wezipesi"
                                    onChange={(e) =>
                                        setFilter({
                                            ...filter,
                                            EmployeeStatusId: e.target.value,
                                        })
                                    }
                                >
                                    <MenuItem value={0}>Hemmesi</MenuItem>
                                    {status?.map((item) => {
                                        return (
                                            <MenuItem value={item?.id}>
                                                {item?.title}
                                            </MenuItem>
                                        );
                                    })}
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
                            {/* <th className="py-4 px-5 w-[30px] font-roboto">
                                Ýagdaýy
                            </th> */}
                            <th className="py-4 px-5 font-roboto">
                                Işgäriň ady
                            </th>
                            <th className="py-4 px-5 font-roboto">Login</th>
                            <th className="py-4 px-5 font-roboto">Telefon</th>
                            <th className="py-4 px-5 font-roboto">
                                Işleýän dükany
                            </th>
                            <th className="py-4 px-5 font-roboto">Wezipesi</th>
                            <th className="py-4 px-5 font-roboto">
                                Hereketler
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item) => {
                            return (
                                <tr className="border-b-2">
                                    <td className="py-4 px-5 font-roboto">
                                        <div className="flex w-auto font-roboto justify-center">
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
                                            {item?.firstname}
                                        </div>
                                    </td>
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.username}
                                    </td>
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.phone}
                                    </td>
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.Store?.title}
                                    </td>
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.EmployeeStatus?.title}
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
                                            <PersonOutlineOutlined
                                                onClick={() =>
                                                    ActiveEmployee(item?.id)
                                                }
                                                className="text-green ml-2"
                                            />
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

export default React.memo(Stores);
