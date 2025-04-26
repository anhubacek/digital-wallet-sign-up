import { ISignUpBody } from "../../containers/SignUp";
import { Button } from "../Button";
import { Input } from "../Input";

interface StepThreeProps {
  setStep: (step: number) => void;
  body: ISignUpBody;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const StepThree = ({ handleChange, setStep, body }: StepThreeProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="relative text-lg text-[#4d4d4d] text-center md:w-[100%]">
        Por último, vamos a validar tu identidad	    
        {/* <span className="text-yellow-500"> MUBI</span>🌟 */}
        🌟
      </h3>
      <div className="flex flex-col w-full space-y-2 my-4">
        <label className="mb-1">Fecha de nacimiento</label>
        <Input name="dateOfBirth" onChange={handleChange} value={body.dateOfBirth} />
        <label className="mb-1">Número de documento</label>
        <Input
          name="governmentId"
          onChange={handleChange}
          value={body.governmentId}
        />
      </div>
      <Button
        onClick={() => setStep(4)}
        className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 "
      >
        Completar registro
      </Button>
    </div>
  );
};
