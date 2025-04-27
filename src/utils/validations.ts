/* eslint-disable @typescript-eslint/no-unused-vars */
import { ISignUpBody } from "../containers/SignUp";

export const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/;

export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
// at least 8 characters long.
// at least one letter.
// at least one digit.
// special characters (`@$!%*?&`)

export const validateEmail = (value: string) => {
  return emailRegex.test(value);
};
export const validatePassword = (value: string) => {
  return passwordRegex.test(value);
};

export const validateName = (value: string) => {
  return value.length >= 3 && value.length <= 20;
};

export const validateZipCode = (value: string) => {
  return /^[A-Za-z\d]{1,10}$/.test(value); // 1 to 10 characters long, alphanumeric
};

export const validateNonEmptyFields = (obj: Partial<ISignUpBody>) => {
  return Object.values(obj).every((value) =>
    typeof value === "string"
      ? value.trim() !== ""
      : value !== null && value !== undefined
  );
};


export const getEmptyFields = (obj: Partial<ISignUpBody>): string[] => {
    return Object.entries(obj)
        .filter(([key, value]) => {
            if (key === "phone" && typeof value === "string" && value.length < 8) {
                return true;
            }
            return typeof value === "string"
                ? value.trim() === ""
                : value === null || value === undefined;
        })
        .map(([key]) => key);
};