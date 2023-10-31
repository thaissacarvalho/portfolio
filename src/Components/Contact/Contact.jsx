import AddInformation from './AddInformation/AddInformation';
import Form from './Form/Form';
import Title from './TitleContact/TitleContact';

export default function Contact() {
  return (
    <section id="contact" className="section__contact">
      <div className="contact__container">
        <Title />
        <AddInformation />
        <Form />
      </div>
    </section >
  )
}
