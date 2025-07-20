import { REVIEWS } from "../../constants";

export default function Form() {

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('submitted');
    }

    return (
        <section className="relative">
            <div id="comments">
                <h2 className="text-center">What's your opinion about apples</h2>

                <div className="flex-center justify-between">
                    <div className="">
                        <ul className="comment-list">
                            {REVIEWS.map((item, index) => (
                                <li className="comment" key={item.id}>
                                    <div className="heading">
                                        <p id="title">
                                            {item.name}
                                        </p>
                                        <p id="rating"><span>4</span>/5</p>
                                    </div>

                                    <p id="text">{item.comment}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-8 p-12 rounded-3xl">

                        <div className="flex flex-col gap-4">
                            <label htmlFor="name" className="text-2xl font-arial font-semibold">Your Name</label>
                            <input
                                name="name"
                                type="text"
                                className="bg-gray-900 font-mono tracking-wide w-128 text-xl outline-none py-3 px-4 rounded-2xl text-blue-200"
                                placeholder="Enter your name..."
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
                                maxLength={150}
                            >
                            </textarea>
                        </div>
                        <button type="sumbit" className="bg-indigo-950 text-2xl w-64 py-3 rounded-2xl font-bold uppercase cursor-pointer">Submit</button>
                    </form>
                </div>
            </div>

            <img id="left-apple" src="/imgs/apple.png" alt="side-apple" className="absolute max-h-[250px] top-0 left-0 -translate-x-1/2 rotate-25" />

        </section>
    )
}