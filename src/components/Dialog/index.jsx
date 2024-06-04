import * as Dialog from "@radix-ui/react-dialog";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CardProducts } from "../CardProducts";
import coffeImg from "../../assets/coffeImg.jpg";

export const DialogDemo = ({ name, description, image, srcProduct }) => {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <h4 className="text-violet11   inline-flex h-[35px] items-center justify-center  px-[15px] font-medium leading-none  focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
            <CardProducts image={srcProduct} name="Cafés Tradicionais" />
          </h4>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
              {name}
            </Dialog.Title>
            <img src={image} alt="" />
            <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
              {description}
            </Dialog.Description>

            <Dialog.Close asChild>
              <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                Fechar janela
              </button>
            </Dialog.Close>

            <Dialog.Close asChild>
              <button
                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                <IoCloseCircleOutline size={40} />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
