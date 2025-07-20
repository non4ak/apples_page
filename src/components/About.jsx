import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from "gsap/all";


export default function About() {
    useGSAP(() => {
        const paragraphSplit = new SplitText('.about-text p', { type: 'lines'});

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.about',
                start: 'top center'
            }
        })

        timeline.from(paragraphSplit.lines, {
            opacity: 0, yPercent: 100, duration: 1, ease: 'expo.out', stagger: 0.1
        })
        .from('#top-img, #bottom-img', {
            opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.1,
        }, '-=0.5')
        

    }, []);
    

    return (
        <section className="about py-24 ">
            <div>
                <div className="about-text">
                    <h2 className="text-6xl font-clash tracking-wider font-semibold text-center">The Magic of Apples</h2>
                    <p className="text-lg md:text-xl font-mono text-center w-[80%]">
                        More than just food, apples are symbols of wisdom, health, and simplicity. Their impact goes far beyond the orchard.
                        From the classroom to the kitchen, they play a meaningful role in daily life. Apples bring people together — in tradition, taste, and time.
                    </p>
                </div>
            </div>
            <div className="content w-[80%] mx-auto">
                <div className="about-grid">
                    <div id="top-img" className="md:col-span-2 rounded-2xl overflow-hidden">
                        <img
                            src="/imgs/green-basket.jpg"
                            alt="basket of green apples"
                        />
                    </div>
                    <div id="top-img" className="lg:row-span-2 rounded-2xl overflow-hidden">
                        <img
                            src="/imgs/apples-on-tree.jpg"
                            alt="apples on tree"
                        />
                    </div>
                    <div id="bottom-img" className="rounded-2xl overflow-hidden">
                        <img
                            src="/imgs/apple-picking.jpg"
                            alt="apple picking"
                        />
                    </div>
                    <div id="bottom-img" className="rounded-2xl hidden lg:block overflow-hidden">
                        <img
                            src="/imgs/apples-basket.jpg"
                            alt="basket of red apples"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}