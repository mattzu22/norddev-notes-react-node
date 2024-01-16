import { Container } from "./styles"

export function Button({text, loading = false, ...rest}) {
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


