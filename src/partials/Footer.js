import React from "react";
import { FaInstagram, FaFacebookF, FaRegEnvelope, FaPhoneAlt} from  'react-icons/fa';
import '../styles/footer.css';

export const Footer = () => {
    return(
        <footer className="footer-container">
            <div className="footer-contact">
                <h4>Contacteer mij</h4>
                <br />
                <p>Problemen met je fiets of op zoek naar iets nieuws? <br/> Kom even langs ik help je graag verder:</p>
                <div className="footer-socials">
                    <a href="https://www.instagram.com/velow_maldegem/" target="_blank" rel="noreferrer"><FaInstagram class="footer-instagram"/></a>
                    <a href="https://www.facebook.com/velow_maldegem-103972768951724" target="_blank" rel="noreferrer"><FaFacebookF class="footer-facebook"/></a>
                    <a href="mailto: VandenBosscheWouter@hotmail.be" target="_blank" rel="noreferrer"><FaRegEnvelope class="footer-mail"/></a>
                    <a href="tel::0486/34.56.17"><FaPhoneAlt class="footer-call"/></a>
                </div>
            </div>
            <div className="footer-diensten">
                <h4 className="">Mijn diensten</h4>
                <br />
                <ul>
                    <li><p>*Herstel fietsen</p></li>
                    <li><p>*Onderhoud fietsen</p></li>
                    <li><p>*Onderdelen</p></li>
                    <li><p>*Cleaning en behandeling fietsen</p></li>
                    <li><p>*Verkoop fietsen</p></li>
                </ul>
            </div>
            <div className="footer-openingsuren">
                <h4>Openingsuren</h4>
                <br />
                <ul>
                    <li><p>Maandag: 09.00h-12.00h / 13.00h-18.00h</p></li>
                    <li><p>Dinsdag: Op afspraak</p></li>
                    <li><p>Woensdag: Op afspraak</p></li>
                    <li><p>Donderdag: Op afspraak</p></li>
                    <li><p>Vrijdag: Op afspraak</p></li>
                    <li><p>Zaterdag: 09.00h-12.00h / 13.30h-18.00h</p></li>
                    <li><p>Zon- en feestdagen: Gesloten</p></li>

                </ul>
                <div className="flex col-end">
                    <p className="text-gray-300 text-sm mt-10 mr-12">Copyright © Vélo-W  2022</p>
                </div>
            </div>

        </footer>
    )
}




