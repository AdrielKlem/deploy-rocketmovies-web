import { Container } from "./styles";

export function Button({ title, loading=false, ...rest }) {
    return(
    <Container type="button"
        disabled={loading}
        {...rest}
    >
        { loading ? "Carregando..." : title ? title : 'Escreve a função do botão'}
    </Container>
    )
}