"use client"
import { useWillChange } from "framer-motion";
import { motion } from "framer-motion";
import { GameStore } from "@/store/Game";
import { CountdownProps, Statistic } from 'antd';
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
const { Countdown: AntdCountDown } = Statistic;
interface IProps {
    defaultTimer?: number;
}
const GameLoadingCountdown = observer(({ defaultTimer = 3 }: IProps) => {
    const willChange = useWillChange()
    useEffect(() => {
        GameStore.setLoadingBoxFinish(false);
    }, [])
    if (GameStore.loadingBoxFinish) {
        return (<></>);
    }

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
    const second = (defaultTimer) * 1000;
    const onFinish: CountdownProps['onFinish'] = () => {
        GameStore.setLoadingBoxFinish(true);
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
                    <AntdCountDown title="" format={"ss"} value={Date.now() + second} onFinish={onFinish} />
                </motion.div>
            </motion.div>
        </>
    )
})
export default GameLoadingCountdown