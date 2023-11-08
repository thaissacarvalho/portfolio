import { Form, Button, FloatingLabel } from 'react-bootstrap';

export default function FormContact() {
  return (
    <form action="" className="form">
      <FloatingLabel className="form__floating-input"
        controlId="floatingInput"
        label="Nome"
      >
        <Form.Control type="text" placeholder="Nome" disabled/>
      </FloatingLabel>

      <FloatingLabel
        className="form__floating-input"
        controlId="floatingInput"
        label="Email"
      >
        <Form.Control type="email" placeholder="name@example.com" disabled/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Formulário indisponivel no momento." className="form__floating-textarea">
        <Form.Control
          as="textarea"
          placeholder="Escreva a sua mensagem aqui"
          disabled
        />
      </FloatingLabel>
      <Button as="input" type="submit" value="Enviar Mensagem" className="form__button" disabled/>
    </form>
  )
}
