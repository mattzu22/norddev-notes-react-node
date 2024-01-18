import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NotesItem } from "../../components/Notesitem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título" />

          <TextArea placeholder="Observações" />

          <Section title="Links úteis">
            <NotesItem value="https://placeholder.com.br" />
            <NotesItem placeholder="Novo link" isNew />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NotesItem value="react" />
              <NotesItem placeholder="Novo tag" isNew />
            </div>
          </Section>

          <Button text="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
