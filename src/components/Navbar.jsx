import { NAV_LINKS } from "../../constants";

export default function Navbar() {
    return (
        <nav>
            <div>
                <a href="#home">
                    <h1>Apples</h1>
                </a>

                <ul>
                    {NAV_LINKS.map(link => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}