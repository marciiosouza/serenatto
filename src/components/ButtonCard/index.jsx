import { Button } from "@radix-ui/themes"

export const ButtonCard = ( {name} ) => {
  return <Button className="w-full bg-red-950">{name}</Button>;
}