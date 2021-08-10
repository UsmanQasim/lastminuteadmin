import Login from "../auth/Login/Login";
import App from "../../App";

export const authRoutes = [{ destination: "/", comp: Login }];
export const appRoutes = [{ destination: "/", comp: App }];
