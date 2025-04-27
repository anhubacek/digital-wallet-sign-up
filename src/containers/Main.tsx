import { motion } from "framer-motion";
import { Logo } from "../components";
import { navbarItems } from "../data/data";

const Main = () => {
  return (
    <div className="bg-gradient-to-tr from-purple-500 to-indigo-500">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div
          className="w-full flex h-screen items-center justify-center bg-gradient-to-l 
        from-purple-300 to-purple-100"
        >
          <nav
            className="hidden md:flex md:flex-col md:w-[15%] md:h-[100%] bg-gradient-to-b 
        from-purple-100 to-purple-300"
          >
            <Logo size="small" className="items-left w-fit p-7" />

            <ul className="flex flex-col items-start justify-between w-full h-screen space-y-6  px-5 relative">
              <div className="flex flex-col items-start justify-start w-full h-[80%] space-y-4 overflow-y-auto scrollbar-hide">
                {navbarItems.map((item) => (
                  <li className="flex items-center justify-start w-full text-xl rounded-full px-6 py-2 hover:bg-purple-100 transition-colors cursor-pointer hover:text-purple-600 transition duration-300">
                    {item.es}
                  </li>
                ))}
              </div>

              <li className="flex items-center justify-center w-full transition duration-1000 mb-6">
                <span className="text-md w-fit rounded-full px-4 py-2 transition duration-300 transition-colors cursor-pointer hover:text-purple-600 hover:bg-purple-100">
                  Cerrar sesión
                </span>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col justify-start w-full md:w-[85%] md:h-[100%]">
            <header className="w-full h-[12vh]  flex items-center justify-between px-4 py-2">
              <div className="flex md:hidden scale-75 mt-4 ">
                <h1
                  className="font-[Manjari] font-bold bg-gradient-to-r from-[#bd00ff] to-[#8800ff] text-transparent bg-clip-text transition-all duration-ease-in-out text-3xl"
                >
                  MUBI
                </h1>
              </div>
              <div className="h-full flex items-center justify-center">
                <img
                  src="/assets/images/user.png"
                  alt="user"
                  className="w-[40px] h-[40px] md:w-[60px] rounded-full md:h-[60px] object-cover shadow-lg"
                />
              </div>
            </header>
            <main className="h-[88vh]"></main>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Main;
