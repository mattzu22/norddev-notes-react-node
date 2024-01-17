import { Container, Links, Content } from "./styled";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

import { Tags } from "../../components/Tags";

import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao react
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias libero natus, ratione, temporibus fuga saepe dolor distinctio voluptatibus eligendi excepturi commodi deleniti unde? Nemo doloremque nam, voluptates repellat voluptatibus ducimus!
          </p>

          <Section title="Links úteis">
            <Links>
              <li>item1</li>
              <li>item2</li>
              <li>item3</li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tags title="express" />
            <Tags title="node" />
            <Tags title="react" />
          </Section>

          <Button text="Voltar" loading />
        </Content>
      </main>
    </Container>
  );
}
