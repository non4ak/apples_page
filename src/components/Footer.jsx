import { SOCIALS } from "../../constants";

export default function Footer() {
    return (
        <footer>
            <div className="space-y-6">
                <h3>Fruitful code. Juicy design.</h3>

                <div>
                    <p>Powered by apples, built with love, and probably eaten during coding.</p>
                    <p>Warning: No apples were harmed in the making of this website. Except maybe one... it knows what it did.</p>
                </div>

                <div className="space-y-4">
                    <h3>Socials</h3>
                    <div className="flex justify-center gap-8">
                        {SOCIALS.map((item, index) => (
                            <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.name}>
                                <img src={item.icon} alt="" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}