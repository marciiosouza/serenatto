import { Button } from "@radix-ui/themes"

export const ButtonCard = ( {name} ) => {
  return <Button className="w-full bg-yellow-600">{name}</Button>;
}