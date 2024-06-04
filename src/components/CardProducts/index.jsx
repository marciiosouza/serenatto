import { Box, Inset, Text, Strong, Card } from "@radix-ui/themes";

export const CardProducts = ({ image, name }) => {
  return (
    <>
      <section className="px-8 py-26">
        <Box maxWidth="240px" className="text-center py-32 flex flex-col">
          <Card>
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src={image}
                alt="Bold typography"
                className="h-[210px] w-full"
              />
            </Inset>
            <Text as="p" size="3">
              <Strong className="text-lg"> {name} </Strong>
            </Text>
          </Card>
        </Box>
      </section>
    </>
  );
};
