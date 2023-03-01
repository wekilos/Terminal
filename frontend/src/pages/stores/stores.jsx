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
    Select,
    TextField,
} from "@mui/material";
import { Modal, message } from "antd";
import CreateStore from "./createStore";
import { axiosInstance } from "../../utils/axiosIntance";

const Stores = () => {
    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState(false);
    const [storeData, setStoreData] = useState({});
    const [data, setData] = useState([]);
    const [fullName, setFullName] = useState("");
    const [active, setActive] = useState(null);

    useEffect(() => {
        getStores();
    }, []);

    const fillterData = () => {
        getStores();
    };
    const getStores = () => {
        axiosInstance
            .get("/api/store/all", {
                params: {
                    fullName: fullName,
                    active: active,
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
    const updateStore = () => {
        console.log(storeData);
        if (
            storeData.title.length > 0 &&
            storeData.address.length > 0 &&
            storeData.code.length > 0
        ) {
            axiosInstance
                .patch("/api/store/update", storeData)
                .then((data) => {
                    if (data.data == "BU id boyuncha Store status yok!") {
                        message.warning("Gaytadan Barlan!");
                    } else {
                        message.success(data.data);
                        getStores();
                        setUpdate(false);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    message.warning("Network error!");
                });
        } else {
            message.warning("Maglumatlary doly girizin!");
        }
    };

    const DisActiveStore = (id) => {
        axiosInstance
            .patch("/api/store/disActive/" + id)
            .then((data) => {
                getStores();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const ActiveStore = (id) => {
        axiosInstance
            .patch("/api/store/active/" + id)
            .then((data) => {
                getStores();
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
                    <CreateStore
                        getStores={getStores}
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
                    {/* <UpdateStore
                        storeData={storeData}
                        onClose={() => setUpdate(false)}
                    /> */}
                    <div className="w-full pt-0">
                        <h1 className="font-roboto text-black text-[24px] pb-4">
                            Dükan üýtgetmek
                        </h1>
                        <div className="my-3">
                            <TextField
                                className="h-[42px] font-roboto w-full"
                                id="outlined-basic"
                                label="Dükanyň ady"
                                variant="outlined"
                                size="small"
                                value={storeData.title}
                                onChange={(e) =>
                                    setStoreData({
                                        ...storeData,
                                        title: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="my-3">
                            <TextField
                                className="h-[42px] font-roboto w-full"
                                id="outlined-basic"
                                label="Dükanyň kody"
                                variant="outlined"
                                size="small"
                                value={storeData.code}
                                onChange={(e) =>
                                    setStoreData({
                                        ...storeData,
                                        code: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="my-3">
                            <TextField
                                className="h-[42px] font-roboto w-full"
                                id="outlined-basic"
                                label="Dükanyň salgysy"
                                variant="outlined"
                                size="small"
                                value={storeData.address}
                                onChange={(e) =>
                                    setStoreData({
                                        ...storeData,
                                        address: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="my-3">
                            <TextField
                                className="h-[42px] font-roboto w-full"
                                id="outlined-basic"
                                label="Dükanyň telefon nomeri"
                                variant="outlined"
                                size="small"
                                type="number"
                                value={storeData?.phone}
                                onChange={(e) =>
                                    setStoreData({
                                        ...storeData,
                                        phone: +e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="w-full inline-flex justify-end mt-10">
                            <div className="mr-4">
                                <Button
                                    onClick={() => setUpdate(false)}
                                    color="error"
                                    variant="outlined"
                                >
                                    Goýbolsun et
                                </Button>
                            </div>
                            <div className="mr-0">
                                <Button
                                    onClick={() => updateStore()}
                                    variant="outlined"
                                >
                                    Üýtget
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <div className="w-[95%] mx-auto">
                <div className="w-[100%]  py-4  m-auto inline-flex justify-between">
                    <h5 className="text-[24px] leading-[42px] text-black font-[500] font-roboto whitespace-nowrap">
                        Dükanlar
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
                                label="Dükanyň ady"
                                variant="outlined"
                                size="small"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                        fillterData();
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
                                    Ýagdaýy
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    // value={age}
                                    label="Wezipesi"
                                    onChange={(e) => setActive(e.target.value)}
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
                        onClick={() => fillterData()}
                        startIcon={<FilterAltOutlined />}
                        variant="contained"
                        className="h-[42px] !text-[12px] bg-primary-light font-roboto"
                    >
                        Filter
                    </Button>
                </div>
            </div>
            <div className="w-[95%] mt-6 mx-auto bg-white">
                <table className="w-full border-collapse ">
                    <thead>
                        <tr className="border-b-2">
                            <th className="py-4 px-5 font-roboto">
                                Dükanyň kody
                            </th>
                            <th className="py-4 px-5 font-roboto">
                                Dükanyň ady
                            </th>
                            <th className="py-4 px-5 font-roboto">
                                Dükanyň salgysy
                            </th>
                            <th className="py-4 px-5 font-roboto">
                                Işgär sany
                            </th>
                            <th className="py-4 px-5 font-roboto">
                                Dükanyň telefon nomeri
                            </th>
                            <th className="py-4 px-5 font-roboto">
                                Hereketler
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item) => {
                            return (
                                <tr
                                    key={item.id + "store"}
                                    className="border-b-2"
                                >
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
                                            <b>{item?.code}</b>
                                        </div>
                                    </td>
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.title}
                                    </td>
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.address}
                                    </td>
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.Employees?.length}
                                    </td>
                                    <td className="py-4 px-5 font-roboto">
                                        {item?.phone}
                                    </td>
                                    <td className="py-4 px-5 font-roboto text-primary-dark">
                                        <Edit
                                            onClick={() => {
                                                setUpdate(true);
                                                setStoreData(item);
                                            }}
                                        />
                                        {item?.active ? (
                                            <PersonOffOutlined
                                                onClick={() =>
                                                    DisActiveStore(item?.id)
                                                }
                                                className="text-red ml-2"
                                            />
                                        ) : (
                                            <PersonOutlineOutlined
                                                onClick={() =>
                                                    ActiveStore(item?.id)
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

export default Stores;
