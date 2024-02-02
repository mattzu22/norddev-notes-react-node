import { Container } from "./style"

interface SectionProps{
  title: string;
  children: React.ReactNode
}

export function Section({title, children}: SectionProps) {
  return (
    <Container>
        <h2>{title}</h2>
        {children}
    </Container>
  )
}

