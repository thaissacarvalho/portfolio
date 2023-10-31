import { Form, Button, FloatingLabel } from 'react-bootstrap';

export default function FormContact() {
  return (
    <form action="" className="form">
      <FloatingLabel className="form__floating-input"
        controlId="floatingInput"
        label="Nome"
      >
        <Form.Control type="text" placeholder="Nome"/>
      </FloatingLabel>

      <FloatingLabel
        className="form__floating-input"
        controlId="floatingInput"
        label="Email"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Escreva a sua mensagem aqui" className="form__floating-textarea">
        <Form.Control
          as="textarea"
          placeholder="Escreva a sua mensagem aqui"
        />
      </FloatingLabel>
      <Button as="input" type="submit" value="Enviar Mensagem" className="form__button"/>
    </form>
  )
}
