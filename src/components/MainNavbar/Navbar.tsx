"use client";

import Image from "next/image";
import React, { useState } from "react";
import bademred from "@/../public/assets/badem.png";
import bademwhite from "@/../public/assets/badem-white.png";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const MainNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        { name: "BIOGRAPHY", link: "#biography" },
        { name: "WORKS", link: "#works" },
        { name: "CONTACT", link: "#contact" },
        { name: "SHOP", link: "/shop" },
    ];
    const fadeInAnimationVariants = {
        initial: { opacity: 0, y: 0 },
        animate: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                type: "inertia",
                stiffness: 100,
                velocity: 100,
                delay: 0.2 * custom,
                damping: 10,
            },
        }),
        exit: (index: number) => ({
            opacity: 0,
            y: -100, // Adjust the value for the desired distance
            transition: {
                type: "inertia",
                stiffness: 1,
                velocity: -100,
                delay: 0.2 * index,
                damping: 10,
            },
        }),
    };

    return (
        <nav className=" fixed top-0 z-50 flex h-fit w-full items-center justify-between bg-transparent  sm:px-10">
            {isOpen ? (
                <Image
                    src={bademwhite}
                    alt="bademArt Logo"
                    className="z-50 h-20 w-auto md:h-28 lg:h-32 xl:h-36 2xl:h-40"
                ></Image>
            ) : (
                <Image
                    src={bademred}
                    alt="bademArt Logo"
                    className="z-50 h-20 w-auto md:h-28 lg:h-32 xl:h-36 2xl:h-44"
                ></Image>
            )}

            <div className="flex items-center justify-end ">
                <button
                    className="min-2xl:text-9xl z-50 mr-4 text-3xl text-red-600 sm:text-4xl md:mr-20 md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <IoClose className="text-white" />
                    ) : (
                        <IoIosMenu />
                    )}
                </button>
                <AnimatePresence mode="wait">
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.175 }}
                            className=" absolute left-0 top-0 z-40  flex h-screen w-full items-center justify-center bg-[url(../../public/assets/bg-black-dark.jpg)] bg-cover bg-no-repeat"
                        >
                            <ul className="font-play flex h-full w-full flex-col items-center justify-start  gap-20 pt-32 text-2xl font-medium text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
                                {items.map((i, index) => (
                                    <motion.li
                                        variants={fadeInAnimationVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        custom={index}
                                        key={index}
                                    >
                                        <Link
                                            href={i.link}
                                            className=" hover:text-[#b30000] "
                                        >
                                            {i.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default MainNavbar;
