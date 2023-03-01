import React from "react";

import { Add, FilterAltOutlined } from "@mui/icons-material";
import "../../css/main.css";
import {
    Button,
    FormControl,
    FormHelperText,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { DatePicker, ConfigProvider } from "antd";
import tk_TK from "antd/locale/tk_TK";
import Calendar from "../../components/calendar";
const Loans = () => {
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <div className="w-full bg-background min-h-[100vh] pt-8 pb-8">
            <div className="w-[95%] mx-auto">
                <div className="w-[100%]  py-4  m-auto inline-flex justify-between">
                    <h5 className="text-[24px] leading-[42px] text-black font-[500] font-roboto whitespace-nowrap">
                        Agylar ( 430 )
                    </h5>

                    <Button
                        startIcon={<Add />}
                        variant="contained"
                        className="h-[42px] !text-[12px] bg-primary-light"
                    >
                        Algy döretmek
                    </Button>
                </div>

                <div className="w-[100%]  py-4  m-auto inline-flex justify-between">
                    <div className="inline-flex justify-start">
                        <TextField
                            className="h-[42px]"
                            id="outlined-basic"
                            label="Müşderi"
                            variant="outlined"
                            size="small"
                        />
                        <TextField
                            className="h-[42px]"
                            id="outlined-basic"
                            label="Şertnama nomer"
                            variant="outlined"
                            size="small"
                        />
                        <ConfigProvider locale={tk_TK}>
                            <DatePicker
                                format="D/MM/YYYY"
                                locale={"tk"}
                                onChange={onChange}
                            />
                        </ConfigProvider>
                        <FormControl size="small" sx={{ m: 0, minWidth: 150 }}>
                            <InputLabel id="demo-simple-select-helper-label">
                                Algy görnüşi
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                // value={age}
                                label="Age"
                                // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <Button
                        startIcon={<FilterAltOutlined />}
                        variant="contained"
                        className="h-[42px] !text-[12px] bg-primary-light"
                    >
                        Filter
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Loans);
