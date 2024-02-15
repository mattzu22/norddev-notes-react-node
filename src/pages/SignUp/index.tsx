import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Container, Form, Background } from "./styles";

import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { PopUp } from "../../components/PopUp";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(0);

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      setMessage("Preencha os campos!");
      setStatus(401);
      return;
    }

    api
      .post("/users", { password, email, name })
      .then(() => {
        setMessage("Usuário cadstrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          setMessage(error.response.data.message);
          setStatus(error.response.status);
        } else {
          setMessage("Não foi possível cadastrar");
        }
      });
  }

  useEffect(() => {
    const clearMessageTimeout = setTimeout(() => {
      setMessage("");
      setStatus(0);
    }, 3000); 

    return () => clearTimeout(clearMessageTimeout);
  }, [message, status]);

  return (
    <Container>
      {message && <PopUp message={message} status={status} />}

      <Background />

      <Form>
        <h1>NordDev Notes</h1>
        <p>Aplicações para salvar e gerenciar seus links úteis</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button text="Cadastrar" type="button" onClick={handleSignUp} />

        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  );
}
