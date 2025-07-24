"use client"

import { ArrowRight } from 'lucide-react'
import React from 'react'
import { EventCard } from '../eventCard'
import EventTabs from '../eventTab'
import { Button } from '../ui/button'
import { motion, Variants } from 'framer-motion'

// Shared content to avoid duplication
const eventContent = {
    title: "Upcoming Event For The Year",
    description: "Explore upcoming events tailored to equip, connect, and empower businesses across Africa and beyond.",
    buttonText: "See All Events"
}

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            when: "beforeChildren"
        }
    }
}

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const // or use a specific easing function from framer-motion
        }
    }
}

const UpcomingEvent = () => {
    return (
        <>
            {/* Mobile View */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="lg:hidden block"
            >
                <motion.div
                    variants={itemVariants}
                    className="bg-[#2D9378] text-white p-6 pt-7"
                >
                    <h3 className="text-2xl leading-[28px] font-black mb-4">{eventContent.title}</h3>
                    <p className="text-xl leading-6 mb-6">{eventContent.description}</p>
                    <Button size="lg" className="bg-white text-primary w-[265px] !rounded-[10px]">
                        <span className="!text-xl !font-normal !leading-6 mr-[30px]">
                            {eventContent.buttonText}
                        </span>
                        <ArrowRight className="size-4 font-bold" />
                    </Button>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <EventTabs />
                </motion.div>
            </motion.div>

            {/* Desktop View */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="bg-[#2D9378] lg:grid hidden lg:px-10 xl:px-[123px] pt-[65px] pb-[88px] grid-cols-3 gap-x-9 gap-y-14"
            >
                <motion.div
                    variants={itemVariants}
                    className="pt-[50px] text-white"
                >
                    <h3 className="text-2xl leading-[28px] font-black mb-4">{eventContent.title}</h3>
                    <p className="text-xl leading-6 mb-[31px]">{eventContent.description}</p>
                    <Button size="lg" variant="secondary" className="w-[265px] !rounded-[10px]">
                        <span className="text-xl leading-6 mr-[30px]">
                            {eventContent.buttonText}
                        </span>
                        <ArrowRight className="size-4 font-bold" />
                    </Button>
                </motion.div>

                {Array.from({ length: 5 }).map((_, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={itemVariants}
                        transition={{ delay: index * 0.1 }}
                    >
                        <EventCard
                            isInverted={index !== 0}
                            isRotated={index === 0}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </>
    )
}

export default UpcomingEvent