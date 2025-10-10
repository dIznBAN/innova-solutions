import React, { useState } from 'react'
import {
  Container,
  Card,
  Title,
  Form,
  Section,
  SectionTitle,
  InputGroup,
  Input,
  TextArea,
  SubmitButton,
  BackLink,
  ErrorMessage
} from './styles'

const PartnerRegister = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    cnpj: '',
    ownerName: '',
    email: '',
    phone: '',
    website: '',
    couponTitle: '',
    discount: '',
    validUntil: '',
    description: ''
  })

  const [errors, setErrors] = useState({})

  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 2) return `(${numbers}`
    if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    if (numbers.length <= 10) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  const formatCNPJ = (value) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 5) return `${numbers.slice(0, 2)}.${numbers.slice(2)}`
    if (numbers.length <= 8) return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5)}`
    if (numbers.length <= 12) return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8)}`
    return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8, 12)}-${numbers.slice(12, 14)}`
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    let formattedValue = value

    if (name === 'phone') {
      formattedValue = formatPhone(value)
    } else if (name === 'cnpj') {
      formattedValue = formatCNPJ(value)
    }

    setFormData({
      ...formData,
      [name]: formattedValue
    })
  }

  const validateCNPJ = (cnpj) => {
    const cleanCNPJ = cnpj.replace(/\D/g, '')
    return cleanCNPJ.length === 14
  }

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validatePhone = (phone) => {
    const cleanPhone = phone.replace(/\D/g, '')
    return cleanPhone.length >= 10
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Nome da empresa é obrigatório'
    }

    if (!formData.cnpj.trim()) {
      newErrors.cnpj = 'CNPJ é obrigatório'
    } else if (!validateCNPJ(formData.cnpj)) {
      newErrors.cnpj = 'CNPJ deve ter 14 dígitos'
    }

    if (!formData.ownerName.trim()) {
      newErrors.ownerName = 'Nome do dono é obrigatório'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'E-mail inválido'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Telefone deve ter pelo menos 10 dígitos'
    }

    if (!formData.couponTitle.trim()) {
      newErrors.couponTitle = 'Título do cupom é obrigatório'
    }

    if (!formData.discount) {
      newErrors.discount = 'Desconto é obrigatório'
    } else if (formData.discount < 1 || formData.discount > 100) {
      newErrors.discount = 'Desconto deve ser entre 1% e 100%'
    }

    if (!formData.validUntil) {
      newErrors.validUntil = 'Data de validade é obrigatória'
    } else if (new Date(formData.validUntil) <= new Date()) {
      newErrors.validUntil = 'Data deve ser futura'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Dados do parceiro:', formData)
      alert('Cadastro realizado com sucesso!')
    }
  }

  return (
    <Container>
      <Card>
        <BackLink href="/">← Voltar ao início</BackLink>
        <Title>Cadastro de Parceiro</Title>
        
        <Form onSubmit={handleSubmit}>
          <Section>
            <SectionTitle>Dados da Empresa</SectionTitle>
            
            <InputGroup>
              <Input
                type="text"
                name="companyName"
                placeholder="Nome da empresa"
                value={formData.companyName}
                onChange={handleChange}
                error={errors.companyName}
                required
              />
              {errors.companyName && <ErrorMessage>{errors.companyName}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Input
                type="text"
                name="cnpj"
                placeholder="CNPJ"
                value={formData.cnpj}
                onChange={handleChange}
                error={errors.cnpj}
                maxLength="18"
                required
              />
              {errors.cnpj && <ErrorMessage>{errors.cnpj}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Input
                type="text"
                name="ownerName"
                placeholder="Nome do dono da empresa"
                value={formData.ownerName}
                onChange={handleChange}
                error={errors.ownerName}
                required
              />
              {errors.ownerName && <ErrorMessage>{errors.ownerName}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Input
                type="email"
                name="email"
                placeholder="E-mail corporativo"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Input
                type="tel"
                name="phone"
                placeholder="Telefone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                maxLength="15"
                required
              />
              {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Input
                type="url"
                name="website"
                placeholder="Website (opcional)"
                value={formData.website}
                onChange={handleChange}
              />
            </InputGroup>
          </Section>



          <Section>
            <SectionTitle>Primeiro Cupom</SectionTitle>
            
            <InputGroup>
              <Input
                type="text"
                name="couponTitle"
                placeholder="Título do cupom"
                value={formData.couponTitle}
                onChange={handleChange}
                error={errors.couponTitle}
                required
              />
              {errors.couponTitle && <ErrorMessage>{errors.couponTitle}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Input
                type="number"
                name="discount"
                placeholder="Desconto (%)"
                min="1"
                max="100"
                value={formData.discount}
                onChange={handleChange}
                error={errors.discount}
                required
              />
              {errors.discount && <ErrorMessage>{errors.discount}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <Input
                type="date"
                name="validUntil"
                value={formData.validUntil}
                onChange={handleChange}
                error={errors.validUntil}
                required
              />
              {errors.validUntil && <ErrorMessage>{errors.validUntil}</ErrorMessage>}
            </InputGroup>

            <TextArea
              name="description"
              placeholder="Descrição do cupom (opcional)"
              rows="3"
              value={formData.description}
              onChange={handleChange}
            />
          </Section>

          <SubmitButton type="submit">
            Cadastrar como Parceiro
          </SubmitButton>
        </Form>
      </Card>
    </Container>
  )
}

export default PartnerRegister