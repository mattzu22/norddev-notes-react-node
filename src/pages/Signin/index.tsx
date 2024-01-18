import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

import { FiLogIn, FiMail, FiLock } from "react-icons/fi";


export function Signin() {
  return (
    <Container>
        <Form>
            <h1>NordDev Notes</h1>
            <p>Aplicações para salvar e gerenciar seus links úteis</p>

            <h2>Faça seu login</h2>

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
            
           <Button text="Entrar" type="button" />

           <a href="#">
            Criar conta
           </a>
           
        </Form>
    </Container>
  )
}

