"use client"
import Card from "@/components/Card";
import Cards from "@/data/yugiohCards.json";
import Chapter from "@/data/chapter.json";

const CardList = () => {
    return (
        <div className="grid grid-cols-7 h-[100dvh]">
            {Cards.map((item, index) => {
                const getChapter = Chapter["easy"].filter((item) => item.chapterId === 1)[0]
                if (index + 1 > getChapter.chapterId) {
                    return true;
                }
                return (
                    <Card key={index} imageURL={item.imagePath} />
                )
            })}
        </div>
    )
}
export default CardList