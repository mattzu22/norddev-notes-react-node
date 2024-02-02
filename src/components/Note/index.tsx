








import { Container } from "./styles"
import { Tags } from "../Tags"
import { ButtonHTMLAttributes } from "react"


interface Tag{
  id: string,
  name: string,
}
interface NoteProps extends ButtonHTMLAttributes<HTMLButtonElement>{
 data:{
  title: string,
  tags: Tag[]
 }
}

export function Note({data, ...rest}: NoteProps) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag =>{
              return(
              <Tags key={tag.id} title={tag.name} />
              )
            })
          }
        </footer>
      }
    </Container>
  )
}1

