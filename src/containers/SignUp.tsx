import { useEffect, useState } from "react";
import { Logo } from "../components";
import { StepOne } from "../components/sign-up/StepOne";
import { StepTwo } from "../components/sign-up/StepTwo";
import { StepThree } from "../components/sign-up/StepThree";

import { useNavigate } from "react-router-dom";
export interface ISignUpBody {
  email: string;
  name: string;
  lastName: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  province: string;
  country: string;
  dateOfBirth: string;
  governmentId: string;
  password: string;
  countryId: string;
  provinceId: string;
  cityId: string;
}

const SignUp = () => {
  const navigate = useNavigate();
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

  //  console.log("body", body);

  useEffect(() => {
    if (step === 4) {
      navigate("/home");
    }
  }, [step]);

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
        className={`flex flex-col items-center px-6 md:px-10 py-8 rounded-2xl shadow-lg w-[90%] ${
          step === 2 ? "md:w-160" : "md:w-120"
        }  bg-white space-y-4`}
      >
        <Logo size="small" className="" />
        {step === 1 && (
          <StepOne
            handleChange={handleInputChange}
            setStep={setStep}
            body={body}
          />
        )}
        {step === 2 && (
          <StepTwo
            body={body}
            setBody={setBody}
            handleChange={handleInputChange}
            setStep={setStep}
          />
        )}
        {step === 3 && (
          <StepThree
            handleChange={handleInputChange}
            setStep={setStep}
            body={body}
            setBody={setBody}
          />
        )}
      </div>
    </div>
  );
};
export default SignUp;
