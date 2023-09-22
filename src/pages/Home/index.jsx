import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiPlus } from "react-icons/fi"
import { Container, Subheader, Content, Title, NewNote } from "./styles";

import { Note } from '../../components/Note';
import { Header } from "../../components/Header"
import { Section } from '../../components/Section';
import { useAuth } from "../../hooks/auth";

export function Home() {
    const [search, setSearch] = useState("")
    const [tags, setTags] = useState([])
    const [notes, setNotes] = useState([])
    const { user } = useAuth()

    const navigate = useNavigate()

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`notes/?user_id=${user.id}&title`)
            setNotes(response.data)
        }

        fetchNotes()
    }, [search])

    return (
        <Container>
            <Header />

            <Subheader>
                <Title>
                    Meus Filmes
                </Title>
                <NewNote to="/new">
                    <FiPlus />
                        Adicionar Filme
                </NewNote>
            </Subheader>

            <Content>
                <Section>
                    {
                        notes.map(note => (
                            <Note 
                                key={String(note.id)}
                                data={note}
                                onClick={() => handleDetails(note.id)}
                            />
                        ))
                    }
                </Section>
            </Content>
        </Container>
    )
}