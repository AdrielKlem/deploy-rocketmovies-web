import { api } from "../../services/api"

import { useEffect, useState } from "react"
import { Container, Content, Profile } from "./styles"
import { BsArrowLeftShort, BsFillClockFill } from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router-dom'

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { Star } from "../../components/Star"
import { useAuth } from "../../hooks/auth"

export function Details() {
  const { user } = useAuth()
  const [data, setData] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja apagar a nota?")

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
    <Header/>

    { data && 
    <main>
      <Content>
        <header>
          <div 
            onClick={handleBack}
          >
            <BsArrowLeftShort /> Voltar
          </div>
        </header>

        <Section>
          <Profile>
            <div className="title">
              <h1>
                {data.title}
              </h1>
              <Star rating={data.rating} />
            </div>
            <div className="status">
                <img src={avatarUrl} alt="Foto do usuário" />
              <div id="user">
                <p>{user.name}</p>
              </div>
              <BsFillClockFill />
              <div id="timer">
                {data.created_at}
              </div>
            </div>
              {
                data.tags &&
                  <div className="tags">
                    {
                      data.tags.map(tag => (                      
                        <Tag 
                        key={String(tag.id)}
                        title={tag.name} />
                      ))
                    }
                  </div>
              }
          </Profile>
        </Section>
        <Section>
        <p>
          {data.description}
        </p>  
        </Section>
        <Button 
        title="Remover nota"
        onClick={handleRemove}
        />
      </Content>
    </main>
      }
    </Container>
    )
}