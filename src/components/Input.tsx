interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, ...props }: IProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        {...props}
        className="mb-2 py-2 px-5 border border-gray-300 rounded-[30px] w-full bg-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent"
      />
    </>
  );
};
