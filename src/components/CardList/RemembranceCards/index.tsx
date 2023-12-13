"use client"
import Card from "@/components/Card";
import Cards from "@/data/yugiohCards.json";
import Chapter from "@/data/chapter.json";
import { observer } from "mobx-react-lite";
import { gameOption } from "@/store/GameOptionStore";
import { GameStore } from "@/store/Game";
import { ICards, IChapter } from "@/models/interfaces/Chapter";
import { useEffect, useMemo } from "react";
import { generateUniqueNumbers } from "@/utils/common.utils";
import { getRandomCards } from "@/utils/cards.utils";

const RemembranceCards = observer(() => {
    useEffect(() => {
        GameStore.setTimeOver(false);
        //Random Cards Setting...
        const getChapter = Chapter[gameOption.mode].chapters.filter((item: IChapter) => item.chapterId === GameStore.chapter)[0]
        GameStore.setAllCards(getRandomCards(getChapter))

    }, [])


    if (GameStore.timeOver) {
        return <></>
    }
    return (
        GameStore.allCards.map((item, index) => {
            return (
                <Card key={index} imageURL={item.imagePath} id={item.id} />
            )
        })
    )
})
export default RemembranceCards;