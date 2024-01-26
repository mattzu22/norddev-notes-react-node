import { useAuth } from "../../hooks/auth"
import { Container, Profile, Logout } from "./styled"
import { RiShutDownLine} from "react-icons/ri"

export function Header() {
  const { logout, user } = useAuth();

  return (
    <Container>
        <Profile to="/profile">
          <img src={user.avatar} alt="Foto do usuário" />

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

