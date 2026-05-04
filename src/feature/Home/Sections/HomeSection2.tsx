import "./styles/HomeSection2.css"
import logo from "./assets/home.section2.logo.png"

export default function HomeSection2() {
    return (
        <section className="HomeSection2">
            <section className="HomeSection2Content">
                <h4 className="h4Esquerdo">O Brasil já constrói open source</h4>
                <img src={logo} alt="NOSS Logo" />
                <h4 className="h4Direito">Agora é hora de criar e fortalecer os nós!!!</h4>
            </section>
        </section>
    )
}