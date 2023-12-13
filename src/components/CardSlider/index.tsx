"use client"
import Cards from "@/data/yugiohCards.json";
import Image from "next/image";
import { Carousel } from 'antd';
const CardPresentation = () => {
    return (
        <div >
            <Carousel autoplay infinite dots={false} fade speed={1} autoplaySpeed={1000} centerMode slidesToShow={5} slidesToScroll={5} className="">
                {Cards.map((item, index) => {
                    return (
                        <>
                            {/* <Image key={index} src={"/" + item.imagePath} alt={item.name} width={50} height={50} className="" /> */}
                            BERk {index}
                        </>
                    )
                })}
            </Carousel>
        </div>
    )
}
export default CardPresentation;