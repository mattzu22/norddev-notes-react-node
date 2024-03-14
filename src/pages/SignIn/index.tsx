import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useState } from "react";

import * as S from "./styles";

import { FiMail, FiLock } from "react-icons/fi";

import { PopUp } from "../../components/PopUp";

interface SigninProps {
  email: string;
  password: string;
}

interface SigninInProps {
  signIn: ({ email, password }: SigninProps) => Promise<void>;
  message: string;
  status: number;
}

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, message, status } = useAuth() as SigninInProps;

  async function handleSignIn() {
    await signIn({ email, password });
  }

  return (
    <S.Container>
      {message && <PopUp message={message} status={status} />}

      <S.Form>
        <h1>NordDev Notes</h1>
        <p>Aplicações para salvar e gerenciar seus links úteis</p>

        <h2>Faça seu login</h2>

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

        <Button text="Entrar" type="button" onClick={handleSignIn} />

        <Link to="/register">Criar conta</Link>
      </S.Form>

      <S.Background />
    </S.Container>
  );
}
