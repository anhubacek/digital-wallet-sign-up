import { useState } from "react";
import { Button, GeoLocation, Input, Logo } from "../components";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
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
              <Input />
              <label className="mb-1">Contraseña</label>
              <Input type="password" />
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
                <Input label="Nombre" />
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
                <Input label="Código Postal" />
                <label className="mb-1">Provincia</label>
                <GeoLocation
                  className="mb-2 py-1 px-5 border border-gray-300 rounded-[30px] w-full bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent "
                  geoId={body.country}
                  onChange={(value) =>
                    setBody({
                      ...body,
                      province: value,
                    })
                  }
                />
              </div>
              <div className="w-full hidden md:flex flex-col">
                <Input label="Apellido" />
                <Input label="Dirección" />
                <label className="mb-1">País</label>
                <GeoLocation
                  className="mb-2 py-1 px-5 border border-gray-300 rounded-[30px] w-full bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent "
                  isCountry
                  onChange={(value) =>
                    setBody({
                      ...body,
                      country: value,
                    })
                  }
                />
                <label className="mb-1">Ciudad</label>
                <GeoLocation
                  className="mb-2 py-1 px-5 border border-gray-300 rounded-[30px] w-full bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent "
                  geoId={body.city}
                  onChange={(value) =>
                    setBody({
                      ...body,
                      city: value,
                    })
                  }
                />
              </div>
              <div className="w-full flex flex-col md:hidden ">
                <Input label="Nombre" />
                <Input label="Apellido" />
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

                <Input label="Dirección" />
                <Input label="Código Postal" />
                <label className="mb-1">País</label>
                <GeoLocation
                  className="mb-2 py-1 px-5 border border-gray-300 rounded-[30px] w-full bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent "
                  isCountry
                  onChange={(value) =>
                    setBody({
                      ...body,
                      city: value,
                    })
                  }
                />
                <label className="mb-1">Provincia</label>
                <GeoLocation
                  className="mb-2 py-1 px-5 border border-gray-300 rounded-[30px] w-full bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent "
                  geoId={body.country}
                  onChange={(value) =>
                    setBody({
                      ...body,
                      province: value,
                    })
                  }
                />
                <label className="mb-1">Ciudad</label>
                <GeoLocation
                  className="mb-2 py-1 px-5 border border-gray-300 rounded-[30px] w-full bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent "
                  geoId={body.city}
                  onChange={(value) =>
                    setBody({
                      ...body,
                      city: value,
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
