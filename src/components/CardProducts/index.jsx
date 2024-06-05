import { Box, Inset, Text, Strong } from "@radix-ui/themes";

export const CardProducts = ({ image, name }) => {
  return (
    <>
      <section className="">
        <Box maxWidth="240px" className="text-center flex flex-col">
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src={image}
                alt="Bold typography"
                className="h-[150px] w-full"
              />
            </Inset>
            <Text as="p" size="3">
              <Strong className="text-lg"> {name} </Strong>
            </Text>
        </Box>
      </section>
    </>
  );
};
