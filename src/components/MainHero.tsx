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
            <div className="h-[700px] w-full overflow-visible bg-white">
                <div className="flex h-full w-full flex-col items-center justify-center">
                    <MouseParallaxContainer
                        className="parallax relative "
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
                            className="absolute left-1/3  z-20 flex h-full w-auto items-center justify-center "
                        >
                            <Image
                                src={bengu}
                                alt=""
                                width="600"
                                height="500"
                            />
                        </MouseParallaxChild>
                        <MouseParallaxChild
                            factorX={0.2}
                            factorY={0.2}
                            className="absolute left-[20%] flex h-full w-auto items-center justify-center"
                        >
                            <Image
                                src={reddots}
                                alt=""
                                width="1100"
                                height="800"
                                style={{ filter: "opacity(80%)" }}
                            />
                        </MouseParallaxChild>
                        <MouseParallaxChild
                            factorX={-0.3}
                            factorY={0.3}
                            className="absolute right-[26%] top-20 flex h-full w-auto items-start justify-center"
                        >
                            <Image src={eye} alt="" width="200" height="200" />
                        </MouseParallaxChild>
                        <MouseParallaxChild
                            factorX={0.5}
                            factorY={-0.2}
                            className="absolute left-[30%] top-12 flex h-full w-auto items-start justify-center"
                        >
                            <Image
                                src={vinil}
                                alt=""
                                width="300"
                                height="300"
                            />
                        </MouseParallaxChild>
                        <p className="font-play absolute bottom-80 left-60 -rotate-90 text-6xl font-bold text-black">
                            BENGU ASLAN
                        </p>
                        <p className="font-play absolute bottom-0 right-64 z-20 text-[16rem] font-bold text-[#B90223] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
                            BademArt
                        </p>
                    </MouseParallaxContainer>
                </div>
            </div>
        </>
    );
}
