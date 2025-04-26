import { ISignUpBody } from "../../containers/SignUp";
import { Button } from "../Button";
import { Input } from "../Input";

interface StepThreeProps {
  setStep: (step: number) => void;
  body: ISignUpBody;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const governmentIdsByCountry = [
  { name: "Argentina", id: "DNI", length: 8 },
  { name: "Paraguay", id: "Cédula de identidad", length: 6 },
  { name: "Brasil", id: "CPF", length: 11 },
  { name: "Brasil", id: "Registro Geral (RG)", length: 9 },
  { name: "Chile", id: "RUN", length: 9 },
  { name: "Chile", id: "RUT", length: 9 },
  { name: "Colombia", id: "Cédula de ciudadanía", length: 10 },
  { name: "Perú", id: "DNI", length: 8 },
  { name: "México", id: "CURP", length: 18 },
  { name: "México", id: "INE", length: 13 },
  { name: "Venezuela", id: "Cédula de identidad", length: 8 },
  { name: "España", id: "DNI", length: 9 },
  { name: "Estados Unidos", id: "Social Security Number (SSN)", length: 9 },
  { name: "Bolivia", id: "Cédula de identidad", length: 7 },
  { name: "Ecuador", id: "Cédula de identidad", length: 10 },
];

export const StepThree = ({ handleChange, setStep, body }: StepThreeProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="relative text-lg text-[#4d4d4d] text-center md:w-[100%]">
        Por último, vamos a validar tu identidad
        🌟
      </h3>
      <div className="flex flex-col w-full space-y-2 my-4">
        <label className="mb-1">Fecha de nacimiento</label>
        <Input
          name="dateOfBirth"
          onChange={handleChange}
          value={body.dateOfBirth}
        />
        <label className="mb-1">
          {governmentIdsByCountry.find((doc) => doc.name === body.country)
            ?.id || "Cédula de identidad"}
        </label>
        <Input
          name="governmentId"
          onChange={handleChange}
          value={body.governmentId}
          maxLength={
            governmentIdsByCountry.find((doc) => doc.name === body.country)
              ?.length || 18
          }
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
