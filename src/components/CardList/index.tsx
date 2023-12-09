"use client"
import Card from "@/components/Card";
import Cards from "@/data/yugiohCards.json";
import Chapter from "@/data/chapter.json";
import { observer } from "mobx-react-lite";
import { gameOption } from "@/store/GameOptionStore";

const CardList = observer(() => {
    return (
        <div className="flex h-[100dvh]">
            {Cards.map((item, index) => {
                const getChapter = Chapter[gameOption.mode].filter((item: any) => item.chapterId === 1)[0]
                if (index + 1 > getChapter.cardsCount) {
                    return true;
                }
                return (
                    <Card key={index} imageURL={item.imagePath} id={item.id} />
                )
            })}
        </div>
    )
})
export default CardList