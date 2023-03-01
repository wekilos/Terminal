import React from "react";

import {
    StoreOutlined,
    BarChartOutlined,
    ArrowCircleUpOutlined,
    ArrowCircleDownOutlined,
} from "@mui/icons-material";
import "../../css/main.css";
const Customers = () => {
    return (
        <div className="bg-background min-h-[100vh] pt-8 pb-8">
            <div className="w-[90%] m-auto">
                <div className="w-[100%] bg-white p-4 my-4 m-auto inline-flex justify-center">
                    <div className="bg-primary-light bg-opacity-20 leading-[55px]  h-[62px] w-[62px] rounded-[100%]">
                        <StoreOutlined className="text-primary-light !text-[36px]" />
                    </div>
                    <div className="text-left pl-4">
                        <p className="text-[16px] font-roboto">
                            "Berkarar" söwda dynç alyş merkezi
                        </p>
                        <h1 className="text-[24px] font-[500] font-eczar">
                            Maral
                        </h1>
                    </div>
                </div>
                <div className="w-full mx-auto py-4">
                    <h4 className="text-left py-2 font-roboto">Jemi hasabat</h4>
                    <div className="w-full grid gap-6 grid-cols-3">
                        <div className="w-[100%] bg-white p-4   m-auto inline-flex justify-start">
                            <div className="bg-primary-light bg-opacity-20 leading-[55px]  h-[62px] w-[62px] rounded-[100%]">
                                <BarChartOutlined className="text-primary-light !text-[36px]" />
                            </div>
                            <div className="text-left pl-4">
                                <p className="text-[16px] font-roboto">Satyş</p>
                                <h1 className="text-[24px] font-[500] font-eczar">
                                    97345 m
                                </h1>
                            </div>
                        </div>
                        <div className="w-[100%] bg-white p-4   m-auto inline-flex justify-start">
                            <div className="bg-green-light leading-[55px]  h-[62px] w-[62px] rounded-[100%]">
                                <ArrowCircleUpOutlined className="text-green !text-[36px]" />
                            </div>
                            <div className="text-left pl-4">
                                <p className="text-[16px] font-roboto">
                                    Tölenen töleg
                                </p>
                                <h1 className="text-[24px] font-[500] font-eczar">
                                    34565 m
                                </h1>
                            </div>
                        </div>
                        <div className="w-[100%] bg-white p-4   m-auto inline-flex justify-start">
                            <div className="bg-red-light leading-[55px]  h-[62px] w-[62px] rounded-[100%]">
                                <ArrowCircleDownOutlined className="text-red !text-[36px]" />
                            </div>
                            <div className="text-left pl-4">
                                <p className="text-[16px] font-roboto">
                                    Tölenmeli töleg
                                </p>
                                <h1 className="text-[24px] font-[500] font-eczar">
                                    60056 m
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto py-4">
                    <h4 className="text-left py-2 font-roboto">
                        Günlük hasabat
                    </h4>
                    <div className="w-full grid gap-6 grid-cols-3">
                        <div className="w-[100%] bg-white p-4   m-auto inline-flex justify-start">
                            <div className="bg-primary-light bg-opacity-20 leading-[55px]  h-[62px] w-[62px] rounded-[100%]">
                                <BarChartOutlined className="text-primary-light !text-[36px]" />
                            </div>
                            <div className="text-left pl-4">
                                <p className="text-[16px] font-roboto">Satyş</p>
                                <h1 className="text-[24px] font-[500] font-eczar">
                                    0 m
                                </h1>
                            </div>
                        </div>
                        <div className="w-[100%] bg-white p-4   m-auto inline-flex justify-start">
                            <div className="bg-green-light leading-[55px]  h-[62px] w-[62px] rounded-[100%]">
                                <ArrowCircleUpOutlined className="text-green !text-[36px]" />
                            </div>
                            <div className="text-left pl-4">
                                <p className="text-[16px] font-roboto">
                                    Tölenen töleg
                                </p>
                                <h1 className="text-[24px] font-[500] font-eczar">
                                    112 m
                                </h1>
                            </div>
                        </div>
                        <div className="w-[100%] bg-white p-4   m-auto inline-flex justify-start">
                            <div className="bg-red-light leading-[55px]  h-[62px] w-[62px] rounded-[100%]">
                                <ArrowCircleDownOutlined className="text-red !text-[36px]" />
                            </div>
                            <div className="text-left pl-4">
                                <p className="text-[16px] font-roboto">
                                    Tölenmeli töleg
                                </p>
                                <h1 className="text-[24px] font-[500] font-eczar">
                                    5724 m
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Customers);
