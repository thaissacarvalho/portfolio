import { Button } from "react-bootstrap";
import Line from "../Line/Line";
// import { ScrollAnimation } from 'react-animate-on-scroll';

export default function AboutMe() {
    return (
        <div className="about-me__container">
                <div className="about-me__hero">
                    <h4 className="hero__im">Eu sou</h4>
                    <div className="hero__nameStack">
                        <h1 className="nameStack__name">Thaissa Carvalho
                            <span className="nameStack__stack">, uma Desenvolvedora Back End.</span>
                        </h1>
                    </div>
                </div>
            <div className="about-me__description">
                <Line />
                <p className="description__text">Formada em Gestão da tecnologia da Informação, atuo utilizando React e Node.js visando o
                    projeto da primeira fase até a sua fase final com boas métricas de planejamento
                    estratégico.
                </p>
            </div>
            <Button href="https://1drv.ms/w/s!AvyeC1pPN5L-jTTK5wHwFPRC8GjO?e=lG2XVg" className="about-me__resume" target="_blank">CURRICULO</Button>
        </div >
    )
}
