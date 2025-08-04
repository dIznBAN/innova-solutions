import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa'
import { Container, Card, Title, Form, InputGroup, InputIcon, Input, SubmitButton, BackLink, SuccessMessage } from './styles'

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 5000)
    }
  }

  return (
    <Container>
      <Card>
        <BackLink as={Link} to="/login">
          <FaArrowLeft /> Voltar ao Login
        </BackLink>
        
        <Title>Recuperar Senha</Title>
        
        {isSubmitted ? (
          <SuccessMessage>
            Instruções de recuperação foram enviadas para seu e-mail!
          </SuccessMessage>
        ) : (
          <Form onSubmit={handleSubmit}>
            <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>
              Digite seu e-mail para receber as instruções de recuperação
            </p>
            
            <InputGroup>
              <InputIcon>
                <FaEnvelope />
              </InputIcon>
              <Input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>
            
            <SubmitButton type="submit">
              Enviar Instruções
            </SubmitButton>
          </Form>
        )}
      </Card>
    </Container>
  )
}

export default ForgotPasswordPage