import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  text: string;
  loading?: boolean;
}

export function Button({text, loading = false, ...rest}: ButtonProps) {
  return (
    <Container
        type="button"
        disabled={loading}
        {...rest}
    >
        {loading ? "carregando..." : text}
    </Container>
  )
}


