import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";


export const AuthContext = createContext({});

interface AuthProps {
  children: React.ReactNode;
}

interface SigninProps {
  email: string;
  password: string;
}

interface User{
    avatar: string,
    create_at: string,
    email: string,
    id: number,
    name:string,
    password:string,
    updated_at: string,
}

interface UpdateProfileProps {
  user: User;
  avatarFile?: File;
}
interface DataProps {
  token?: string;
  user?: User;
}

export function AuthProvider({ children }: AuthProps) {
  const [data, setData] = useState<DataProps>();


  async function signIn({ email, password }: SigninProps) {
    try {
      const response = await api.post("/sessions", { email, password });

      const { user, token } = response.data;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));

      //esta sendo inserido um token de autorização no cabeçalho por padrão em todas as requisições
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar!");
      }
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setData({});
  }

  async function updateProfile({ user, avatarFile }: UpdateProfileProps) {
    try {
      if (avatarFile) {
        //formdata = enviar como arquivo
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      //o setItem serve pra adicionar ou substituir um item existente
      localStorage.setItem("user", JSON.stringify(user));

      setData({ user, token: data?.token });

      alert("Perfil atualizado com sucesso!");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar os dados!");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    
    if (token && user ) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, user: data?.user, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
