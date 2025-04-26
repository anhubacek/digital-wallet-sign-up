/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";

interface IProps {
  link?: string;
  children?: React.ReactNode;
  onClick?: (e: any) => void;
  className?: string;
}

export const Button = ({ link, children, onClick }: IProps) => {
  const commonClass =
    "flex items-center justify-center transition-colors duration-500 bg-gradient-to-r from-purple-500 to-indigo-500 text-white cursor-pointer font-semibold  p-2 pt-3 md:pt-4 px-8 rounded-full font-[Manjari] text-md md:text-xl shadow-xl ";

  if (link) {
    return (
      <Link to={link} className="group">
        <button
          onClick={onClick}
          className={`${commonClass} group-hover:from-purple-700 group-hover:to-indigo-800`}
        >
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className={`${commonClass} hover:from-purple-700 hover:to-indigo-800`}
      >
        {children}
      </button>
    );
  }
};
