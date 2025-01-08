import { FaCog } from "react-icons/fa";

export default function Home() {
  return (
    <div className="maintenance-container">
      <div className="message">
        <h1>O SITE ESTÁ EM MANUTENÇÃO.</h1>
        <p>Estamos trabalhando para melhorar a sua experiência. Volte logo!</p>
      </div>
      <div className="gear">
        <FaCog size={50} className="cog-icon" />
      </div>
      <div className="button">
        <a href="https://bio.bythaissa.com">ACESSE MEU LINK BIO</a>
      </div>
    </div>
  )
}
