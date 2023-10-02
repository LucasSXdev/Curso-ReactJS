import { useContext } from "react";
import { StockContext } from "../Context/StockContext";

export default function useStock() {
  return useContext(StockContext);
}
