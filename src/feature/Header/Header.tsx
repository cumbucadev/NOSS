import "./styles/Header.css"
import logo from "./assets/header.logo.png"

export default function Header() {
    return (
        <header className="Header">
            <div className="Header_content">
                <img src={logo} alt="Logo" />
                <div className="Header_butons">
                    <HeaderButtons title="Inicio" href="" />
                    <HeaderButtons title="Sobre NOSS" href="" />
                </div>
            </div>
        </header>
    )
}

interface HeaderButtonsProps {
    title: string;
    href: string;
};

function HeaderButtons( { title, href }: HeaderButtonsProps ) {
    return (
        <a href={href}><h3>{title}</h3></a>
    )
}