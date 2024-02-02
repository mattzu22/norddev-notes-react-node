
import { InputHTMLAttributes } from "react";
import { Container } from "./styles"
import { IconType } from "react-icons/lib";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType ;
}

export function Input({icon: Icon, ...rest}: InputProps) {
  return (
    <Container>
        {Icon && <Icon size={20} />}
        <input {...rest}/>
    </Container>
  )
}

