import { Skeleton, Switch } from '@radix-ui/themes';
import logo from '../../assets/logo.png'

export const Header = () => {
  return (
    <nav className="flex justify-between items-center px-10  py-2 shadow-lg fixed w-full top-0 bg-gray-200 z-50">
      <div className="brand">
        <img src={logo} alt="Logo Serenatto" />
      </div>

      <ul className="flex gap-8">
        <li className="font-medium">
          <a href="#">Início</a>
        </li>
        <li className="font-medium ">
          <a href="#">Sobre</a>
        </li>
        <li className="font-medium ">
          <a href="#">Contato</a>
        </li>
        <li className="flex gap-2 items-center">
          <Skeleton loading={false}>

          <Switch variant="surface" />
          </Skeleton>
          <a>Modo Noturno</a>
        </li>
      </ul>
    </nav>
  );
}