import { useState } from "react"
import { api } from "../../services/api"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Link, useNavigate } from 'react-router-dom'

import { BsArrowLeftShort } from 'react-icons/bs'
import { Container, Form, InputArea } from "./styles";

export function New() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

     const navigate = useNavigate()

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewNote() {
        const numberRating = Number(rating)

        if(!title) {
            return alert("Digite o título da nota")
        }
        
        if(!rating) {
            return alert("Você deixou o Rating vazio")
        } 

        if (numberRating > 5 || numberRating < 0) {
            return alert("Você deixou o Rating como valor incorreto")
        }     
        
        if(newTag) {
           return alert("Você deixou um TAG no campo para adicionar. Clique para adicionar ou deixe vazio.")
        }

        await api.post("/notes", {
            title,
            rating,
            description,
            tags
        })

        alert("nota criada com sucesso")
        
        navigate(-1)
    }

    function handleRemoveNote(tags) {
        const title = document.querySelector("#title")
        const rating = document.querySelector("#numberstar")
        const description = document.querySelector("#textarea")
       
        tags.map((tag) =>  handleRemoveTag(tag))
        
        title.value = ""
        rating.value = ""
        description.value = ""
    }

    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <Link to="/"><BsArrowLeftShort /> Voltar</Link>
                        <h1>Novo Filme</h1>
                    </header>

                    <Section title="Informações">
                        <InputArea>
                            <Input
                                placeholder="Título"
                                id="title"
                                onChange={event => setTitle(event.target.value)}
                                />
                            <Input
                                placeholder="Sua nota (de 0 a 5)"
                                id="numberstar"
                                onChange={event => setRating(event.target.value)}
                                />
                            <Textarea 
                                placeholder="Observações"
                                id="textarea"
                                onChange={event => setDescription(event.target.value)}
                            />
                        </InputArea>
                    </Section>
                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <NoteItem 
                                        key={String(index)}
                                        value={tag}
                                        onClick={() =>  handleRemoveTag(tag)}
                                    />
                                ))
                            }
                                <NoteItem 
                                    isnew
                                    placeholder="Novo Tag"
                                    value={newTag}
                                    onChange={event => setNewTag(event.target.value)}
                                    onClick={handleAddTag}
                                />
                        </div>
                    </Section>

                    <div className="buttons">
                        <Button 
                            title="Excluir filme"
                            onClick={e => handleRemoveNote(tags)}
                        />
                        <Button
                            title="Salvar alterações"
                            onClick={handleNewNote}
                        />
                    </div>
                </Form>
            </main>
        </Container>
    )
}