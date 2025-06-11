import { motion } from "motion/react"

export function Component({ isVisible }) {
    return <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />
}