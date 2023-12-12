"use client"
import Card from "@/components/Card";
import Cards from "@/data/yugiohCards.json";
import Chapter from "@/data/chapter.json";
import { observer } from "mobx-react-lite";
import { gameOption } from "@/store/GameOptionStore";
import { GameStore } from "@/store/Game";
import { IChapter } from "@/models/interfaces/Chapter";
import { useEffect } from "react";
import { generateUniqueNumbers } from "@/utils/common.utils";

const RemembranceCards = observer(() => {
    useEffect(() => {
        GameStore.setTimeOver(false);
    }, [])
    if (GameStore.timeOver) {
        return <></>
    }
    const getChapter = Chapter[gameOption.mode].chapters.filter((item: IChapter) => item.chapterId === 1)[0]
    const uniqueNumbers = generateUniqueNumbers(getChapter.cardsCount);

    return (
        Array.from(Array(getChapter.cardsCount)).map((item, index) => {
            return (
                <Card key={index} imageURL={Cards[uniqueNumbers[index]].imagePath} id={Cards[uniqueNumbers[index]].id} />
            )
        })
    )
})
export default RemembranceCards;