




import { ButtonHTMLAttributes } from "react"
import { Container } from "./styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  title: string;
  isActive?: boolean;
}

export function ButtonText({ title, isActive = false, ...rest }: ButtonProps) {
  return (
    <Container  
      type="button" 
      isActive={isActive}
      {...rest} 
    >
        {title}
    </Container>
  )
}

