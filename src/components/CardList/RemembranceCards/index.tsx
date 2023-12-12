"use client"
import Card from "@/components/Card";
import Cards from "@/data/yugiohCards.json";
import Chapter from "@/data/chapter.json";
import { observer } from "mobx-react-lite";
import { gameOption } from "@/store/GameOptionStore";
import { GameStore } from "@/store/Game";
import { IChapter } from "@/models/interfaces/Chapter";
import { useEffect } from "react";

const RemembranceCards = observer(() => {
    useEffect(() => {
        GameStore.setTimeOver(false);
    }, [])
    if (GameStore.timeOver) {
        return <></>
    }
    return (
        Cards.map((item, index) => {
            const getChapter = Chapter[gameOption.mode].chapters.filter((item: IChapter) => item.chapterId === 1)[0]
            if (index + 1 > getChapter.cardsCount) {
                return true;
            }
            return (
                <Card key={index} imageURL={item.imagePath} id={item.id} />
            )
        })
    )
})
export default RemembranceCards;