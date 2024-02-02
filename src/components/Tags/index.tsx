





import { Container } from "./styles";

interface TagsProps{
  title: string;
}

export function Tags({title, ...rest}: TagsProps) {
  return(
    <Container {...rest}>
        {title}
    </Container>
  ) 
}
