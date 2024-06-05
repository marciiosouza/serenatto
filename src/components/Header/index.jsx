import { useState, useEffect } from "react";
import { Skeleton, Switch } from "@radix-ui/themes";
import logo from "../../assets/logo.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-around items-center px-10 py-2 shadow-lg fixed w-full top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="brand">
        <img src={logo} alt="Logo Serenatto" />
      </div>

      <ul className="flex gap-8">
        <li className="font-medium text-[#bd9560]">
          <a href="#">Início</a>
        </li>
        <li className="font-medium text-[#bd9560]">
          <a href="#">Sobre</a>
        </li>
        <li className="font-medium text-[#bd9560]">
          <a href="#">Contato</a>
        </li>
        {/* <li className="flex gap-2 items-center">
          <Skeleton loading={false}>
            <Switch color="orange" defaultChecked />
          </Skeleton>
          <a className="text-[#bd9560]">Modo Noturno</a>
        </li> */}
      </ul>
    </nav>
  );
};
