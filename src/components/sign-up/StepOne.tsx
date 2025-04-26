import { ISignUpBody } from "../../containers/SignUp";
import { Button } from "../Button";
import { Input } from "../Input";

interface StepOneProps {
  setStep: (step: number) => void;
  body: ISignUpBody;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const StepOne = ({ handleChange, setStep, body }: StepOneProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="relative text-lg text-[#4d4d4d] text-center md:w-[80%]">
        Estás a un paso de hacer tu vida más simple con{" "}
        <span className="text-yellow-500"> MUBI</span>🌟
        {/* 🌟 */}
      </h3>
      <div className="flex flex-col w-full space-y-2 my-4">
        <label className="mb-1">Correo electrónico</label>
        <Input name="email" onChange={handleChange} value={body.email} />
        <label className="mb-1">Contraseña</label>
        <Input
          name="password"
          onChange={handleChange}
          type="password"
          value={body.password}
        />
      </div>
      <Button
        onClick={() => setStep(2)}
        className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 "
      >
        Continuar
      </Button>
    </div>
  );
};
