"use client";

import React from "react";
import {
    MouseParallaxChild,
    MouseParallaxContainer,
} from "react-parallax-mouse";
import Image from "next/image";
import bengu from "../../public/assets/bengu.png";
import eye from "../../public/assets/eye.png";
import vinil from "../../public/assets/vinil.png";
import reddots from "../../public/assets/reddots.jpg";

export default function MainHero() {
    return (
        <>
            <div className="h-[50vh] w-full max-w-[1900px] overflow-visible lg:h-screen mt-20 ">
                <div className="h-full w-full overflow-visible pt-24 lg:p-20">
                    <MouseParallaxContainer
                        className="parallax relative overflow-visible"
                        containerStyle={{
                            width: "100%",
                            height: "100%",
                        }}
                        globalFactorX={0.3}
                        globalFactorY={0.3}
                        resetOnLeave
                    >
                        <MouseParallaxChild
                            factorX={-0.2}
                            factorY={-0.2}
                            className="absolute left-1/2 top-[3%] z-20 flex h-auto w-1/2 overflow-visible"
                        >
                            <Image
                                src={bengu}
                                alt=""
                                width="300"
                                height="300"
                                sizes="100%"
                                className="h-auto w-full -translate-x-1/2"
                            />
                        </MouseParallaxChild>
                        <MouseParallaxChild
                            factorX={0.2}
                            factorY={0.2}
                            className="absolute -top-10 left-1/2 z-10 mx-auto h-full w-full "
                        >
                            <Image
                                src={reddots}
                                alt=""
                                width="300"
                                height="300"
                                sizes="100%"
                                className="h-auto w-full -translate-x-1/2"
                                style={{ filter: "opacity(80%)" }}
                            />
                        </MouseParallaxChild>
                        <MouseParallaxChild
                            factorX={-0.3}
                            factorY={0.3}
                            className="absolute left-3/4 top-[15%] z-10  h-full w-auto "
                        >
                            <Image
                                src={eye}
                                alt=""
                                width="300"
                                height="300"
                                sizes="100%"
                                className="h-auto w-1/2 -translate-x-1/2"
                            />
                        </MouseParallaxChild>
                        <MouseParallaxChild
                            factorX={0.5}
                            factorY={-0.2}
                            className="absolute left-[25%] top-[9%] z-10 h-full w-auto"
                        >
                            <Image
                                src={vinil}
                                alt=""
                                width="300"
                                height="300"
                                sizes="100%"
                                className="h-auto w-1/2 -translate-x-1/2"
                            />
                        </MouseParallaxChild>
                        <div className="absolute z-20 h-full w-full">
                            <div className="relative left-[18%] top-[57%] h-fit w-fit -translate-x-1/2 -translate-y-1/2 sm:left-[25%] sm:top-[55%] md:left-[22%] md:top-[65%] lg:left-[17%] lg:top-[40%] xl:left-[15%] xl:top-[45%] min-[1500px]:left-[15%] min-[1500px]:top-[65%] ">
                                <p className="font-play absolute -left-10 top-28 z-20  w-96 -translate-x-1/2 -translate-y-1/2 -rotate-90 text-end text-lg font-bold text-slate-700 sm:-left-32 sm:text-xl md:text-2xl lg:top-1/3 lg:text-3xl xl:text-5xl">
                                    BENGU ASLAN
                                </p>
                                <p className="font-play absolute -left-[50%] top-[80%] z-20 h-1/2 w-fit text-[6rem]  font-bold text-[#b92702] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]  max-[560px]:text-[4rem] sm:-left-24 sm:text-[8rem]  md:-left-20  md:text-[8rem] lg:left-0 lg:text-[10rem]  lg:max-[1060px]:-left-20 xl:text-[13rem] 2xl:text-[16rem]">
                                    BademArt
                                </p>
                            </div>
                        </div>
                    </MouseParallaxContainer>
                </div>
            </div>
        </>
    );
}
