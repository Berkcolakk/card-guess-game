"use client"
import { Button, Input, Space } from "antd"
import { motion } from "framer-motion"
interface IProps {
    imageURL: string;
}
const Card = ({ imageURL }: IProps) => {
    return (
        <>
            <motion.img
                src={imageURL}
                className="w-32 h-32 bg-black cursor-pointer rounded-md mx-auto my-10"
                whileInView={{ scale: 1.1 }}
                whileHover={{ scale: 1.4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
        </>
    )
}
export default Card