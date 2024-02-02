import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";

interface User{
  user: {
    avatar: string,
    create_at: string,
    email: string,
    id: number,
    name:string,
    password:string,
    updated_at: string,
  }
}

export function Routes() {
  const { user } = useAuth() as User;

  return (
    <BrowserRouter>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}
