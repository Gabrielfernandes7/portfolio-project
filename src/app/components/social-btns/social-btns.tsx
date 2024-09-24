import { GitHubIcon } from "../icons/github-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import "./social-btns.scss"

export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.linkedin.com/in/gabriel-assun%C3%A7%C3%A3o-fernandes-mecatronica-aluno-ifce/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/Gabrielfernandes7">
                <GitHubIcon/>
            </a>
        </div>
    )
}