import { motion } from 'framer-motion'
import { ModalCard, modalCardVariants } from '../Shared/Modal/Modal'

export default function LoginCard_1({ onClose, direction, ...props }: ModalCard) {
    return (
        <motion.div
            custom={direction}
            variants={modalCardVariants}
            initial='initial'
            animate="animate"
            exit='exit'
            className="modal-card max-w-[400px] h-[400px]"

        >
            <div className="p-24 h-full flex flex-col items-center justify-center">
                <h3 className="text-h2  font-bold">Login Modal</h3>
                <p className="text-body2 mt-40">WIP</p>
            </div>
        </motion.div>
    )
}
