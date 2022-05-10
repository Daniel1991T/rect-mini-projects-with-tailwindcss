import { useState } from "react"
import data from './data'

const LoremIpsum = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
        let amount = parseInt(count)
        setText([])
        let newText = data
        if (amount <= 0) {
            newText = data.slice(0, 1)
        } else if (amount > 9) {
            const rest = amount % 9
            console.log(rest, 8, Math.floor(amount / 9));
            for (let i = 1; i < Math.floor(amount / 9); ++i) {
                console.log("in partea intreaga");
                newText = [...text, ...data]
            }
            newText = [...newText, ...data.slice(0, rest)]
            console.log("text -> ", text.length);
        } else {
            newText = data.slice(0, amount)
        }
        setText(newText)
    }

    return (
        <main className="bg-gray-200 min-h-screen flex justify-center text-gray-700 leading-6 text-sm">
            <section className="py-20 px-0 w-[90vw] my-0 mx-auto max-w-2xl mt-20 text-center lg:w-[95vw]">
                <h3 className="uppercase font-bold">tired of boring lorem ipsum?</h3>
                <form onSubmit={handleSubmit}
                    className="capitalize tracking-[0.1rem] mt-8 mb-16 flex justify-center items-center">
                    <label htmlFor="amount" className="text-xl text-gray-700">paragraphs: </label>
                    <input type="number" name="amount" id="amount" value={count}
                        onChange={(e) => setCount(e.target.value)}
                        className="py-1 px-2 w-16 rounded border-none my-0 mx-2 text-xl" />
                    <button type="submit"
                        className="bg-blue-500 uppercase text-gray-700 py-1 px-3 tracking-[1px] inline-block
                    transition-all duration-300 ease-linear border-2 border-solid border-blue-500
                    cursor-pointer shadow shadow-blue-900 rounded hover:text-blue-300 hover:bg-gray-800 hover:border-gray-800">generate</button>
                </form>
                <article className="">
                    {text.map((item, index) => {
                        return <p key={index}>{index} {item}</p>
                    })}
                </article>
            </section>
        </main>
    )
}

export default LoremIpsum