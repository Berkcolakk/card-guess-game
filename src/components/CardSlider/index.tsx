"use client"
import Cards from "@/data/yugiohCards.json";
import Image from "next/image";
import { Card, Carousel } from 'antd';
import Meta from "antd/es/card/Meta";
const CardPresentation = () => {
    return (
        <Carousel autoplay infinite dots={false} fade speed={1} autoplaySpeed={700} centerMode slidesToShow={3} rows={1} slidesPerRow={1} slidesToScroll={3} className="">
            {Cards.map((item, index) => {
                return (
                    <Card
                        key={index}
                        className="!w-60"
                        cover={<Image src={"/" + item.imagePath} alt={item.name} height={100} width={100} className="h-60 w-10" />}
                    >
                        <Meta title={item.name} />
                    </Card>
                )
            })}
        </Carousel>
    )
}
export default CardPresentation;