import { useState } from "react";
import { Button, Input, Logo } from "../components";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [body, setBody] = useState({
    email: "",
    userName: "",
    name: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    country: "",
    dateOfBirth: "",
    governmentId: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleNextStep = () => {
    
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-tr from-purple-300 to-white font-[Manjari]">
      <form className="flex flex-col items-center px-6 md:px-10 py-12 rounded-2xl shadow-lg w-[90%] md:w-120 bg-white space-y-4">
        <Logo size="small" className="" />
        {step === 1 && (
          <>
            <h3 className="relative text-lg text-[#4d4d4d] text-center md:w-[80%]">
              Estás a un paso de simplificar tu vida con{" "}
              <span className="text-yellow-500"> MUBI</span>🌟
              {/* 🌟 */}
            </h3>
            <div className="flex flex-col w-full space-y-4">
              <label className="mb-1">Correo electrónico</label>
              <Input placeholder="mi-correo@ejemplo.com" />
              <label className="mb-1">Nombre de usuario</label>
              <Input type="password" placeholder="mi-usuario" />
            </div>
            <Button
              onClick={handleNextStep}
              className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
            >
              Continuar
            </Button>
          </>
        )}
      </form>
    </div>
  );
};
export default SignUp;
