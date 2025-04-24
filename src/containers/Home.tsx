import { useEffect, useState } from "react";
import Logo from "../components/Logo";

const Home = () => {
  const [logoSize, setLogoSize] = useState<"large" | "small" | "medium">(
    "large"
  );
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLogoSize("medium");
      setExpanded(true);
    }, 300);
  }, []);
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#8800ff]">
      <div
        className={`bg-[white] ${
          !expanded ? "rounded-[10px]" : ""
        } transition-all duration-1000 w-${!expanded ? "[300px]" : "full"} h-${
          !expanded ? "[300px]" : "screen"
        }  flex justify-center items-center flex-col `}
      >
        <Logo size={logoSize} />
      </div>
    </div>
  );
};
export default Home;
