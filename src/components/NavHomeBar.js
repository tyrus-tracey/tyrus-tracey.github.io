import NavButton from "./NavButton";
import GitHubLogo from "../assets/icons/GitHub_Invertocat_Dark.svg"
import LinkedInLogo from "../assets/icons/linkedin.png"
import MailLogo from "../assets/icons/email.png"


export default function NavHomeBar({show}) {

    return (
        <div className="nav-homebar">
            <div className="nav-homebar-nameplate">
                <h3>Tyrus Tracey</h3>
            </div>
            <NavButton cssid="button-github" linkurl="https://github.com/tyrus-tracey">
                <img src={GitHubLogo} alt=""></img>
            </NavButton>
            <NavButton cssid="button-linkedin" linkurl="https://www.linkedin.com/in/ttracey53b/">
                <img src={LinkedInLogo} alt="" style={{
                    width:'20px',
                    height:'20px',
                    maxWidth:'inherit', 
                    maxHeight:'inherit',  
                    objectFit: 'contain',
                    filter: 'invert(100%)'
                }}></img>
            </NavButton>
            <NavButton cssid="button-mail" linkurl="mailto:t.y.r.tracey@gmail.com">
                <img src={MailLogo} alt="" style={{
                    width:'20px',
                    height:'20px',
                    maxWidth:'inherit', 
                    maxHeight:'inherit',  
                    objectFit: 'contain',
                    filter: 'invert(100%)'
                }}></img>
            </NavButton>
        </div>
    );
}