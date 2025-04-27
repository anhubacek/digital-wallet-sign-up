const Error = () => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-gradient-to-tr from-purple-300 to-white  
           transition-all duration-900 w-full h-screen font-[Manjari] relative px-4"
    >
      <h1
        className="mb-10 font-[Manjari] font-bold bg-gradient-to-r from-[#bd00ff] to-[#8800ff] text-transparent bg-clip-text text-3xl
      absolute left-5 top-5"
      >
        MUBI
      </h1>

      <p className="text-2xl text-gray-600 mt-4 mb-5 text-center">
        Ups! Algo salió mal
      </p>
      <p className="text-lg text-gray-600 text-center">
        Si el error persiste, por favor contacta a soporte técnico
      </p>
      <p className="text-md text-gray-600  text-center mt-5">
        soporte@mubi.com
      </p>
      <a
        href="/"
        className="flex items-center justify-center transition-colors duration-500 bg-gradient-to-r from-purple-500 to-indigo-500 text-white cursor-pointer font-semibold  p-2 pt-3 md:pt-4  px-8 rounded-full font-[Manjari] text-md md:text-lg shadow-xl mt-6 hover:from-purple-700 hover:to-indigo-800"
      >
        Volver a la página principal
      </a>
    </div>
  );
};

export default Error;
