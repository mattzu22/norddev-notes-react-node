import React, { useState } from "react";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

import avatarPreview from "../../assets/avatar.png";

interface User{
    avatar: string,
    create_at: string,
    email: string,
    id: number,
    name:string,
    password:string,
    updated_at: string,
}

interface UpdateProfileProps {
  user: User;
  avatarFile?: File | null;
}

interface UseAuthProps {
  user: User;
  updateProfile: ({ user, avatarFile }: UpdateProfileProps) => Promise<void>;
}

export function Profile() {
  const { user, updateProfile } = useAuth() as UseAuthProps;

  const [name, setName] = useState<string>(user.name);
  const [email, setEmail] = useState<string>(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPreview;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  
  const navegation = useNavigate();

  function handleBack() {
    navegation(-1);
  }

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event: React.ChangeEvent<HTMLInputElement>) {
    const file: File = event.target.files![0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handleBack}>
          <FiArrowLeft />
        </button>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do perfil" />

          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={(e) => setPasswordOld(e.target.value)}
        />
        <Input
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPasswordNew(e.target.value)}
        />

        <Button text="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
