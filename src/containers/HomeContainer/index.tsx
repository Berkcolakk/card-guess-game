"use client"
import Button from "@/components/Button";
import React, { Suspense, useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import Settings from "@/components/Settings";
import { useRouter } from "next/navigation";
import { useBoolean } from "@/hooks/useBoolean";
import CardSlider from "@/components/CardSlider";
import { Spin } from "antd";
const HomeContainer = () => {
    const { toggle, setTrue, value } = useBoolean(false);
    const router = useRouter();
    return (
        <>
            <Suspense fallback={<><Spin spinning={true} fullscreen /></>}>
                <div className="m-auto h-full items-center w-full">
                    <div className="justify-center grid h-full grid-cols-1 place-items-center ">
                        {/* <CardSlider /> */}
                        <AnimatedText delay={1} texts={["Unlock the Secrets of the Cards!",
                            "Predict the Future with the Power of Cards!",
                            "Mind-Reading Game: Card Prediction!",
                            "Rise Above Time with Cards!",
                            "Discover Surprises in Advance!",
                            "Use Cards to Grasp the Future!",
                            "Game Time with Knowledge Cards!",
                            "The Cards Speak, Are You Listening?",
                            "Art of Mind-Reading: Card Prediction Game!",
                            "Reveal the Mysteries Behind the Cards!"]}
                            className="text-white " />
                        <div className="grid grid-cols-1 space-y-2 w-52 h-24 self-center">
                            <Button onClick={() => router.push("/game")}>Başla</Button>
                            <Button onClick={() => setTrue()}>Ayarlar</Button>
                            <Settings open={value} setOpen={toggle} />
                        </div>
                    </div>
                </div>
            </Suspense>
        </>
    )
}
export default HomeContainer;