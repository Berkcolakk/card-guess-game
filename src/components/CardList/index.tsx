"use client"
import Chapter from "@/data/chapter.json";
import { observer } from "mobx-react-lite";
import { gameOption } from "@/store/GameOptionStore";
import { GameStore } from "@/store/Game";
import RemembranceCards from "./RemembranceCards";
import Countdown from "./Countdown";

const CardList = observer(() => {
    return (
        <div className="flex h-[100dvh]">
            <Countdown />
            <RemembranceCards />
        </div>
    )
})
export default CardList