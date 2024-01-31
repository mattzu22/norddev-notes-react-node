import { Container, Form } from "./styles";

import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NotesItem } from "../../components/Notesitem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

import { api } from "../../services/api";












export function New() {
  const [ title, setTitle] = useState("");
  const [ description, setDescription] = useState("");

  const [ links, setLinks ] = useState([]);
  const [ newLink, setNewLink ] = useState("");

  const [ tags, setTags ] = useState([]);
  const [ newTag, setNewTag ] = useState("");

  const navegation = useNavigate();

  function handleAddTag(){
    setTags(prevState=> [...prevState, newTag]);
    setNewTag("");
  }  

  function handleRemoveTag(deleted){
    setTags(prevState=> prevState.filter(tag => tag !== deleted))
  }

  function handleAddLink(){
    setLinks(prevState=> [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted){
    setLinks(prevState=> prevState.filter(link => link !== deleted))
  }

  async function handleNewNote(){
    if (!title) {
      return alert("Você deixou o campo de titulo vazio.")
    }

    if (newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou para adicionar. Clique no campo para adicionar ou deixe o campo vazio.")
    }

    if (newLink) {
      return alert("Você deixou um link no campo para adicionar, mas não clicou para adicionar. Clique no campo para adicionar ou deixe o campo vazio.")
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links,
    });

    alert("Nota criada com sucesso!");

    navegation("/");
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input 
            placeholder="Título" 
            icon={undefined} 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <TextArea 
            placeholder="Observações" 
            value={description}
            onChange={e => setDescription(e.target.value)} 
          />

          <Section title="Links úteis">
            {
              links.map((link, index) => {
                return(
                  <NotesItem 
                    key={String(index)}
                    value={link}
                    onClick={() => handleRemoveLink(link)}
                />
                )
              })
            }
            <NotesItem 
              placeholder="Novo link" 
              isNew 
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => {
                  return(
                    <NotesItem 
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)} 
                  />
                  )
                })
              }
              <NotesItem 
                placeholder="Novo tag" 
                isNew
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag} 
              />
            </div>
          </Section>

          <Button 
            text="Salvar" 
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  );
}
