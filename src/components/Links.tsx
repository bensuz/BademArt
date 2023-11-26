"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const Links = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleMouseEnter = (linkNumber: number) => {
        setHoveredLink(linkNumber);
    };

    const handleMouseLeave = () => {
        setHoveredLink(null);
    };

    const slideLeftVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };
    const slideRightVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section className="font-play flex h-fit w-full flex-col items-center justify-start gap-12 text-3xl uppercase sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl ">
            <Link
                href=""
                className="group relative flex h-fit items-start justify-between hover:text-red-600 "
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
            >
                <motion.span
                    className="absolute left-[-2em] text-xl underline hover:text-red-600 md:text-xl xl:text-3xl"
                    variants={slideLeftVariants}
                    initial="hidden"
                    animate={hoveredLink === 1 ? "visible" : "hidden"}
                >
                    01
                </motion.span>
                Paintings
                <motion.div
                    className="-right-[75%] top-[22%] flex h-full items-start justify-start gap-2 max-2xl:hidden 2xl:absolute"
                    variants={slideRightVariants}
                    initial="hidden"
                    animate={hoveredLink === 1 ? "visible" : "hidden"}
                >
                    <p
                        className={`h-full w-fit font-sans text-8xl font-thin leading-6 text-slate-600 ${
                            hoveredLink !== 1 ? "hidden" : ""
                        }`}
                    >
                        /
                    </p>
                    <p
                        className={`h-full w-[20rem] font-sans text-xl font-medium leading-6 text-black  ${
                            hoveredLink !== 1 ? "hidden" : ""
                        }`}
                    >
                        unveil the gallery of paintings
                    </p>
                </motion.div>
            </Link>
            <Link
                href=""
                className="group relative hover:text-red-600"
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
            >
                <motion.span
                    className="absolute left-[-2em] text-3xl underline hover:text-red-600 md:text-xl xl:text-3xl"
                    variants={slideLeftVariants}
                    initial="hidden"
                    animate={hoveredLink === 2 ? "visible" : "hidden"}
                >
                    02
                </motion.span>
                Pencil Drawings
                <motion.div
                    className="-right-[45%] top-[22%] flex h-full items-start justify-start gap-2 max-2xl:hidden 2xl:absolute"
                    variants={slideRightVariants}
                    initial="hidden"
                    animate={hoveredLink === 2 ? "visible" : "hidden"}
                >
                    <p
                        className={`h-full w-fit font-sans text-8xl font-thin leading-6 text-slate-600 ${
                            hoveredLink !== 2 ? "hidden" : ""
                        }`}
                    >
                        /
                    </p>
                    <p
                        className={`h-full w-[20rem] font-sans text-xl font-medium leading-6 text-black  ${
                            hoveredLink !== 2 ? "hidden" : ""
                        }`}
                    >
                        intricately detailed pencil drawings
                    </p>
                </motion.div>
            </Link>
            <Link
                href=""
                className="group relative w-3/4 text-center  hover:text-red-600"
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
            >
                <motion.span
                    className="absolute left-[-5%] text-xl underline hover:text-red-600 sm:left-[-8%] sm:max-[718px]:left-[10%] md:left-[-10%] md:text-xl xl:left-[-1%] xl:text-3xl "
                    variants={slideLeftVariants}
                    initial="hidden"
                    animate={hoveredLink === 3 ? "visible" : "hidden"}
                >
                    03
                </motion.span>
                Digital Drawing / Illustrations
                <motion.div
                    className="-right-[10%] top-[22%] flex h-full items-start justify-start gap-2 max-2xl:hidden 2xl:absolute"
                    variants={slideRightVariants}
                    initial="hidden"
                    animate={hoveredLink === 3 ? "visible" : "hidden"}
                >
                    <p
                        className={`h-full w-fit font-sans text-8xl font-thin leading-6 text-slate-600 ${
                            hoveredLink !== 3 ? "hidden" : ""
                        }`}
                    >
                        /
                    </p>
                    <p
                        className={`h-full w-[10rem] font-sans text-xl font-medium leading-6 text-black  ${
                            hoveredLink !== 3 ? "hidden" : ""
                        }`}
                    >
                        digital realm of creativity
                    </p>
                </motion.div>
            </Link>
            <Link
                href=""
                className="group relative hover:text-red-600"
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={handleMouseLeave}
            >
                <motion.span
                    className="absolute left-[-2em] text-3xl text-xl underline hover:text-red-600 md:text-xl xl:text-3xl"
                    variants={slideLeftVariants}
                    initial="hidden"
                    animate={hoveredLink === 4 ? "visible" : "hidden"}
                >
                    04
                </motion.span>
                Tattoo Design
                <motion.div
                    className="-right-[55%] top-[22%] flex h-full items-start justify-start gap-2 max-2xl:hidden 2xl:absolute"
                    variants={slideRightVariants}
                    initial="hidden"
                    animate={hoveredLink === 4 ? "visible" : "hidden"}
                >
                    <p
                        className={`h-full w-fit font-sans text-8xl font-thin leading-6 text-slate-600 ${
                            hoveredLink !== 4 ? "hidden" : ""
                        }`}
                    >
                        /
                    </p>
                    <p
                        className={`h-full w-[20rem] font-sans text-xl font-medium leading-6 text-black  ${
                            hoveredLink !== 4 ? "hidden" : ""
                        }`}
                    >
                        artistry with body expression
                    </p>
                </motion.div>
            </Link>
            <Link
                href=""
                className="group relative hover:text-red-600"
                onMouseEnter={() => handleMouseEnter(5)}
                onMouseLeave={handleMouseLeave}
            >
                <motion.span
                    className="absolute left-[-2em] text-3xl text-xl underline hover:text-red-600 md:text-xl xl:text-3xl"
                    variants={slideLeftVariants}
                    initial="hidden"
                    animate={hoveredLink === 5 ? "visible" : "hidden"}
                >
                    05
                </motion.span>
                Knitting
                <motion.div
                    className="-right-[85%] top-[22%] flex h-full items-start justify-start gap-2 max-2xl:hidden 2xl:absolute"
                    variants={slideRightVariants}
                    initial="hidden"
                    animate={hoveredLink === 5 ? "visible" : "hidden"}
                >
                    <p
                        className={`h-full w-fit font-sans text-8xl font-thin leading-6 text-slate-600 ${
                            hoveredLink !== 5 ? "hidden" : ""
                        }`}
                    >
                        /
                    </p>
                    <p
                        className={`h-full w-[20rem] font-sans text-xl font-medium leading-6 text-black  ${
                            hoveredLink !== 5 ? "hidden" : ""
                        }`}
                    >
                        beauty of handcrafted textiles
                    </p>
                </motion.div>
            </Link>
            <Link
                href=""
                className="group relative hover:text-red-600"
                onMouseEnter={() => handleMouseEnter(6)}
                onMouseLeave={handleMouseLeave}
            >
                <motion.span
                    className="absolute left-[-2em] text-3xl text-xl underline hover:text-red-600 md:text-xl xl:text-3xl"
                    variants={slideLeftVariants}
                    initial="hidden"
                    animate={hoveredLink === 6 ? "visible" : "hidden"}
                >
                    06
                </motion.span>
                Ceramic
                <motion.div
                    className="-right-[85%] top-[22%] flex h-full items-start justify-start gap-2 max-2xl:hidden 2xl:absolute"
                    variants={slideRightVariants}
                    initial="hidden"
                    animate={hoveredLink === 6 ? "visible" : "hidden"}
                >
                    <p
                        className={`h-full w-fit font-sans text-8xl font-thin leading-6 text-slate-600 ${
                            hoveredLink !== 6 ? "hidden" : ""
                        }`}
                    >
                        /
                    </p>
                    <p
                        className={`h-full w-[20rem] font-sans text-xl font-medium leading-6 text-black  ${
                            hoveredLink !== 6 ? "hidden" : ""
                        }`}
                    >
                        versatility of the medium
                    </p>
                </motion.div>
            </Link>
        </section>
    );
};

export default Links;
