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
import { axiosInstance } from "../../utils/axiosIntance";

const Tolegler = () => {
    const [data, setData] = useState([]);
    const [money, setMoney] = useState(0);
    const [realMoney, setRealMoney] = useState(0);
    const [filter, setFilter] = useState({
        name: "",
    });

    useEffect(() => {
        getHasaplar();
    }, []);

    const getHasaplar = () => {
        console.log(filter);
        axiosInstance
            .get("/api/toleg/all")
            .then((data) => {
                console.log("hasap", data.data);
                setData(data.data);
                let mon = 0;
                data.data?.map((item) => {
                    mon = mon + item?.money;
                });
                setMoney(mon);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getFilter = () => {
        getHasaplar();
    };

    return (
        <div className="w-full bg-background min-h-[100vh] pt-8 pb-8">
            <div className="w-[95%] mx-auto">
                <div className="w-[100%]  py-4  m-auto inline-flex justify-between">
                    <h5 className="text-[24px] leading-[42px] text-black font-[500] font-roboto whitespace-nowrap">
                        Tölegler
                    </h5>
                </div>

                {/* <div className="w-[100%]  bg-white px-4 py-4  m-auto inline-flex justify-between">
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
                </div> */}
            </div>
            <div className="w-[95%] mt-6 mx-auto bg-white">
                <table className="w-full border-collapse ">
                    <thead>
                        <tr className="border-b-2">
                            <th className="py-4 pl-8 text-left px-5 font-roboto">
                                Terminal
                            </th>

                            <th className="py-4 px-5 font-roboto">
                                Pul mukdar
                            </th>

                            <th className="py-4 px-5 font-roboto">Wagty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item) => {
                            return (
                                <tr className="border-b-2">
                                    <td className="py-4   !max-w-[150px] text-left px-5 font-roboto">
                                        {item?.Terminal?.name}
                                    </td>

                                    <td className="py-4 px-5 font-roboto">
                                        {item?.money} Manat
                                    </td>

                                    <td className="py-4 px-5 font-roboto text-primary-dark cursor-pointer">
                                        {item?.createdAt.slice(0, 10)} (
                                        {item?.createdAt.slice(11, 16)})
                                    </td>
                                </tr>
                            );
                        })}
                        <tr className="border-b-2">
                            <th className="py-4 pl-8  !max-w-[150px] text-left px-5 font-roboto">
                                Jemi
                            </th>

                            <th className="py-4 px-5 font-roboto">
                                {money} Manat
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default React.memo(Tolegler);
