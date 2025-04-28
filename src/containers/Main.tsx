import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { Logo } from "../components";

import { navbarItems } from "../data/data";

const Main = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
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
            className="hidden md:flex md:flex-col md:w-[20%] md:h-[100%] bg-gradient-to-b 
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
                <span
                  onClick={handleLogout}
                  className="text-md w-fit rounded-full px-4 py-2 transition duration-300 transition-colors cursor-pointer hover:text-purple-600 hover:bg-purple-100"
                >
                  Cerrar sesión
                </span>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col justify-start w-full md:w-[80%] md:h-[100%]">
            <header className="w-full h-[12vh]  flex items-center justify-between px-4 py-2">
              <div className="hidden md:flex"></div>
              <div className="flex md:hidden scale-75 mt-4 ">
                <h1 className="font-[Manjari] font-bold bg-gradient-to-r from-[#bd00ff] to-[#8800ff] text-transparent bg-clip-text text-3xl">
                  MUBI
                </h1>
              </div>
              <div className="h-full flex items-center justify-center">
                <img
                  src="/assets/images/user.png"
                  alt="user"
                  className="w-[40px] h-[40px] md:w-[60px] rounded-full md:h-[60px] object-cover shadow-lg"
                  onClick={() => setMobileMenuOpen(true)}
                />
              </div>
            </header>
            <main className="h-[88vh] px-6">
              <div>
                <h1 className="font-[Arial] text-xl md:text-3xl font-bold text-center mt-10">
                  Bienvenido a{" "}
                  <span className="font-[Manjari] font-bold text-2xl md:text-4xl ">
                    MUBI
                  </span>
                  <span className="ml-1">🌟</span>
                </h1>
                <p className=" text-md md:text-lg text-center mt-2 md:mt-4 font-[Manjari] ">
                  Administra tus finanzas de manera fácil y segura.
                </p>
              </div>
            </main>
          </div>
        </div>
        {mobileMenuOpen && (
          <div
            className="fixed top-0 right-0 w-[60%] h-[100%] z-50 flex items-center flex-col justify-center bg-gradient-to-l 
        from-purple-100 to-purple-100 "
          >
            <ul className=" w-full p-6 flex flex-col justify-between h-[85vh] mt-20">
              <div className="space-y-4">
                {navbarItems.map((item) => (
                  <li
                    key={item.en}
                    className="text-md  hover:text-purple-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.es}
                  </li>
                ))}
              </div>
              <div className="flex items-end justify-between w-full mt-10">
                <li
                  className="text-md cursor-pointer hover:text-purple-600"
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </li>
                <img
                  src="/assets/images/user.png"
                  alt="user"
                  className="w-[40px] h-[40px] md:w-[60px] rounded-full md:h-[60px] object-cover shadow-lg"
                  onClick={() => setMobileMenuOpen(true)}
                />
              </div>
            </ul>
            <button
              className="absolute top-6 right-6 text-gray-800 scale-y-150 scale-x-200 "
              onClick={() => setMobileMenuOpen(false)}
            >
              X
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Main;
