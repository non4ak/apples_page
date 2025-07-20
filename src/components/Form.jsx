import { REVIEWS } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

export default function Form() {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState('');


    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#comments',
                start: 'center bottom',
                end: 'bottom bottom',
                scrub: true,
            }
        })

        timeline.fromTo('#left-apple', {
            x: -350,
            duration: 1,
            ease: 'power1.inOut'
        }, {
            x: -200,
        })
            .fromTo('#right-apple', { x: 200, duration: 1, ease: 'power1.inOut' }, { x: 100 });

    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = new FormData(event.target);
        const fd = Object.fromEntries(form.entries());

        if (fd.name.trim().length < 3) {
            setError('Name must be at least 3 characters long.');
            return;
        }

        if (fd.comment.trim().length < 4) {
            setError('Comment must be at least 5 characters long.');
            return;
        }

        const newComment = {
            name: fd.name,
            comment: fd.comment,
        }

        setComments(prev => [...prev, newComment]);
        setError('');
        event.target.reset();
    }

    return (
        <section className="relative">
            <div id="comments">
                <h2 className="text-center">What's your opinion about apples?</h2>

                <div className="flex-center flex-col-reverse md:flex-row justify-between">
                    <div className="w-full md:w-1/2">
                        {comments.length > 0 ? (
                            <ul className="comment-list w-full max-w-3xl mx-auto">
                                {comments.slice(-3).reverse().map((item, index) => (
                                    <li className="comment" key={index}>
                                        <div className="heading">
                                            <p id="comment-title">{item.name}</p>
                                            <p id="rating"><span>4</span>/5</p>
                                        </div>
                                        <p id="text">{item.comment}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="relative flex-center">
                                <h3 className="abs-center text-5xl font-clash font-semibold top-[15%] md:top-[25%] tracking-wider text-center w-full">No comments yet.</h3>
                                <img src="/imgs/crying-apple.png" className="" alt="no comments ceyng apple" />
                            </div>
                        )}
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-8 p-12 rounded-3xl">
                        <div className="flex flex-col gap-4">
                            <label htmlFor="name" className="text-2xl font-arial font-semibold">Your Name</label>
                            <input
                                name="name"
                                type="text"
                                className="bg-gray-900 font-mono tracking-wide w-128 text-xl outline-none py-3 px-4 rounded-2xl text-blue-200"
                                placeholder="Enter your name..."
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <label htmlFor="comment" className="text-2xl font-arial ont-semibold">Leave a Comment</label>
                            <textarea
                                name="comment"
                                id="comment"
                                className="font-mono tracking-wide bg-gray-900 w-128 text-xl outline-none py-3 px-4 rounded-2xl text-blue-200"
                                rows={5}
                                placeholder="Your opinion goes here..."
                                maxLength={200}
                                required
                            >
                            </textarea>
                        </div>
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <button type="sumbit" className="bg-indigo-950 text-2xl w-64 py-3 rounded-2xl font-bold uppercase cursor-pointer">Submit</button>
                            <div className="min-h-[32px] text-red-500 text-lg font-semibold">
                                {error && <p>{error}</p>}
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <img id="right-apple" src="/imgs/red-apple.png" alt="side-apple" className="absolute max-h-[250px] bottom-0 right-0" />
            <img id="left-apple" src="/imgs/apple.png" alt="side-apple" className="absolute max-h-[250px] top-0 left-0 -translate-x-1/2 rotate-25" />

        </section>
    )
}