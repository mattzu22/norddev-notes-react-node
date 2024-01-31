import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";

import { Container, Form, Background } from "./styles";

import { FiMail, FiLock } from "react-icons/fi";
import { api } from "../../services/api";


export function SignIn() {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [data, setData] = useState({});

  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({email, password})
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    
    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);
  
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
                onChange={e => setEmail(e.target.value)}  
            />
            <Input 
                placeholder="Senha"
                type="password"
                icon={FiLock} 
                onChange={e => setPassword(e.target.value)}   
            />
            
           <Button text="Entrar" type="button" onClick={handleSignIn} />

           <Link to="/register">
              Criar conta
           </Link>
           
        </Form>
        
        <Background />
    </Container>
  )
}

