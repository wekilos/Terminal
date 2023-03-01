import React, { useEffect, useRef, useState } from "react";
import profile from "../images/profile.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import { logout } from "../utils";
import { useHistory, useLocation } from "react-router-dom";
const Header = () => {
    const [open, setOpen] = useState(false);
    const history = useHistory();
    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpen(false);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const logoutUser = () => {
        logout();
        history.push({ pathname: "/" });
    };
    const location = useLocation();
    return (
        <div className="w-full h-[52px] bg-white pt-0 sticky top-0">
            <div className="w-[95%] mx-auto inline-flex justify-between">
                <div className="text-primary-dark font-[600] text-[22px] font-eczar leading-[52px] whitespace-nowrap">
                    Admin Panel
                </div>
                <div className="leading-[48px] box-border h-[52px] font-roboto text-black text-[16px] ">
                    <Link
                        className={
                            (location.pathname == "/terminal" &&
                                "text-primary-dark pb-[15px] border-b-[3px] ") +
                            "text-black font-roboto mr-8 text-[16px] hover:text-primary-dark pb-[15px] hover:border-b-[3px] border-b-primary-light border-solid "
                        }
                        to="/terminal"
                    >
                        Terminallar
                    </Link>
                    <Link
                        className={
                            (location.pathname == "/toleg" &&
                                "text-primary-dark pb-[15px] border-b-[3px] ") +
                            "text-black font-roboto mr-8 text-[16px] hover:text-primary-dark pb-[15px] hover:border-b-[3px] border-b-primary-light border-solid "
                        }
                        to="/toleg"
                    >
                        Tolegler
                    </Link>
                    <Link
                        className={
                            (location.pathname == "/hasap" &&
                                "text-primary-dark pb-[15px] border-b-[3px] ") +
                            "text-black font-roboto mr-8 text-[16px] hover:text-primary-dark pb-[15px] hover:border-b-[3px] border-b-primary-light border-solid "
                        }
                        to="/hasap"
                    >
                        Hasaplar
                    </Link>
                    <Link
                        className={
                            (location.pathname == "/users" &&
                                "text-primary-dark pb-[15px] border-b-[3px] ") +
                            "text-black font-roboto mr-8 text-[16px] hover:text-primary-dark pb-[15px] hover:border-b-[3px] border-b-primary-light border-solid "
                        }
                        to="/users"
                    >
                        Ulanyjylar
                    </Link>
                </div>
                <div className="inline-flex">
                    <div
                        onClick={() => setOpen(true)}
                        ref={wrapperRef}
                        className="inline-flex h-[60px] pt-[10px] hover:text-primary-light relative cursor-pointer"
                    >
                        <img
                            className="h-[30px] object-contain rounded-[100%] mr-1"
                            src={profile}
                            alt=""
                        />
                        <KeyboardArrowDownIcon className="mt-1 hover:text-primary-light" />
                        {open && (
                            <div className="text-left absolute bg-white w-[150px] text-[16px] right-0 top-[50px] shadow-sm rounded-[4px] text-black hover:text-black cursor-pointer">
                                <div
                                    onClick={() => logoutUser()}
                                    className="pl-[15px] border-b-2 h-[40px] leading-[40px] hover:bg-[#d5d5d5] rounded-b-[4px]"
                                >
                                    Ulgamdan cykmak
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Header);
