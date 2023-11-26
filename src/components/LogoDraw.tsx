"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LogoDraw = () => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });

    const isInView = useInView(ref, { once: true });

    const xMove = useTransform(scrollYProgress, [0, 1], ["-80%", "80%"]);

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    const svgVariants = {
        hidden: { rotate: -180 },
        visible: {
            rotate: 0,
            transition: { duration: 1 },
        },
    };

    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0,
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 10,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.div
            className="mx-auto  flex h-[30rem] w-1/3 items-start justify-center self-start justify-self-start overflow-hidden "
            ref={ref}
            style={{ x: xMove }}
            initial={{ opacity: 0 }} // Set initial opacity to 0
            animate={{ opacity: 0.7 }} // Animate opacity to 1 when in view
        >
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                height="400"
                width="400"
                variants={svgVariants}
                initial="hidden"
                animate="visible"
                style={{ rotate: rotate }}
            >
                <motion.path
                    d="M50.001 26.537c-4.958 0-15.797 16.146-15.797 28.296 0 11.665 5.905 18.63 15.797 18.63 9.891 0 15.795-6.965 15.795-18.63C65.796 42.683 54.958 26.537 50.001 26.537zM43.122 54.833c0-6.802 2.755-14.608 5.593-19.871V69.6C45.091 67.47 43.122 62.354 43.122 54.833zM51.287 69.601V34.962c2.839 5.262 5.594 13.067 5.594 19.871C56.881 62.354 54.91 67.47 51.287 69.601zM37.13 54.833c0-9.81 7.379-21.114 11.204-24.417 0.024 0.034 0.032 0.075 0.059 0.107 0.001 0.001 0.001 0.002 0.002 0.003-3.621 5.276-7.847 15.432-7.847 24.306 0 6.52 1.493 11.575 4.218 14.737C39.857 67.556 37.13 62.434 37.13 54.833zM55.235 69.57c2.726-3.163 4.218-8.219 4.218-14.737 0-8.876-4.227-19.031-7.849-24.307 0.001-0.001 0.002-0.002 0.003-0.003 0.027-0.032 0.035-0.072 0.059-0.106 3.827 3.304 11.204 14.609 11.204 24.416C62.87 62.433 60.144 67.555 55.235 69.57z"
                    fill="transparent"
                    stroke="#000000"
                    strokeWidth="2"
                    variants={pathVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                />
            </motion.svg>
        </motion.div>
    );
};

export default LogoDraw;
