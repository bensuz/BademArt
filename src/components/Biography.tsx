import Image from "next/image";
import React from "react";
import purplewoman from "../../public/assets/purplewoman.jpg";
import grandparents from "../../public/assets/grandparents.jpg";
import ruv from "../../public/assets/ruv.jpg";
import mural from "../../public/assets/mural.jpg";
import LogoDraw from "./LogoDraw";

const Biography = () => {
    return (
        <section className=" max-w-screen flex min-h-fit w-full flex-col items-center overflow-hidden bg-[#E6E3CF] pt-20 text-[#333333] shadow-[-10px_0px_20px_5px_rgba(0,0,0,0.2)] ">
            <div className="flex w-full max-w-[1900px] flex-col items-center justify-center  pb-20">
                <p className="font-play xl:6xl w-full self-center p-4 pt-20 text-2xl  md:p-10 md:text-4xl lg:text-5xl xl:w-2/3">
                    Bengu Aslan, a multi-talented artist, has embarked on a
                    captivating artistic journey that spans the realms of{" "}
                    <span className="font-bold italic">
                        painting, pencil drawing, digital illustration, tattoo
                        design, knitting, and ceramic art.
                    </span>{" "}
                </p>
                <p className="font-play xl:6xl w-full self-center  p-4 text-2xl  md:p-10 md:text-4xl lg:text-5xl xl:w-2/3">
                    Hailing from <span className="font-bold">Turkey</span>,
                    Bengu's vibrant and dynamic{" "}
                    <span className="italic">creations</span> reflect a deep{" "}
                    <span className="italic">connection </span>
                    to her roots and an insatiable{" "}
                    <span className="italic">curiosity</span> about the world.
                </p>
            </div>
            <div className="mx-auto mb-20 min-h-fit w-full max-w-[1900px] max-2xl:flex max-2xl:flex-wrap max-2xl:items-center max-2xl:justify-center max-2xl:gap-10  max-2xl:py-10  2xl:relative  2xl:h-[80rem]">
                <Image
                    src={purplewoman}
                    alt=""
                    className="h-auto w-[40rem] rounded-md shadow-lg shadow-gray-600 2xl:absolute 2xl:left-10 2xl:top-20"
                ></Image>
                <Image
                    src={grandparents}
                    alt=""
                    className="h-auto w-[40rem] rounded-md shadow-lg shadow-gray-600 2xl:absolute 2xl:right-10 2xl:top-40"
                ></Image>
                <Image
                    src={mural}
                    alt=""
                    className="h-auto w-[40rem] rounded-md  shadow-lg shadow-gray-600 2xl:absolute 2xl:left-[40rem] 2xl:top-[30rem]"
                ></Image>
                <Image
                    src={ruv}
                    alt=""
                    className="h-auto w-[40rem] rounded-md  shadow-lg shadow-gray-600 2xl:absolute 2xl:right-[22rem] 2xl:top-10"
                ></Image>
            </div>

            <div className="mx-auto flex h-fit w-full max-w-[1900px] flex-col-reverse xl:flex-row xl:items-end xl:justify-center">
                <div className="font-nunito flex w-full items-end justify-end p-4 xl:w-2/5 xl:p-10  ">
                    <p className="w-full self-end justify-self-end text-2xl sm:text-3xl md:text-4xl lg:text-4xl  xl:w-1/2">
                        From crafting bespoke tattoo designs to the tactile
                        artistry of knitting, Bengu&apos;s creations transcend
                        traditional boundaries.
                    </p>
                </div>
                <div className="flex w-full flex-col items-start justify-start xl:w-1/2 ">
                    <h2 className="font-play p-4  pt-20 text-2xl italic sm:text-3xl md:text-4xl lg:text-5xl xl:w-full xl:p-10 xl:text-5xl">
                        A Symphony of Mediums:
                    </h2>
                    <p className="font-play p-4 text-2xl sm:text-3xl md:text-4xl  lg:text-5xl xl:w-full xl:p-10 xl:text-5xl">
                        Bengu&apos;s artistic palette is as diverse as her
                        experiences. In the realm of painting, Bengu weaves
                        emotions onto canvas, capturing the essence of her
                        narrative. Pencil drawings unveil intricate details,
                        while digital illustrations showcase a mastery of modern
                        mediums.
                    </p>
                </div>
            </div>
            <LogoDraw />
        </section>
    );
};

export default Biography;
