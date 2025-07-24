"use client"

import React from 'react';
import { motion } from 'framer-motion';
import ImageHolder from '../imageHolder';

const Hero = () => {
    return (
        <div className="pt-[35px] lg:pt-[69px] lg:px-[44px] xl:pl-[123px] lg:pb-[102px] bg-[url('/hero-bg.png')] bg-contain bg-center relative flex lg:gap-10 xl:gap-[63px]"
            style={{ backgroundImage: "url('/hero-bg.png')" }}>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:flex hidden shrink-1"
            >
                <img loading='eager' src="/hero-img-left-desktop.webp" alt="hero image" />
            </motion.div>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1/2 flex-col justify-start lg:pt-[31px] shrink-0"
            >
                <h2 className="px-[4vw] text-primary lg:px-0  mb-6 text-[35px] lg:text-[60px] lg:leading-[65px] xl:text-[70px] xl:leading-[75px] leading-[35px] tracking-[0.5px] align-middle font-light font-sans">
                    <span className=" font-extrabold lg:text-[55px] xl:text-[65px]">
                        Gaining Knowledge
                    </span><br />
                    Through Connection
                </h2>
                <img loading='eager' src="/hero-img-right-desktop.webp" className="object-contain object-left lg:block hidden" alt="hero image" />
                <ImageHolder />
            </motion.div>
        </div>
    );
};

export default Hero;