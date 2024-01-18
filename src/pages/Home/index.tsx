import { FiPlus, FiSearch } from "react-icons/fi"

import { Container, Brand, Menu, Search, Content, NewNote} from "./styles"

import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Input } from "../../components/Input"
import { Note } from "../../components/Note"
import { ButtonText } from "../../components/ButtonText"

export function Home() {
  return (
    <Container>
        <Brand>
            <h1>NordeDev Notes</h1>
        </Brand>

        <Header />

        <Menu>
          <li>
            <ButtonText title="Todos" isActive />
          </li>
          <li>
            <ButtonText title="React" />
          </li>
          <li>
            <ButtonText title="Node" />
          </li>
        </Menu>

        <Search>
          <Input placeholder="Pesquisa pelo título" icon={FiSearch}/>
        </Search>

        <Content>
          <Section title="Minhas notas">
            <Note data={{
              title: 'React', 
              tags: [
                {id: '1', name:'react'},
                {id: '2', name: 'node'},
              ]
            }} 
            />
          </Section>
        </Content>

        <NewNote>
          <FiPlus />
          Criar nota
        </NewNote>
    </Container>
  )
}

