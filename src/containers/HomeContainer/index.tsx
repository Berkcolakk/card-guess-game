"use client"
import Button from "@/components/Button";
import React, { useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import Settings from "@/components/Settings";
import { useRouter } from "next/navigation";
import { useBoolean } from "@/hooks/useBoolean";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
const HomeContainer = () => {
    const { toggle, setTrue, value } = useBoolean(false);
    const router = useRouter();
    return (
        <>
            <div className="m-auto h-full items-center w-full">
                <div className="justify-center flex h-full ">
                    <div className="grid grid-cols-1 space-y-2 w-52 h-20 self-center">
                        <AnimatedText delay={1} texts={["Hoşgeldin", "Oynamaya hazır mısın?"]} className="text-white " />
                        <Button onClick={() => router.push("/game")}>Başla</Button>
                        <Button onClick={() => setTrue()}>Ayarlar</Button>
                        <Settings open={value} setOpen={toggle} />
                    </div>
                </div>
            </div>
            <div className="fixed inset-0 flex items-end justify-center">
                <Image src={Logo} alt="Logo"  height={125} width={125} className="rounded-2xl mb-2" />
            </div>
        </>
    )
}
export default HomeContainer;