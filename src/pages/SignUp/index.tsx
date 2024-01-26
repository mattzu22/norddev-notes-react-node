import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState} from "react";

import { api } from "../../services/api";

import { Container, Form, Background } from "./styles";

import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";


export function SignUp() {
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const navigate = useNavigate();

  function handleSignUp(){
    if (!name || !email || !password) {
      return alert("Preencha os campos!")
    }

    api.post("/users", { password, email, name })
    .then(() =>{
      alert("Usuário cadstrado com sucesso!")
      navigate("/")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possível cadastrar")
      }
    })

  }

  return (
    <Container>
       <Background />

        <Form>
            <h1>NordDev Notes</h1>
            <p>Aplicações para salvar e gerenciar seus links úteis</p>

            <h2>Crie sua conta</h2>

            <Input 
                placeholder="Nome"
                type="text"
                icon={FiUser} 
                onChange={e => setName(e.target.value)} 
            />
            <Input 
                placeholder="E-mail"
                type="text"
                icon={FiMail}  
                onChange={e => setEmail(e.target.value)} 
            />
            <Input 
                placeholder="Senha"
                type="password"
                icon={FiLock} 
                onChange={e => setPassword(e.target.value)}  
            />
            
           <Button text="Cadastrar" type="button" onClick={handleSignUp} />

           <Link to="/">
            Voltar para o login
           </Link>
           
        </Form>
    </Container>
  )
}

