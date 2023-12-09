"use client"
import { HTMLMotionProps, motion } from "framer-motion"

const Button: React.FC<HTMLMotionProps<"button">> = (props) => {
    return (
        <motion.button
            {...props}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-md bg-secondry"
        />
    )
}
export default Button;