import { Container, Links, Content } from "./styled";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

import { useNavigate, useParams } from "react-router-dom";

import { Tags } from "../../components/Tags";

import { ButtonText } from "../../components/ButtonText";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Details() {
  const [note, setNote] = useState(null);

  const parms = useParams();

  const navigate = useNavigate();

  function handleBack(){
      navigate("/")
  }

  useEffect(() => {
    async function fetchNote() {
      const note = await api.get(`/notes/${parms.id}`);

      setNote(note.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      {note && (
        <main>
          <Content>
            <ButtonText title="Excluir nota" />

            <h1>{note.title}</h1>

            <p>{note.description}</p>

          {note.links &&
            <Section title="Links úteis">
              <Links>
                {
                  note.links.map((link) => {
                    return (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    );
                  })}
              </Links>
            </Section>
          }

          { 
            note.tags &&
            <Section title="Marcadores">
              {
                note.tags.map(tag =>{
                  return(
                    <Tags key={String(tag.id)} title={tag.name} />
                  )
                })
              }
            </Section>
          }

            <Button 
              text="Voltar"  
              onClick={handleBack}
            />
          </Content>
        </main>
      )}
    </Container>
  );
}
