import { HTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

export interface OptionItemInputProps extends HTMLAttributes<HTMLDivElement> {
  nameRegister: UseFormRegisterReturn;
  priceRegister: UseFormRegisterReturn;
}
