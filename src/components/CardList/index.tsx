"use client"
import { observer } from "mobx-react-lite";
import { GameStore } from "@/store/Game";
import RemembranceCards from "./RemembranceCards";
import Countdown from "./Countdown";

const CardList = observer(() => {
    return (
        <div className="flex h-[100dvh]">
            {GameStore.loadingBoxFinish ? <Countdown /> : <></>}
            <RemembranceCards />
        </div>
    )
})
export default CardList