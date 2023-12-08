"use client"
import { motion } from "framer-motion"
const Card = () => {
    return (
        <motion.img
            src={"yugiohCards/TrueKingAgnimazudTheVanisher.jpg"}
            className="w-32 h-32 bg-black cursor-pointer rounded-md mx-auto my-auto"
            whileInView={{ scale: 1.1 }}
            whileHover={{ scale: 1.4 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
    )
}
export default Card