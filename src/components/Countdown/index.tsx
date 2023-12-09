"use client"
import Card from "@/components/Card";
import CardList from "@/components/CardList";
import { useCountdown } from "@/hooks/useCoundown";
import Title from "antd/es/typography/Title";
import { useWillChange } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
interface IProps {
    defaultTimer?: number;
}
const Countdown = ({ defaultTimer = 3 }: IProps) => {
    const willChange = useWillChange()
    const [countdown] = useCountdown({ countStart: defaultTimer, countStop: 0, intervalMs: 1000, isIncrement: false })

    const cursorVariants = {
        blinking: {
            opacity: [0, 0, 1, 1],
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0,
                ease: "linear",
                times: [0, 0.5, 0.5, 1]
            }
        }
    };
    if (countdown <= 0) {
        return (
            <></>
        )
    }

    return (
        <>
            <motion.div transition={{ delay: 1 }}
                style={{ willChange }} className="m-auto h-full w-full flex items-center fixed inset-0	backdrop-blur-md	">
                <motion.div
                    variants={cursorVariants}
                    className="rounded-full bg-primary mx-auto h-40 w-40 text-center flex justify-center items-center"
                    transition={{ delay: 1 }}
                    style={{ willChange }}>
                    <Title className="!mb-0" level={1}>{countdown}</Title>
                </motion.div>
            </motion.div>
        </>
    )
}
export default Countdown