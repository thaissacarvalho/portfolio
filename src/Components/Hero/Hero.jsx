import AboutMe from "./AboutMe/AboutMe";
import Profile from "./Profile/Profile";

export default function hero() {
    return (
        <section id="home" className="section__hero">
            <div className="hero__container">
                <Profile />
                <div className="container__about-me">
                    <AboutMe />
                </div>
            </div>
        </section>
    )
}
