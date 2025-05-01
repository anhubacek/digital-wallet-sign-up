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
        className={`mb-5 pt-2 pb-1 px-5 border border-gray-300 rounded-[30px] w-full bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent flex items-center ${
          fieldsWithErrors?.includes(props.name || "") &&
          "border-red-500 focus:ring-red-500 focus:border-red-500"
        } `}
      />
    </>
  );
};
