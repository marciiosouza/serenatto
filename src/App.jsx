// import { Box, Card, Text, Inset, Strong } from "@radix-ui/themes";
import { Header } from "./components/Header";
import coffe from "./assets/coffe.jpg";
import bistro from "./assets/bistro.jpg";
import buffet from "./assets/buffet.jpg";
import delivery from "./assets/delivery.jpg";
import paralax from "./assets/paralax.jpg";
import { Cart } from "./components/Cart";

export default function App() {
  return (
    <>
      <Header />

      <div
        className="fixed-background"
        style={{ backgroundImage: `url(${coffe})` }}
      />

      <h2 className="text-2xl font-bold text-center pt-16">Nossos Serviços</h2>
      <section className="container mx-auto flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4">
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
        style={{ backgroundImage: `url(${paralax})` }}
      />
    </>
  );
}
