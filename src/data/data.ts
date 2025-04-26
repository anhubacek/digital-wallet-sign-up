export const governmentIdsByCountry = [
  { name: "Argentina", id: "DNI", length: 8, regex: /^[0-9]{1,8}$/ },
  {
    name: "Paraguay",
    id: "Cédula de identidad",
    length: 6,
    regex: /^[0-9]{1,6}$/,
  },
  { name: "Brasil", id: "CPF", length: 11, regex: /^[0-9]{1,11}$/ },
  {
    name: "Brasil",
    id: "Registro Geral (RG)",
    length: 9,
    regex: /^[0-9]{1,9}$/,
  },
  { name: "Chile", id: "RUN", length: 9, regex: /^[0-9kK]{1,9}$/ }, // allows 'k' as verifier digit
  { name: "Chile", id: "RUT", length: 9, regex: /^[0-9kK]{1,9}$/ },
  {
    name: "Colombia",
    id: "Cédula de ciudadanía",
    length: 10,
    regex: /^[0-9]{1,10}$/,
  },
  { name: "Perú", id: "DNI", length: 8, regex: /^[0-9]{1,8}$/ },
  { name: "México", id: "CURP", length: 18, regex: /^[A-Z0-9]{1,18}$/ }, // includes letters + numbers
  { name: "México", id: "INE", length: 13, regex: /^[0-9]{1,13}$/ },
  {
    name: "Venezuela",
    id: "Cédula de identidad",
    length: 8,
    regex: /^[0-9]{1,8}$/,
  },
  { name: "España", id: "DNI", length: 9, regex: /^[0-9]{8}[A-Z]$/ }, // 8 numbers + 1 letter
  {
    name: "Estados Unidos",
    id: "Social Security Number (SSN)",
    length: 9,
    regex: /^[0-9]{1,9}$/,
  },
  {
    name: "Bolivia",
    id: "Cédula de identidad",
    length: 7,
    regex: /^[0-9]{1,7}$/,
  },
  {
    name: "Ecuador",
    id: "Cédula de identidad",
    length: 10,
    regex: /^[0-9]{1,10}$/,
  },
];
