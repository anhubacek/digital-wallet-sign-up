import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import { ISignUpBody } from "../../containers/SignUp";
import { Button } from "../Button";
import { Input } from "../Input";
import { GeoLocation } from "../LocationInput";

import "react-international-phone/style.css";

import {
  getEmptyFields,
  validateNonEmptyFields,
} from "../../utils/validations";
import { locationInputClassName } from "../../utils/classes";

interface StepTwoProps {
  setStep: (step: number) => void;
  body: ISignUpBody;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setBody: (body: ISignUpBody) => void;
  fieldsWithErrors: string[];
  setFieldsWithErrors: (fields: string[]) => void;
}

export const StepTwo = ({
  handleChange,
  setStep,
  body,
  setBody,
  fieldsWithErrors,
  setFieldsWithErrors,
}: StepTwoProps) => {
  const [error, setError] = useState<string | null>(null);

  const { name, lastName, phone, address, zipCode, country, province, city } =
    body;
  const stepFields = {
    name,
    lastName,
    phone,
    address,
    zipCode,
    country,
    province,
    city,
  };

  const handleNextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateNonEmptyFields(stepFields)) {
      setError("Por favor completa todos los campos para continuar");
      setFieldsWithErrors(getEmptyFields(stepFields));
      return;
    }
    setStep(3);
  };

  console.log("body", body);
  return (
    <div className="flex flex-col items-center w-full ">
      <h3 className="relative text-lg text-[#4d4d4d] text-center md:w-[100%] ">
        ¡Ya falta poco! 🌟 <br /> Sólo necesitamos algunos datos para terminar
        de abrir tu cuenta.
      </h3>
      <div className="flex w-full flex-col md:flex-row gap-4 my-4">
        <div className=" w-full hidden md:flex flex-col">
          <Input
            onChange={handleChange}
            label="Nombre"
            name="name"
            value={body.name}
            fieldsWithErrors={fieldsWithErrors}
          />
          <label className="mb-1">Teléfono</label>
          <PhoneInput
            className={`mb-2 py-1 px-5 border border-gray-300 rounded-[30px] w-full bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent ${
              fieldsWithErrors?.includes("phone") &&
              "border-red-500 focus:ring-red-500 focus:border-red-500"
            }`}
            defaultCountry="ar"
            value={body.phone}
            onChange={(phone) =>
              setBody({
                ...body,
                phone,
              })
            }
            name="phone"
          />
          <Input
            label="Código Postal"
            name="zipCode"
            onChange={handleChange}
            value={body.zipCode}
            fieldsWithErrors={fieldsWithErrors}
          />
          <label className="mb-1">Provincia</label>
          <GeoLocation
            className={locationInputClassName}
            geoId={body.countryId}
            name="province"
            fieldsWithErrors={fieldsWithErrors}
            onChange={({ name, id }) => {
              setBody({
                ...body,
                province: name,
                provinceId: id,
                cityId: "",
                city: "",
              });
            }}
          />
        </div>
        <div className="w-full hidden md:flex flex-col">
          <Input
            label="Apellido"
            name="lastName"
            onChange={handleChange}
            value={body.lastName}
            fieldsWithErrors={fieldsWithErrors}
          />
          <Input
            label="Dirección"
            onChange={handleChange}
            name="address"
            value={body.address}
            fieldsWithErrors={fieldsWithErrors}
          />
          <label className="mb-1">País</label>
          <GeoLocation
            className={locationInputClassName}
            isCountry
            name="country"
            fieldsWithErrors={fieldsWithErrors}
            onChange={({ name, id }) =>
              setBody({
                ...body,
                country: name,
                countryId: id,
                provinceId: "",
                province: "",
                cityId: "",
                city: "",
              })
            }
            value={body.country}
          />
          <label className="mb-1">Ciudad</label>
          <GeoLocation
            className={locationInputClassName}
            geoId={body.provinceId}
            isCity
            name="city"
            fieldsWithErrors={fieldsWithErrors}
            onChange={({ name, id }) =>
              setBody({
                ...body,
                city: name,
                cityId: id,
              })
            }
          />
        </div>
        <div className="w-full flex flex-col md:hidden ">
          <Input
            label="Nombre"
            onChange={handleChange}
            name="name"
            value={body.name}
            fieldsWithErrors={fieldsWithErrors}
          />
          <Input
            label="Apellido"
            name="lastName"
            onChange={handleChange}
            value={body.lastName}
            fieldsWithErrors={fieldsWithErrors}
          />
          <label className="mb-1">Teléfono</label>
          <PhoneInput
            className="mb-2 py-1 px-5 border border-gray-300 rounded-[30px] w-full bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent "
            defaultCountry="ar"
            value={body.phone}
            onChange={(phone) =>
              setBody({
                ...body,
                phone,
              })
            }
          />

          <Input
            label="Dirección"
            onChange={handleChange}
            name="address"
            value={body.address}
            fieldsWithErrors={fieldsWithErrors}
          />
          <Input
            label="Código Postal"
            onChange={handleChange}
            name="zipCode"
            value={body.zipCode}
            fieldsWithErrors={fieldsWithErrors}
          />
          <label className="mb-1">País</label>
          <GeoLocation
            className={locationInputClassName}
            isCountry
            name="country"
            fieldsWithErrors={fieldsWithErrors}
            onChange={({ name, id }) =>
              setBody({
                ...body,
                country: name,
                countryId: id,
                provinceId: "",
                province: "",
                city: "",
                cityId: "",
              })
            }
          />
          <label className="mb-1">Provincia</label>
          <GeoLocation
            className={locationInputClassName}
            geoId={body.countryId}
            name="province"
            fieldsWithErrors={fieldsWithErrors}
            onChange={({ name, id }) =>
              setBody({
                ...body,
                province: name,
                provinceId: id,
                cityId: "",
                city: "",
              })
            }
          />
          <label className="mb-1">Ciudad</label>
          <GeoLocation
            className={locationInputClassName}
            geoId={body.provinceId}
            isCity
            name="city"
            fieldsWithErrors={fieldsWithErrors}
            onChange={({ name, id }) =>
              setBody({
                ...body,
                city: name,
                cityId: id,
              })
            }
          />
        </div>
      </div>
      {error && (
        <p className="text-red-500 text-sm mb-3 text-center w-[90%]">{error}</p>
      )}
      <Button
        onClick={handleNextStep}
        className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
      >
        Continuar
      </Button>
    </div>
  );
};
