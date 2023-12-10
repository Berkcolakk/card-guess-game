"use client"
import Card from "@/components/Card";
import Cards from "@/data/yugiohCards.json";
import Chapter from "@/data/chapter.json";
import { observer } from "mobx-react-lite";
import { gameOption } from "@/store/GameOptionStore";
import { GameStore } from "@/store/Game";

import { IChapter } from "@/models/interfaces/Chapter";
import { useCountdown } from "@/hooks/useCountdown";
import { GAME_LOADING_SCREEN_SECOND } from "@/configs";
import { Alert } from "antd";
import { useEffect } from "react";
import RemembranceCards from "./RemembranceCards";

const CardList = observer(() => {
    const [countdown] = useCountdown({ countStart: Chapter[gameOption.mode].duration + GAME_LOADING_SCREEN_SECOND, intervalMs: 1000, countStop: 0, isIncrement: false })
    useEffect(() => {
        if (countdown <= 0) {
            GameStore.setTimeOver(true);
        }
    }, [countdown])

    return (
        <div className="flex h-[100dvh]">
            <div>
                <Alert
                    banner
                    message={
                        `${countdown} saniyeniz kaldı.`
                    }
                />
            </div>
            <RemembranceCards />
        </div>
    )
})
export default CardList