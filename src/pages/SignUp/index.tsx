import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

import { FiLogIn, FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";


export function SignUp() {
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
            />
            <Input 
                placeholder="E-mail"
                type="text"
                icon={FiMail}  
            />
            <Input 
                placeholder="Senha"
                type="password"
                icon={FiLock}  
            />
            
           <Button text="Cadastrar" type="button" />

           <Link to="/">
            Voltar para o login
           </Link>
           
        </Form>
    </Container>
  )
}

