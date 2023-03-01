import React, { useEffect, useState } from "react";

import {
    Add,
    FilterAltOutlined,
    Edit,
    PersonOffOutlined,
    PersonOutlineOutlined,
    Delete,
    RequestQuote,
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
import CreateTerminal from "./createTerminal";
import { axiosInstance } from "../../utils/axiosIntance";

const Stores = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState(false);
    const [deleteTer, setDeleteTer] = useState(false);
    const [hasap, setHasap] = useState(false);
    const [data, setData] = useState([]);
    const [hasapData, setHasapData] = useState({
        real_money: 0,
        inkosator: "",
        UserId: userData.id,
        TerminalId: 0,
    });
    const [filter, setFilter] = useState({
        name: "",
    });

    const [employee, setEmployee] = useState({
        username: "",
        login: "",
        role: 0,
    });

    useEffect(() => {
        getTerminals();
    }, []);

    const getTerminals = () => {
        console.log(filter);
        axiosInstance
            .get("/api/terminal/all", {
                params: {
                    name: filter?.name,
                },
            })
            .then((data) => {
                console.log("terminal", data.data);
                setData(data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getFilter = () => {
        getTerminals();
    };
    const updateUser = () => {
        axiosInstance
            .patch("/api/terminal/update", employee)
            .then((data) => {
                console.log(data.data);
                getTerminals();
                setUpdate(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const DisActiveEmployee = (id) => {
        axiosInstance
            .patch("/api/terminal/disActive/" + id)
            .then((data) => {
                getTerminals();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const ActiveEmployee = (id) => {
        axiosInstance
            .patch("/api/terminal/active/" + id)
            .then((data) => {
                getTerminals();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deleteTerminal = (id) => {
        axiosInstance
            .patch("/api/terminal/delete/" + employee?.id)
            .then((data) => {
                message.success("Terminal pozuldy!");
                setDeleteTer(false);
                getTerminals();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const hasabat = () => {
        hasapData.TerminalId &&
        hasapData.UserId &&
        hasapData.inkosator.length > 0 &&
        hasapData.real_money
            ? axiosInstance
                  .post("/api/hasap/create", hasapData)
                  .then((data) => {
                      console.log(data.data);
                      getTerminals();
                      setHasap(false);
                  })
                  .catch((err) => {
                      console.log(err);
                  })
            : message.warning("Maglumaty Doly giriz!");
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
                    <CreateTerminal
                        getTerminals={getTerminals}
                        onClose={() => setOpen(false)}
                    />
                </div>
            </Modal>
            <Modal
                className="font-roboto"
                width={600}
                open={deleteTer}
                onCancel={() => setDeleteTer(false)}
                footer={false}
            >
                <div className="bg-white">
                    <div className="w-[100%]  py-4  m-auto inline-flex justify-between">
                        <h5 className="text-[24px] leading-[42px] text-black font-[500] font-roboto whitespace-nowrap">
                            Terminal öçürmek?
                        </h5>
                    </div>
                    <div className="w-full inline-flex justify-end mt-10">
                        <div className="mr-4">
                            <Button
                                onClick={() => setDeleteTer(false)}
                                color="error"
                                variant="outlined"
                            >
                                goýbolsun et
                            </Button>
                        </div>
                        <div className="mr-0">
                            <Button
                                onClick={() => deleteTerminal()}
                                variant="outlined"
                            >
                                öçürmek
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal
                className="font-roboto"
                width={600}
                open={hasap}
                onCancel={() => setHasap(false)}
                footer={false}
            >
                <div className="bg-white">
                    <div className="w-[100%]  py-4  m-auto inline-flex justify-between">
                        <h5 className="text-[24px] leading-[42px] text-black font-[500] font-roboto whitespace-nowrap">
                            Terminal Hasawat
                        </h5>
                    </div>
                    <div className="my-3">
                        <TextField
                            className="h-[42px] font-roboto w-full"
                            id="outlined-basic"
                            label="Terminaldan alynan pul"
                            variant="outlined"
                            size="small"
                            value={hasapData.real_money}
                            onChange={(e) =>
                                setHasapData({
                                    ...hasapData,
                                    real_money: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="my-3">
                        <TextField
                            className="h-[42px] font-roboto w-full"
                            id="outlined-basic"
                            label="Puly alan adam"
                            variant="outlined"
                            size="small"
                            value={hasapData.inkosator}
                            onChange={(e) =>
                                setHasapData({
                                    ...hasapData,
                                    inkosator: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className="w-full inline-flex justify-end mt-10">
                        <div className="mr-4">
                            <Button
                                onClick={() => setHasap(false)}
                                color="error"
                                variant="outlined"
                            >
                                goýbolsun et
                            </Button>
                        </div>
                        <div className="mr-0">
                            <Button
                                onClick={() => hasabat()}
                                variant="outlined"
                            >
                                hasap
                            </Button>
                        </div>
                    </div>
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
                            Terminal üýtgetmek
                        </h1>
                        <div className="my-3">
                            <TextField
                                className="h-[42px] font-roboto w-full"
                                id="outlined-basic"
                                label="Ady"
                                variant="outlined"
                                size="small"
                                value={employee.name}
                                onChange={(e) =>
                                    setEmployee({
                                        ...employee,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="my-3">
                            <TextField
                                className="h-[42px] font-roboto w-full"
                                id="outlined-basic"
                                label="Address"
                                variant="outlined"
                                size="small"
                                value={employee.address}
                                onChange={(e) =>
                                    setEmployee({
                                        ...employee,
                                        address: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="my-3 font-[600] text-[24px]">
                            key: {employee?.terminal_id}
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
                        Terminallar
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
                                label="Ady ýa-da Salgysy"
                                variant="outlined"
                                size="small"
                                value={filter?.name}
                                onChange={(e) =>
                                    setFilter({
                                        ...filter,
                                        name: e.target.value,
                                    })
                                }
                                onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                        getFilter();
                                    }
                                }}
                            />
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
                                Ady
                            </th>
                            <th className="py-4 px-5 font-roboto">Salgysy</th>
                            <th className="py-4 px-5 font-roboto">Puly</th>
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
                                            {item?.name}
                                        </div>
                                    </td>
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.address}
                                    </td>
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.money} Manat
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
                                        <RequestQuote
                                            onClick={() => {
                                                setHasap(true);
                                                setHasapData({
                                                    ...hasapData,
                                                    TerminalId: item.id,
                                                });
                                            }}
                                        />
                                        <Delete
                                            onClick={() => {
                                                setDeleteTer(true);
                                                setEmployee(item);
                                            }}
                                            className="text-red"
                                        />
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
