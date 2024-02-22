




import { ButtonHTMLAttributes } from "react"
import { Container } from "./styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  title: string;
  isactive?: number | boolean;
}

export function ButtonText({ title, isactive = false, ...rest }: ButtonProps) {
  return (
    <Container  
      type="button" 
      isactive={isactive ? 1 : 0}
      {...rest} 
    >
        {title}
    </Container>
  )
}

