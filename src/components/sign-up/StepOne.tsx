import { useState } from "react";
import { ISignUpBody } from "../../containers/SignUp";
import {
  validateEmail,
  validateNonEmptyFields,
  validatePassword,
} from "../../utils/validations";
import { Button } from "../Button";
import { Input } from "../Input";

interface StepOneProps {
  setStep: (step: number) => void;
  body: ISignUpBody;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fieldsWithErrors: string[];
  setFieldsWithErrors: (fields: string[]) => void;
}

export const StepOne = ({
  handleChange,
  setStep,
  body,
  fieldsWithErrors,
  setFieldsWithErrors,
}: StepOneProps) => {
  const [error, setError] = useState<string | null>(null);

  const handleNextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (
      !validateNonEmptyFields({
        email: body.email,
        password: body.password,
      })
    ) {
      setError("Por favor completa los campos para continuar");
      setFieldsWithErrors([...fieldsWithErrors, "email", "password"]);
      return;
    }

    if (!validateEmail(body.email)) {
      setError("El correo electrónico es inválido");
      setFieldsWithErrors([...fieldsWithErrors, "email"]);
      return;
    }
    if (validateEmail(body.email) && !validatePassword(body.password)) {
      setError(
        "La contraseña debe tener al menos 8 caracteres, una letra y un número"
      );
      setFieldsWithErrors([...fieldsWithErrors, "password"]);
      return;
    }
    if (validateEmail(body.email) && validatePassword(body.password)) {
      setError(null);
      setStep(2);
      setFieldsWithErrors([]);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="relative text-lg text-[#4d4d4d] text-center md:w-[80%]">
        Estás a un paso de hacer tu vida más simple con{" "}
        <span className="text-yellow-500"> MUBI</span>🌟
        {/* 🌟 */}
      </h3>
      <div className="flex flex-col w-full space-y-2 my-4">
        <label className="mb-1">Correo electrónico</label>
        <Input
          name="email"
          onChange={handleChange}
          value={body.email}
          fieldsWithErrors={fieldsWithErrors}
        />
        <label className="mb-1">Contraseña</label>
        <Input
          name="password"
          onChange={handleChange}
          type="password"
          value={body.password}
          fieldsWithErrors={fieldsWithErrors}
        />
      </div>
      {error && (
        <p className="text-gray-500 text-sm mb-3 text-center w-[90%]">
          {error}
        </p>
      )}
      <Button
        onClick={handleNextStep}
        className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 "
      >
        Continuar
      </Button>
    </div>
  );
};
