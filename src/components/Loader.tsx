import { motion } from "framer-motion";

interface ILoaderProps {
  className?: string;
}

export const Loader = ({ className }: ILoaderProps) => {
  return (
    <motion.div
      className={className}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          border: "4px inset rgb(174, 25, 255)",
          borderTop: "4px inset transparent",
        }}
      />
    </motion.div>
  );
};
