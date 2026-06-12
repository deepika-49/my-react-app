import { createContext, useContext } from "react";
export const EmployeeContext=createContext();
export const useEmployee=() => useContext(EmployeeContext);
