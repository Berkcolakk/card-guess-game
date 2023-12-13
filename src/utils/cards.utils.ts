import { ICards, IChapter } from "@/models/interfaces/Chapter";
import Cards from "@/data/yugiohCards.json";
import { generateUniqueNumbers } from "./common.utils";

export const getRandomCards = (chapterInfo: IChapter) => {
    const uniqueNumbers = generateUniqueNumbers(Cards.length, chapterInfo.cardsCount);
    const allCards: ICards[] = []
    uniqueNumbers.forEach((item: number, index: number) => {
        allCards.push(Cards[uniqueNumbers[index]])
    })
    return allCards;
}