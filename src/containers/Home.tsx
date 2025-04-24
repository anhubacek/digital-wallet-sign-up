import { useEffect, useState } from "react";
import Logo from "../components/Logo";

const Home = () => {
  const [logoSize, setLogoSize] = useState<"large" | "small" | "medium">(
    "large"
  );

  useEffect(() => {
    setTimeout(() => {
      setLogoSize("medium");
    }, 1000);
  }, []);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Logo size={logoSize} />
    </div>
  );
};
export default Home;
