import { Button } from "../components";

const NotFound = () => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-gradient-to-tr from-purple-300 to-white  
            w-full h-screen font-[Manjari] relative px-4"
    >
      <h1
        className="mb-10 font-[Manjari] font-bold bg-gradient-to-r from-[#bd00ff] to-[#8800ff] text-transparent bg-clip-text text-3xl
      absolute left-5 top-5"
      >
        MUBI
      </h1>
      <h1 className="text-5xl font-bold font-[Manjari] text-center">404</h1>
      <p className="text-lg text-gray-600 mt-4 mb-10 text-center">
        Ups! Parece que esta página no existe
      </p>
      <Button link="/">Volver a la página principal</Button>
    </div>
  );
};

export default NotFound;
