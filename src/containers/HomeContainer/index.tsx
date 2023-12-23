"use client"
import Button from "@/components/Button";
import React, { Suspense, useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import Settings from "@/components/Settings";
import { useRouter } from "next/navigation";
import { useBoolean } from "@/hooks/useBoolean";
import CardSlider from "@/components/CardSlider";
import { Spin } from "antd";
import TableComponent from "@/components/Table";
const HomeContainer = () => {
    const { toggle, setTrue, value } = useBoolean(false);
    const router = useRouter();
    return (
        <>
            <Suspense fallback={<><Spin spinning={true} fullscreen /></>}>
                <div className="m-auto h-full items-center w-full">
                    <CardSlider />
                    <div className="justify-center grid h-full grid-cols-1 place-items-center ">
                        <TableComponent deleteButton={true} updateButton={true} columns={[{
                            Header: 'ID', accessor: 'id', canSort: true, SortBy: 'id', canFilter: true,
                            Filter: ({ column }: any) => (
                                <input
                                    {...column.getFilterProps()} // Filtre bileşenine özellikleri ekler
                                    placeholder="ID"
                                />
                            ),
                        },
                        {
                            Header: 'Ad Soyad', accessor: 'name', canSort: true, SortBy: 'id', canFilter: true,
                            Filter: ({ column }: any) => (
                                <input
                                    {...column.getFilterProps()} // Filtre bileşenine özellikleri ekler
                                    placeholder="Ad Soyad"
                                />
                            ),
                        },
                        ]
                        } data={[{ id: 1, name: 'TEST' }, { id: 2, name: 'TEST 2' }]} fetchData={() => { console.log('TEST') }} />
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