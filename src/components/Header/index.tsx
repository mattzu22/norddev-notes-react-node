import { Container, Profile, Logout } from "./styled"
import { RiShutDownLine} from "react-icons/ri"

export function Header() {
  return (
    <Container>
        <Profile>
          <img src="https://github.com/mattzu22.png" alt="Foto do usuário" />

          <div>
            <span>Bem-vindo</span>
            <strong>Matheus Santos</strong>
          </div>
        </Profile>

        <Logout>
          <RiShutDownLine />
        </Logout>
    </Container>
  )
}

