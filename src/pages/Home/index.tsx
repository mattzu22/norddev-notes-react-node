import { FiPlus, FiSearch } from "react-icons/fi";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { ButtonText } from "../../components/ButtonText";
import { api } from "../../services/api";

interface TagsProps{
    id: number,
    name: string
}

interface Note {
  id: number,
  tags: [],
  title: string,
  user_id: number,
}

interface NotesProps{
    id: number,
    tags: [],
    title: string,
    user_id: number, 
}

export function Home() {
  const [ tags, setTags ] = useState<TagsProps[]>([]);
  const [ tagsSelected, setTagsSelected ] = useState<string[]>([]);
  const [ search, setSearch ] = useState("");
  const [ notes, setNotes ] = useState<NotesProps[]>([]);
 

  const navigate = useNavigate();

  function handleTagSelected(tagName: string){
    if (tagName === "all") {
        return setTagsSelected([]);
    }


    const alreadySelected = tagsSelected.includes(tagName);

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)

      setTagsSelected(filteredTags)
    }else{
      setTagsSelected(prevState =>[...prevState, tagName])
    }

  }

  function handleDetails(id: number) {
      navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }

    fetchTags();
  }, []);

  useEffect(() =>{
    async function fetchNotes() {
        const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
        setNotes(response.data)
    }

    fetchNotes();
  }, [tagsSelected, search])


  return (
    <Container>
      <Brand>
        <h1>NordeDev Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText 
            title="todos"
            isActive={tagsSelected.length === 0}
            onClick={()=> handleTagSelected("all")}
           />
        </li>

        {tags &&
          tags.map((tag) => {
            return (
              <li key={String(tag.id)}>
                <ButtonText 
                  title={tag.name}
                  onClick={()=> handleTagSelected(tag.name)}
                  isActive={tagsSelected.includes(tag.name)}
                />
              </li>
            );
          })}
      </Menu>

      <Search>
        <Input 
          placeholder="Pesquisa pelo título" 
          value={search}
          onChange={e => setSearch(e.target.value)}
          icon={FiSearch} 
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {
            notes.map((note) =>{
             return(
               <Note
                 key={String(note.id)}
                 data={note}
                 onClick={() => handleDetails(note.id)}
               />
             ) 
            })
          }
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
