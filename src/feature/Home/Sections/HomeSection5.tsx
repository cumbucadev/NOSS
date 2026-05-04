import "./styles/HomeSection5.css"
import githubLogo from "./assets/home.section5.githubLogo.png"

const linkGithub = "https://github.com/cumbucadev/NOSS/tree/main";

export default function HomeSection5() {
    return (
        <section className="HomeSection5">
            <div className="HomeSection5Content">
                <a href={linkGithub} className="HomeSection5Content_Github" target="_blank">
                    <img src={githubLogo} alt="GitHub Logo" />
                    <h4>/@CumbucaDev/NOSS</h4>
                </a>
                <a href={linkGithub} className="HomeSection5Content_Button" target="_blank">
                    <button>
                        Contribua!!!
                    </button>
                </a>
            </div>
        </section>
    )
}