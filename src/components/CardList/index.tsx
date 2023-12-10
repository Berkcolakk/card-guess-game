"use client"
import Card from "@/components/Card";
import Cards from "@/data/yugiohCards.json";
import Chapter from "@/data/chapter.json";
import { observer } from "mobx-react-lite";
import { gameOption } from "@/store/GameOptionStore";
import { IChapter } from "@/models/interfaces/Chapter";
import { useCountdown } from "@/hooks/useCountdown";
import { GAME_LOADING_SCREEN_SECOND } from "@/configs";
import { Alert } from "antd";

const CardList = observer(() => {
    const [countdown] = useCountdown({ countStart: Chapter[gameOption.mode].duration + GAME_LOADING_SCREEN_SECOND, intervalMs: 1000, countStop: 0, isIncrement: false })
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
            {Cards.map((item, index) => {
                const getChapter = Chapter[gameOption.mode].chapters.filter((item: IChapter) => item.chapterId === 1)[0]
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