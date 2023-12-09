"use client"
import Card from "@/components/Card";
import CardList from "@/components/CardList";
import Title from "antd/es/typography/Title";
import { useWillChange } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
interface IProps {
    defaultTimer?: number;
}
const Countdown = ({ defaultTimer = 5 }: IProps) => {
    const willChange = useWillChange()
    const [timer, setTimer] = useState(defaultTimer);

    useEffect(() => {
        const interval = setTimeout(() => {
            setTimer(timer - 1)
        }, 1000)

        if (timer <= 0) {
            clearTimeout(interval);
        }
        return () => {
            clearTimeout(interval);
        }
    }, [timer])
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

    return (
        <>
            <motion.div transition={{ delay: 1 }}
                style={{ willChange }} className="m-auto h-full w-full flex items-center fixed inset-0	backdrop-blur-md	">
                <motion.div
                    variants={cursorVariants}
                    className="rounded-full bg-primary mx-auto h-40 w-40 text-center flex justify-center items-center"
                    transition={{ delay: 1 }}
                    style={{ willChange }}>
                    <Title level={2}>{timer}</Title>
                </motion.div>
            </motion.div>
        </>
    )
}
export default Countdown