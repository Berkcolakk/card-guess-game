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
    const getChapter = Chapter[gameOption.mode].chapters.filter((item: IChapter) => item.chapterId === 1)[0]
    return (
        Array.from(Array(getChapter.cardsCount)).map((item, index) => {
            const random = Math.floor(Math.random() * Cards.length);
            return (
                <Card key={index} imageURL={Cards[random].imagePath} id={Cards[random].id} />
            )
        })
    )
})
export default RemembranceCards;