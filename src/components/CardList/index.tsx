"use client"
import { observer } from "mobx-react-lite";
import { GameStore } from "@/store/Game";
import RemembranceCards from "./RemembranceCards";
import Countdown from "./Countdown";

const CardList = observer(() => {
    return (
        <>
            {GameStore.loadingBoxFinish ? <Countdown /> : <></>}
            <RemembranceCards />
        </>
    )
})
export default CardList