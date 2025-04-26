/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker } from "@mui/x-date-pickers";
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { ISignUpBody } from "../../containers/SignUp";
import { Button } from "../Button";
import { Input } from "../Input";

interface StepThreeProps {
  setStep: (step: number) => void;
  body: ISignUpBody;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setBody: (body: ISignUpBody) => void;
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

export const StepThree = ({
  handleChange,
  setStep,
  body,
  setBody,
}: StepThreeProps) => {
  const today = new Date();
  const eighteenYearsAgo = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  const [focused, setFocused] = useState(false);
  const pickerRef = useRef(null);

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
    <div className="flex flex-col items-center w-full">
      <h3 className="relative text-lg text-[#4d4d4d] text-center md:w-[100%]">
        Por último, vamos a validar tu identidad 🌟
      </h3>
      <div className="flex flex-col w-full space-y-2 my-4">
        <label className="mb-1">Fecha de nacimiento</label>
        <div
          className={` mb-2 py-1 px-2 border border-gray-300 rounded-[30px] w-full bg-white focus:outline-none
             ${
               focused ? "focused-date-picker" : "date-picker"
             } focus:border-transparent `}
        >
          <DatePicker
            ref={pickerRef}
            onChange={handleBirthDate}
            maxDate={dayjs(eighteenYearsAgo)}
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
