"use client"
import { GameStore } from "@/store/Game";
import { motion } from "framer-motion"
import { observer } from "mobx-react-lite";

interface IProps {
    imageURL: string;
    id: number;
}
const Card = observer(({ imageURL, id }: IProps) => {
    return (
        <>
            <motion.img
                src={imageURL}
                onClick={() => console.log(id)}
                className="w-32 h-32 bg-black cursor-pointer rounded-md mx-auto my-10"
                whileInView={{ scale: 1.1 }}
                whileHover={{ scale: 1.4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
        </>
    )
})
export default Card