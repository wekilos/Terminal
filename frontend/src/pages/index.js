import { lazy } from "react";

export const Login = lazy(() => import("./login/login"));
export const Home = lazy(() => import("./home/home"));
export const Customers = lazy(() => import("./customers/customers"));
export const Loans = lazy(() => import("./loans/loans"));
export const Stores = lazy(() => import("./stores/stores"));
export const Users = lazy(() => import("./users/users"));
export const Terminallar = lazy(() => import("./terminallar/terminallar"));
export const Hasaplar = lazy(() => import("./hasaplar/hasaplar"));
export const Tolegler = lazy(() => import("./tolegler/tolegler"));
