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
        className={`transition-all duration-${duration} ease-in-out object-contain ${
          size === "small"
            ? "w-14 h-14"
            : size === "medium"
            ? "w-24 h-24"
            : "w-46 h-46"
        }`}
      />
      <h1
        className={`font-[Manjari] font-bold bg-gradient-to-r from-[#bd00ff] to-[#8800ff] text-transparent bg-clip-text transition-all duration-${duration} ease-in-out ${
          size === "small"
            ? "text-3xl"
            : size === "medium"
            ? "text-[50px]"
            : "text-8xl mt-2"
        }`}
      >
        MUBI
      </h1>
    </div>
  );
};

export default Logo;
