import { useAuth } from "../../hooks/auth"
import { Container, Profile, Logout } from "./styled"
import { RiShutDownLine} from "react-icons/ri"
import avatarPreview from "../../assets/avatar.png"

import { api } from "../../services/api"  
import { Context } from "react"

interface User {
  avatar: string;
  created_at: string;
  email: string;
  id: number;
  name: string;
  password: string;
  updated_at: string;
}

interface UseAuthProps {
  logout: () => Context<unknown>; 
  user: User;
}


export function Header() {
  const { logout, user } = useAuth() as UseAuthProps;

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPreview

  return (
    <Container>
        <Profile to="/profile">
          <img src={avatarUrl} alt="Foto do usuário" />

          <div>
            <span>Bem-vindo</span>
            <strong>{user.name}</strong>
          </div>
        </Profile>

        <Logout onClick={logout}>
          <RiShutDownLine />
        </Logout>
    </Container>
  )
}

