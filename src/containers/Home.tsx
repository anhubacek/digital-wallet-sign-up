import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button, Logo } from "../components";



const Home = () => {
  const [logoSize, setLogoSize] = useState<"large" | "small" | "medium">(
    "large"
  );
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
       setLogoSize("medium");
      setExpanded(true);
    }, 400);
  }, []);

  return (
    <div className="w-full flex h-screen items-center justify-center bg-gradient-to-tr from-white to-purple-300">
      <div
        className="flex flex-col justify-center items-center bg-gradient-to-tr from-purple-300 to-white  
           transition-all duration-900 bg-none"
        style={
          expanded
            ? { width: "100%", height: "100%", borderRadius: "10px" }
            : { width: "350px", height: "350px" }
        }
      >
        <motion.div
          initial={{}}
          animate={{ top: -100 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="relative mt-30 "
        >
          <Logo size={logoSize} />
        </motion.div>
        <motion.div
          initial={{ top: 0, left: 0, opacity: 1 }}
          animate={{ top: -50, opacity: 0 }}
          transition={{ duration: 0.6, delay: 4 }}
          className="relative text-center mt-[-50px] "
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="relative font-[Manjari] text-xl md:text-2xl mb-[20px] text-[#4d4d4d]"
          >
            <h2>Tu billetera para todo.</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.6 }}
            className="relative font-[Manjari] text-xl md:text-2xl text-[#4d4d4d]"
          >
            <h2>Rápida, segura y sin vueltas.</h2>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, top: -100 }}
          transition={{ duration: 0.6, delay: 5 }}
          className="relative font-[Manjari] text-xl"
        >
          <Button link="/sign-up">Crear una cuenta</Button>
        </motion.div>
      </div>
    </div>
  );
};
export default Home;
