"use client"
import { observer } from "mobx-react-lite";
import { GameStore } from "@/store/Game";
import RemembranceCards from "./RemembranceCards";
import Countdown from "./Countdown";
import Card from "../Card";
import { ReactNode, useState } from "react";

const CardList = observer(() => {
    const GetCardSnapshot = () => {
        const [comp, setComp] = useState<any>();
        const getData = () => {
            let i = 0;
            const components = [];
            while (true) {
                i++;
                if (i === GameStore.allCards.length) {
                    break;
                }
                components?.push(<Card key={i} imageURL={''} id={i} />)
            }
            setComp(components)
        }
        getData();
        return (
            comp.map((comp: any) => {
                { comp }
            })
        )
    }
    return (
        <>
            {GameStore.loadingBoxFinish ? <Countdown /> : <></>}
            {GameStore.timeOver ? <GetCardSnapshot /> : <></>}
            <RemembranceCards />
        </>
    )
})
export default CardList