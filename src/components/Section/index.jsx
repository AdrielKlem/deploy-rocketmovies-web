import { Container } from "./styles"

export function Section({ title, children }) {
    if (title) {
        title = `${title}`
    } else {
        title = ''
    }


    return (
        <Container>
            <h2>{title}</h2>
            { children }
        </Container>
    )
}