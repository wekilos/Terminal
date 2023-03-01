import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { TextField, Button } from "@mui/material";
import { axiosInstance } from "../../utils/axiosIntance";
import { message } from "antd";

const CreateStore = (props) => {
    const [data, setData] = useState({
        title: "",
        code: "",
        address: "",
    });

    const createStore = () => {
        console.log(data);
        if (
            data.title.length > 0 &&
            data.address.length > 0 &&
            data.code.length > 0
        ) {
            axiosInstance
                .post("/api/store/create", data)
                .then((data) => {
                    console.log(data.data);
                    if (data.data == "BU code boyuncha store status bar") {
                        message.warning("BU code boyuncha store status bar");
                    } else {
                        message.success("Success!");
                        props.getStores();
                        props.onClose();
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
    return (
        <div className="w-full pt-0">
            <h1 className="font-roboto text-black text-[24px] pb-4">
                Dükan döretmek
            </h1>
            <div className="my-3">
                <TextField
                    className="h-[42px] font-roboto w-full"
                    id="outlined-basic"
                    label="Dükanyň ady"
                    variant="outlined"
                    size="small"
                    value={data.title}
                    onChange={(e) =>
                        setData({ ...data, title: e.target.value })
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
                    value={data.code}
                    onChange={(e) => setData({ ...data, code: e.target.value })}
                />
            </div>
            <div className="my-3">
                <TextField
                    className="h-[42px] font-roboto w-full"
                    id="outlined-basic"
                    label="Dükanyň salgysy"
                    variant="outlined"
                    size="small"
                    value={data.address}
                    onChange={(e) =>
                        setData({ ...data, address: e.target.value })
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
                    value={data?.phone}
                    onChange={(e) =>
                        setData({ ...data, phone: +e.target.value })
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
                    <Button onClick={() => createStore()} variant="outlined">
                        Döret
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default React.memo(CreateStore);
