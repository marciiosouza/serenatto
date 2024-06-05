import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { DialogDemo } from "./components/Dialog";
import coffe from "./assets/coffehome.jpg";
import bistro from "./assets/bistro.jpg";
import buffet from "./assets/buffet.jpg";
import delivery from "./assets/delivery.jpg";
import paralax from "./assets/paralax.jpg";
import coffebg from "./assets/coffebg.jpg";
import ImgCoffe from "./assets/coffeespecial.png";
import ImgCoffeTradicional from "./assets/coffetradicional.png";
import vitamina from "./assets/vitamina.png";
import paes from "./assets/paes.png";
import bgcoffe from "./assets/bg-coffe.png";
import { FaArrowDownLong } from "react-icons/fa6";

export default function App() {
  return (
    <>
      <Header />

      <div
        className="fixed-background relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${coffe})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-end ">
          <div className="py-8 px-4 sm:px-8 items-center flex flex-col bg-[#bd9560]/15 drop-shadow-2x rounded-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <h2 className=" text-white text-4xl md:text-4xl font-medium  w-full text-center pb-2">
              Sua pausa para desfrutar a vida.
            </h2>
            <p className=" text-white font-thin w-full text-center max-w-[450px]">
              Boas-vindas ao & Bistrô Serenatto! Um ambiente aconchegante e
              acolhedor para apreciar um bom café.
            </p>
          </div>
          <FaArrowDownLong className="animate-bounce w-10 h-10 bg-slate-200/10 m-10 rounded-full p-2 text-gray-300" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center pt-16 z-50">
        Nossos Serviços
      </h2>
      <section className="container mx-auto relative flex justify-center p-4">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={bgcoffe}
            className="w-full h-full object-cover object-center"
            alt="Background"
          />
        </div>
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          <Cart
            imageSrc={bistro}
            title="Café & Bistrô"
            description="Nosso bistrô oferece uma ampla variedade de cafés, smoothies, deliciosos salgados e sobremesas. Uma excelente opção para quem busca um lugar tranquilo e aconchegante."
          />
          <Cart
            imageSrc={buffet}
            title="Buffet"
            description="Buffet e catering personalizado para eventos, produções e celebrações. Com um menu variado e adaptável às preferências do cliente, atendimento atencioso e profissional."
          />
          <Cart
            imageSrc={delivery}
            title="Delivery"
            description="Para quem deseja desfrutar no conforto de casa, oferecemos delivery dos produtos. Com o mesmo cardápio variado de sempre, sem perder nosso sabor e padrão de qualidade."
          />
        </div>
      </section>

      <div
        className="fixed-background"
        style={{ backgroundImage: `url(${coffebg})` }}
      ></div>

      <h2 className="text-2xl font-bold text-center py-16">Nossos Produtos</h2>
      <main className="container mx-auto h-[550px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 z-0">
          <DialogDemo
            title="Cafés tradicionais"
            name="Cafés tradicionais"
            description="O café Serenatto é conhecido por seus blends tradicionais e saborosos, que agradam aos amantes da bebida. Nossos grãos são cuidadosamente selecionados e torrados para produzir um aroma rico e sabor equilibrado.
      Entre os cafés mais tradicionais da casa, destaca-se o Café Serenatto, um blend exclusivo de grãos com notas de chocolate e caramelo. Outra opção popular é o Café Italiano, um café expresso encorpado e intenso. Já o Café Cappuccino é uma escolha clássica para quem prefere uma bebida cremosa e suave."
            image={ImgCoffe}
            srcProduct={ImgCoffe}
          />
          <DialogDemo
            title="Cafés tradicionais"
            name="Cafés tradicionais"
            description="O café Serenatto é conhecido por seus blends tradicionais e saborosos, que agradam aos amantes da bebida. Nossos grãos são cuidadosamente selecionados e torrados para produzir um aroma rico e sabor equilibrado.
      Entre os cafés mais tradicionais da casa, destaca-se o Café Serenatto, um blend exclusivo de grãos com notas de chocolate e caramelo. Outra opção popular é o Café Italiano, um café expresso encorpado e intenso. Já o Café Cappuccino é uma escolha clássica para quem prefere uma bebida cremosa e suave."
            image={ImgCoffeTradicional}
            srcProduct={ImgCoffeTradicional}
          />
          <DialogDemo
            title="Cafés tradicionais"
            name="Cafés tradicionais"
            description="O café Serenatto é conhecido por seus blends tradicionais e saborosos, que agradam aos amantes da bebida. Nossos grãos são cuidadosamente selecionados e torrados para produzir um aroma rico e sabor equilibrado.
      Entre os cafés mais tradicionais da casa, destaca-se o Café Serenatto, um blend exclusivo de grãos com notas de chocolate e caramelo. Outra opção popular é o Café Italiano, um café expresso encorpado e intenso. Já o Café Cappuccino é uma escolha clássica para quem prefere uma bebida cremosa e suave."
            image={vitamina}
            srcProduct={vitamina}
          />
          <DialogDemo
            title="Cafés tradicionais"
            name="Cafés tradicionais"
            description="O café Serenatto é conhecido por seus blends tradicionais e saborosos, que agradam aos amantes da bebida. Nossos grãos são cuidadosamente selecionados e torrados para produzir um aroma rico e sabor equilibrado.
      Entre os cafés mais tradicionais da casa, destaca-se o Café Serenatto, um blend exclusivo de grãos com notas de chocolate e caramelo. Outra opção popular é o Café Italiano, um café expresso encorpado e intenso. Já o Café Cappuccino é uma escolha clássica para quem prefere uma bebida cremosa e suave."
            image={paes}
            srcProduct={paes}
          />
        </div>
      </main>

      <div
        className="fixed-background"
        style={{ backgroundImage: `url(${paralax})` }}
      ></div>
    </>
  );
}
