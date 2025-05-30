/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker } from "@mui/x-date-pickers";
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";

import { ISignUpBody } from "../../containers/SignUp";
import { Button } from "../Button";
import { Input } from "../Input";
import { Loader } from "../Loader";

import { governmentIdsByCountry } from "../../data/data";
import {
  getEmptyFields,
  hasMoreThanEighteenYears,
  hasMoreThanNinetyNineYears,
  validateNonEmptyFields,
} from "../../utils/validations";

interface StepThreeProps {
  setStep: (step: number) => void;
  body: ISignUpBody;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setBody: (body: ISignUpBody) => void;
  fieldsWithErrors: string[];
  setFieldsWithErrors: (fields: string[]) => void;
}

export const StepThree = ({
  handleChange,
  setStep,
  body,
  setBody,
  fieldsWithErrors,
  setFieldsWithErrors,
}: StepThreeProps) => {
  const today = new Date();
  const eighteenYearsAgo = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  const [focused, setFocused] = useState(false);
  const pickerRef = useRef(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { dateOfBirth, governmentId } = body;

  const stepFields = {
    dateOfBirth,
    governmentId,
  };

  const handleBirthDate = (e: any) => {
    const date = e.$d.toString().split(" ");
    const month = new Date(e.$d).getMonth() + 1;
    const formattedDate = `${date[2]}-${month.toString().padStart(2, "0")}-${
      date[3]
    }`;

    setBody({
      ...body,
      dateOfBirth: formattedDate,
    });
  };

  const saveMockedToken = () => {
    const expirationTime = new Date().getTime() + 5 * 60 * 1000; // 5 minutes
    const tokenData = {
      token: "mockedToken",
      expiresAt: expirationTime,
    };
    localStorage.setItem("authToken", JSON.stringify(tokenData));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!validateNonEmptyFields(stepFields)) {
      setError("Por favor completa los campos para continuar");
      setFieldsWithErrors(getEmptyFields(stepFields));
      return;
    }
    if (
      body.governmentId?.length <
      (governmentIdsByCountry.find((doc) => doc.name === body.country)
        ?.length || 6)
    ) {
      setError(`El número de identificación no es válido`);
      setFieldsWithErrors([...fieldsWithErrors, "governmentId"]);
      return;
    } else {
      setFieldsWithErrors(
        fieldsWithErrors.filter((field) => field !== "governmentId")
      );
    }
    if (
      !hasMoreThanEighteenYears(
        dateOfBirth,
        eighteenYearsAgo.toLocaleDateString()
      )
    ) {
      setError("Debes ser mayor de 18 años para registrarte");
      setFieldsWithErrors([...fieldsWithErrors, "dateOfBirth"]);
      return;
    } else {
      setFieldsWithErrors(
        fieldsWithErrors.filter((field) => field !== "dateOfBirth")
      );
    }
    if (hasMoreThanNinetyNineYears(dateOfBirth)) {
      setError("La fecha de nacimiento no puede ser mayor a 99 años");
      setFieldsWithErrors([...fieldsWithErrors, "dateOfBirth"]);
      return;
    } else {
      setFieldsWithErrors(
        fieldsWithErrors.filter((field) => field !== "dateOfBirth")
      );
    }
    if (!getEmptyFields(stepFields).length) {
      setIsLoading(true);
      setTimeout(() => {
        setError(null);
        setFieldsWithErrors([]);
        saveMockedToken();
        setStep(4);
        setIsLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        (pickerRef.current as any).contains(event.target)
      ) {
        setFocused(true);
      } else {
        setFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full min-h-[250px]">
      <h3 className="relative text-lg text-[#4d4d4d] text-center md:w-[100%]">
        {isLoading
          ? "¡Todo listo! Estamos creando tu cuenta 🌟"
          : "Por último, vamos a validar tu identidad 🌟"}
      </h3>
      {isLoading ? (
        <div className="my-10">
          <Loader />
        </div>
      ) : (
        <>
          <div className="flex flex-col w-full space-y-2 mt-4 mb-2">
            <label className="mb-1">Fecha de nacimiento</label>
            <div
              className={` mb-4 py-[1px] px-2 border border-gray-300 rounded-[30px] w-full bg-white focus:outline-none
             ${
               focused ? "focused-date-picker" : "date-picker"
             } focus:border-transparent ${
                fieldsWithErrors?.includes("dateOfBirth") &&
                "border-red-500 focus:ring-red-500 focus:border-red-500"
              } `}
            >
              <DatePicker
                ref={pickerRef}
                onChange={handleBirthDate}
                maxDate={dayjs(eighteenYearsAgo)}
                minDate={dayjs(eighteenYearsAgo).subtract(100, "year")}
                onError={() => {
                  setFieldsWithErrors([...fieldsWithErrors, "dateOfBirth"]);
                }}
                className="date-picker"
                format="DD/MM/YYYY"
                slotProps={{
                  textField: {
                    size: "small",
                    sx: {
                      width: "100%",
                    },
                  },
                }}
              />
            </div>

            <label className="mb-1">
              {governmentIdsByCountry.find((doc) => doc.name === body.country)
                ?.id || "Cédula de identidad"}
            </label>
            <Input
              name="governmentId"
              style={{ height: "40px" }}
              onChange={(e) => {
                const regex =
                  governmentIdsByCountry.find(
                    (doc) => doc.name === body.country
                  )?.regex || /^[0-9]+$/;
                if (!regex?.test(e.target.value)) {
                  e.preventDefault();
                  setFieldsWithErrors([...fieldsWithErrors, "governmentId"]);
                  return;
                } else {
                  setFieldsWithErrors(
                    fieldsWithErrors.filter((field) => field !== "governmentId")
                  );
                }

                handleChange(e);
              }}
              value={body.governmentId}
              maxLength={
                governmentIdsByCountry.find((doc) => doc.name === body.country)
                  ?.length || 10
              }
              fieldsWithErrors={fieldsWithErrors}
            />
          </div>
          {error ? (
            <p className={`text-red-500 text-sm mb-3 text-center w-[100%]`}>
              {error}
            </p>
          ) : (
            <div className="h-[20px] mb-3" />
          )}
          <Button
            onClick={handleSubmit}
            className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 "
          >
            Completar registro
          </Button>
        </>
      )}
    </div>
  );
};
