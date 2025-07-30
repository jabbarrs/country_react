import { useEffect, useState } from "react"
import Card from "./Card"
import RandomCard from "./RandomCard"

function Main() {

    const [data, setData] = useState([])
    const [count, setCount] = useState(12)
    const [randomIndex, setRandomIndex] = useState(null)

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,cca3,capital,region,borders,area,flags')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setRandomIndex(rand(0, data.length - 1));
            });

        rand(0, data.length - 1)
    }, [])

    if (data.length == 0) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-900">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>
            </div>
        )
    }

    return (
        <section className="py-6 sm:py-12 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                    <p className="font-serif text-sm text-gray-400 dark:text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                </div>
                <RandomCard {...data[randomIndex]} />
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {
                        data
                            .slice(0, count)
                            .map(item => <Card key={item.cca3} {...item} />)
                    }
                </div>
                <div className="text-center">
                    <button onClick={() => setCount(count + 12)} type="button" className="relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded dark:bg-gray-800 dark:text-gray-50 cursor-pointer">Load more...
                        <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-600">+12</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Main
