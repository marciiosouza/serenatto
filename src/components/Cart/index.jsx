import { Box, Card, Text, Inset, Strong } from "@radix-ui/themes";
import { ButtonCard } from "../ButtonCard";

export const Cart = ({ imageSrc, title, description }) => {
  return (
    <Box maxWidth="300px" className="py-10">
      <Card size="2">
        <Inset clip="padding-box" side="top" pb="current">
          <img
          className="object-fill"
            src={imageSrc}
            alt="Bold typography"
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: 200,
              backgroundColor: "var(--gray-5)",
            }}
          />
        </Inset>
        <Text as="p" size="3" className="py-3">
          <Strong className="text-lg">{title}</Strong>
        </Text>

        {description}
        <div className="pt-5">
          <ButtonCard name="Quero detalhes!"  />
        </div>
      </Card>
    </Box>
  );
};
