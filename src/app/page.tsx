"use client"
import Button from "@/components/Button";
import Card from "@/components/Card";
import CardList from "@/components/CardList";
import { motion } from "framer-motion";
import React, { useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import CustomModal from "@/components/CustomModal";
import Settings from "@/components/Settings";
import { useRouter } from "next/navigation";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  return (
    <div className="m-auto h-full items-center w-full">
      <div className="justify-center flex h-full ">
        <div className="grid grid-cols-1 space-y-2 w-52 h-20 self-center">
          <AnimatedText delay={1} texts={["Hoşgeldin", "Oynamaya hazır mısın?"]} className="text-white" />
          <Button onClick={() => router.push("/game")}>Başla</Button>
          <Button onClick={() => setOpen(true)}>Ayarlar</Button>
          <Settings open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  )
}