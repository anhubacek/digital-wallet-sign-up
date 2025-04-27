interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  fieldsWithErrors: string[];
}

export const Input = ({ label, fieldsWithErrors, ...props }: IProps) => {
  return (
    <>
      <label className="mb-1">{label}</label>
      <input
        {...props}
        className={`mb-2 py-2 px-5 border border-gray-300 rounded-[30px] w-full bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent ${
          fieldsWithErrors?.includes(props.name || "") &&
          "border-gray-500 focus:ring-gray-500 focus:border-gray-500"
        }`}
      />
    </>
  );
};
