"use client"
import Button from "@/components/Button";
import Card from "@/components/Card";
import CardList from "@/components/CardList";
import { motion } from "framer-motion";
import React from "react";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  return (
    <div className="m-auto h-full items-center w-full">
      <div className="justify-center flex h-full ">
        <div className="grid grid-cols-1 space-y-2 w-52 h-20 self-center">
          <AnimatedText delay={1} texts={["Hoşgeldin", "Oynamaya hazır mısın?"]} className="text-white" />
          <Button>Başla</Button>
          <Button>Ayarlar</Button>

        </div>
      </div>
    </div>
  )
}