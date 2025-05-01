import { useState } from "react";
import { ISignUpBody } from "../../containers/SignUp";

import { Button } from "../Button";
import { Input } from "../Input";
import { Loader } from "../Loader";

import {
  validateEmail,
  validateNonEmptyFields,
  validatePassword,
} from "../../utils/validations";

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
  const [isLoading, setIsLoading] = useState(false);

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
    if (body.email.toLowerCase() === "alreadytaken@gmail.com") {
      setError("El correo electrónico ya se encuentra registrado");
      setFieldsWithErrors([...fieldsWithErrors, "email"]);
      return;
    }
    if (validateEmail(body.email) && !validatePassword(body.password)) {
      setError(
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial"
      );
      setFieldsWithErrors([...fieldsWithErrors, "password"]);
      return;
    }
    if (validateEmail(body.email) && validatePassword(body.password)) {
      setError(null);
      setFieldsWithErrors([]);
      setIsLoading(true);
      setTimeout(() => {
        setStep(2);
        setIsLoading(false);
      }, 1200);
    }
  };

  return (
    <div className="flex flex-col items-center w-full ">
      <h3 className="relative text-lg text-[#4d4d4d] text-center md:w-[80%] ">
        Estás a un paso de hacer tu vida más simple con{" "}
        <span className="text-yellow-500"> MUBI</span>🌟
        {/* 🌟 */}
      </h3>
      {isLoading ? (
        <div className="flex flex-col w-full space-y-2 my-4 py-10">
          <Loader />
        </div>
      ) : (
        <>
          <div className="flex flex-col w-full space-y-2  mt-4 md:my-4">
            <label className="mb-1">Correo electrónico</label>
            <Input
              name="email"
              onChange={(e) => {
                setError(null);
                handleChange(e);
              }}
              value={body.email}
              fieldsWithErrors={fieldsWithErrors}
            />
            <label className="mb-1">Contraseña</label>
            <Input
              name="password"
              onChange={(e) => {
                setError(null);
                handleChange(e);
              }}
              type="password"
              value={body.password}
              fieldsWithErrors={fieldsWithErrors}
            />
          </div>
          {error ? (
            <p className={`text-red-500 text-sm mb-3 text-center w-[100%]`}>
              {error}
            </p>
          ) : (
            <div className=" h-[40px] md:h-[20px] mb-3" />
          )}
          <Button
            onClick={handleNextStep}
            className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 "
          >
            Continuar
          </Button>
        </>
      )}
    </div>
  );
};
