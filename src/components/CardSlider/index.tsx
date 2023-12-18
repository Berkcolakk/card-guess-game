"use client"
import Cards from "@/data/yugiohCards.json";
import Image from "next/image";
import { Card } from 'antd';
import Meta from "antd/es/card/Meta";
import Marquee from "react-fast-marquee";

const CardPresentation = () => {
    return (
        <Marquee >
            {Cards.map((item, index) => {
                return (
                    <Card
                        key={index}
                        className="!w-44 m-2"
                        cover={<Image src={"/" + item.imagePath} alt={item.name} priority={true} height={208} quality={100} width={160} className="h-52 w-40" />}
                    >
                        <Meta title={item.name} />
                    </Card>
                )
            })}
        </Marquee>
    )
}
export default CardPresentation;