import { useState } from "react";
import { Button, GeoLocation, Input, Logo } from "../components";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
const SignUp = () => {
  const [step, setStep] = useState(1);
  const [body, setBody] = useState({
    email: "",
    name: "",
    lastName: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    province: "",
    country: "",
    dateOfBirth: "",
    governmentId: "",
    password: "",
    countryId: "",
    provinceId: "",
    cityId: "",
  });

  console.log("body", body);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBody((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen py-10 bg-gradient-to-tr from-purple-300 to-white font-[Manjari]`}
    >
      <div
        className={`flex flex-col items-center px-6 md:px-10 py-10 rounded-2xl shadow-lg w-[90%] ${
          step === 2 ? "md:w-160" : "md:w-120"
        }  bg-white space-y-4`}
      >
        <Logo size="small" className="" />
        {step === 1 && (
          <>
            <h3 className="relative text-lg text-[#4d4d4d] text-center md:w-[80%]">
              Estás a un paso de hacer tu vida más simple con{" "}
              <span className="text-yellow-500"> MUBI</span>🌟
              {/* 🌟 */}
            </h3>
            <div className="flex flex-col w-full space-y-2">
              <label className="mb-1">Correo electrónico</label>
              <Input name="email" onChange={handleInputChange} />
              <label className="mb-1">Contraseña</label>
              <Input
                name="password"
                onChange={handleInputChange}
                type="password"
                value={body.password}
              />
            </div>
            <Button
              onClick={() => setStep(2)}
              className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
            >
              Continuar
            </Button>
          </>
        )}
        {step === 2 && (
          <>
            <h3 className="relative text-lg text-[#4d4d4d] text-center md:w-[100%]">
              ¡Ya falta poco! 🌟 <br /> Sólo necesitamos algunos datos para
              terminar de abrir tu cuenta.
            </h3>
            <div className="flex w-full flex-col md:flex-row gap-4 ">
              <div className=" w-full hidden md:flex flex-col">
                <Input
                  onChange={handleInputChange}
                  label="Nombre"
                  name="name"
                  value={body.name}
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
                  label="Código Postal"
                  name="zipCode"
                  onChange={handleInputChange}
                  value={body.zipCode}
                />
                <label className="mb-1">Provincia</label>
                <GeoLocation
                  className="mb-2 py-1 px-5 border border-gray-300 rounded-[30px] w-full bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent "
                  geoId={body.countryId}
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
              </div>
              <div className="w-full hidden md:flex flex-col">
                <Input
                  label="Apellido"
                  name="lastName"
                  onChange={handleInputChange}
                  value={body.lastName}
                />
                <Input
                  label="Dirección"
                  onChange={handleInputChange}
                  name="address"
                  value={body.address}
                />
                <label className="mb-1">País</label>
                <GeoLocation
                  className="mb-2 py-1 px-5 border border-gray-300 rounded-[30px] w-full bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent "
                  isCountry
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
                  className="mb-2 py-1 px-5 border border-gray-300 rounded-[30px] w-full bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent "
                  geoId={body.provinceId}
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
                  onChange={handleInputChange}
                  name="name"
                  value={body.name}
                />
                <Input
                  label="Apellido"
                  name="lastName"
                  onChange={handleInputChange}
                  value={body.lastName}
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
                  onChange={handleInputChange}
                  name="address"
                  value={body.address}
                />
                <Input
                  label="Código Postal"
                  onChange={handleInputChange}
                  name="zipCode"
                  value={body.zipCode}
                />
                <label className="mb-1">País</label>
                <GeoLocation
                  className="mb-2 py-1 px-5 border border-gray-300 rounded-[30px] w-full bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent "
                  isCountry
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
                  className="mb-2 py-1 px-5 border border-gray-300 rounded-[30px] w-full bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent "
                  geoId={body.countryId}
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
                  className="mb-2 py-1 px-5 border border-gray-300 rounded-[30px] w-full bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent "
                  geoId={body.provinceId}
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

            <Button
              onClick={() => setStep(3)}
              className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
            >
              Continuar
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
export default SignUp;
