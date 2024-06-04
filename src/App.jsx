import React from "react";
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

export default function App() {
  return (
    <>
      <Header />

      <div className="fixed-background" style={{ backgroundImage: `url(${coffe})` }}></div>

      <h2 className="text-2xl font-bold text-center pt-16">Nossos Serviços</h2>
      <section className="container mx-auto flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4 z-0">
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

      <div className="fixed-background" style={{ backgroundImage: `url(${coffebg})` }}></div>

      <section className="container mx-auto h-[550px]">
        <h2 className="text-2xl font-bold text-center py-16">Nossos Produtos</h2>
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
      </section>

      <div className="fixed-background" style={{ backgroundImage: `url(${paralax})` }}></div>
    </>
  );
}
