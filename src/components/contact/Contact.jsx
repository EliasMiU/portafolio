import React from "react";
import instagram from "../../assets/img/instagram.png";
import linkedin from "../../assets/img/linkedin.png";

export default class Contact extends React.Component {
    render(){
        return(
            <>
                <ul className="contact-list">
                    <li>
                        <a href="https://www.instagram.com/novatosdev/" target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram" /></a></li>
                    <li>
                        <a href="https://www.linkedin.com/in/elias-urbano-0a0474109/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Linkedin" /></a>
                    </li>
                </ul>
            </>
        )
    }
}