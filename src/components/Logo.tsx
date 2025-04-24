interface IProps {
  size: "small" | "medium" | "large";
  duration?: string;
}

const Logo = ({ size, duration = "2000" }: IProps) => {
  return (
    <div
      className={`flex items-center flex-col justify-center transition-all duration-${duration} ease-in-out`}
    >
      <img
        src="/assets/images/logo.png"
        alt="MUBI Logo"
        className={`transition-all duration-${duration} ease-in-out ${
          size === "small"
            ? "w-14 h-14"
            : size === "medium"
            ? "w-20 h-20"
            : "w-38 h-38"
        }`}
      />
      <h1
        className={` font-[Manjari] font-bold bg-gradient-to-r from-[#bd00ff] to-[#8800ff] text-transparent bg-clip-text transition-all duration-${duration} ease-in-out ${
          size === "small"
            ? "text-2xl"
            : size === "medium"
            ? "text-4xl"
            : "text-7xl"
        }`}
      >
        MUBI
      </h1>
    </div>
  );
};

export default Logo;
