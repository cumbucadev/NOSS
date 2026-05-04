import "./styles/HomeSection4.css"
import youtubeLogo from "./assets/home.section4.youtubelogo.png"

export default function HomeSection4() {
    return (
        <section className="HomeSection4">
            <div className="HomeSection4Content">
                <a href="https://www.youtube.com/@CumbucaDev" className="HomeSection4Content_Youtube" target="_blank">
                    <img src={youtubeLogo} alt="YouTube Logo" />
                    <h4>/@CumbucaDev</h4>
                </a>
                <a href="https://www.youtube.com/@CumbucaDev" className="HomeSection4Content_Button" target="_blank">
                    <button>
                        Inscreva-se
                    </button>
                </a>
            </div>
        </section>
    )
}