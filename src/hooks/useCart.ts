import { CartContext } from "@/contexts/useCart";
import { useContext } from "react";

export const useCart = () => useContext(CartContext)