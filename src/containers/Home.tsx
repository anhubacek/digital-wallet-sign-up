import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useWindowWidth } from "@react-hook/window-size";

import Logo from "../components/Logo";

const Home = () => {
  const [logoSize, setLogoSize] = useState<"large" | "small" | "medium">(
    "large"
  );
  const [expanded, setExpanded] = useState(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    setTimeout(() => {
      setLogoSize("medium");
      setExpanded(true);
    }, 400);
  }, []);
  return (
    <div className="w-full h-screen items-center md:bg-[#8800ff]">
      <div
        className={`bg-[white] ${
          !expanded ? "rounded-[10px]" : ""
        } transition-all duration-1000 w-${!expanded ? "[300px]" : "full"} h-${
          !expanded ? "[300px]" : "screen"
        }  flex flex-col md:flex-row justify-center items-center  `}
      >
        <motion.div
          initial={windowWidth < 600 ? {} : { left: 100 }}
          animate={windowWidth < 600 ? { top: -150 } : { left: -200 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="relative w-full md:w-[300px] mt-20 md:mt-0 flex items-center justify-center"
        >
          <Logo size={logoSize} />
        </motion.div>
        <motion.div
          initial={{ top: 0, left: 0, opacity: 1 }}
          animate={
            windowWidth < 600
              ? { top: -180, opacity: 0 }
              : { left: -300, opacity: 0 }
          }
          transition={{ duration: 1, delay: 4 }}
          className="relative text-center"
        >
          <motion.div
            initial={{opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="relative"
          >
            <h2>Tu billetera para todo.</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 3 }}
            className="relative"
          >
            <h2>Rápida, segura y sin vueltas.</h2>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default Home;
