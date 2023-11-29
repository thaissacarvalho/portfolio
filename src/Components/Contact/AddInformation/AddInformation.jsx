import { FiMapPin, FiMail } from 'react-icons/fi'
import {BsGithub, BsLinkedin} from 'react-icons/bs';

export default function AddInformation() {
    return (
        <div className="add-information__container">
            <div className="add-information__contact">
                <div className="add-information__mail">
                    <FiMail className="add-information__icon" />
                    <p className="add-information__text">thaissa-carvalho@outlook.com</p>
                </div>

                <div className="add-information__map">
                    <FiMapPin className="add-information__icon" />
                    <p className="add-information__text">Rio de Janeiro, Brasil</p>
                </div>
            </div>

            <div className="add-information__social" >
                <a href="https://github.com/thaissacarvalho" target='_blank' rel='noreferrer' className="add-information__social-icon">
                   <BsGithub/>
                </a>
                <a className="add-information__social-icon" href="https://www.linkedin.com/in/thaissa-carvalho-dev/" target='_blank' rel='noreferrer'>
                    <BsLinkedin/>
                </a>
            </div>
        </div>
    )
}
