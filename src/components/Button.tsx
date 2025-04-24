import { Link } from "react-router-dom";

interface IProps {
  link?: string;
  children?: React.ReactNode;
}

const BaseButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="flex items-center justify-center transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-500 to-indigo-500 text-white cursor-pointer font-semibold p-2 pt-4 px-8 rounded-full hover:bg-purple-600 hover:bg-indigo-600 font-[Manjari] text-xl">
      {children}
    </button>
  );
};

const Button = ({ link, children }: IProps) => {
  if (link) {
    return (
      <Link to={link} className="">
        <BaseButton>{children}</BaseButton>
      </Link>
    );
  } else {
    return <BaseButton>{children}</BaseButton>;
  }
};

export default Button;
