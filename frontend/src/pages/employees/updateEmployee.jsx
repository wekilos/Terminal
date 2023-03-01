import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
    FormControl,
    InputLabel,
    MenuItem,
    TextField,
    Select,
    Button,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";

const UpdateStore = (props) => {
    const [personName, setPersonName] = React.useState(
        props.storeData ? props.storeData.stuff : []
    );
    const theme = useTheme();
    const [data, setData] = useState(
        props.storeData
            ? props.storeData
            : {
                  name: "",
                  address: "",
                  number: "",
                  stuff: [],
              }
    );

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const names = [
        "Oliver Hansen",
        "Van Henry",
        "April Tucker",
        "Ralph Hubbard",
        "Omar Alexander",
        "Carlos Abbott",
        "Miriam Wagner",
        "Bradley Wilkerson",
        "Virginia Andrews",
        "Kelly Snyder",
    ];

    function getStyles(name, personName, theme) {
        return {
            fontWeight:
                personName.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    const handleChange = (event) => {
        console.log(event.target.value);
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );

        setData({ ...data, stuff: event.target.value });
    };

    const createStore = () => {
        console.log(data);
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
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    value={data.name}
                />
            </div>
            <div className="my-3">
                <TextField
                    className="h-[42px] font-roboto w-full"
                    id="outlined-basic"
                    label="Dükanyň salgysy"
                    variant="outlined"
                    size="small"
                    onChange={(e) =>
                        setData({ ...data, address: e.target.value })
                    }
                    value={data.address}
                />
            </div>
            <div className="my-3">
                <TextField
                    className="h-[42px] font-roboto w-full"
                    id="outlined-basic"
                    label="Dükanyň telefon nomeri"
                    variant="outlined"
                    size="small"
                    onChange={(e) =>
                        setData({ ...data, number: e.target.value })
                    }
                    value={data.number}
                />
            </div>
            <FormControl sx={{ width: "100%" }}>
                <InputLabel id="demo-multiple-name-label">Işgärler</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
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

export default React.memo(UpdateStore);
