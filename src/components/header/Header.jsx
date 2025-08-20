import { Link } from "react-router-dom"

function Header() {
    const data = [
        "Europe",
        "Africa",
        "Asia",
        "Oceania",
        "Americas",
        "Antarctic"
    ];

    const mid = Math.ceil(data.length / 2);
    const first_half = data.slice(0, mid);
    const second_half = data.slice(mid);

    return (
        <header className="p-4 dark:bg-gray-800 bg-gray-100 dark:text-gray-100 text-gray-800">
            <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
                <ul className="items-stretch hidden space-x-3 md:flex">
                    {
                        first_half.map((item, i) => <li key={i} className="flex">
                            <Link to={`/region/${item.toLowerCase()}`} className="flex items-center px-4 -mb-1 border-b-2 dark:border-">{item}</Link>
                        </li>)
                    }
                </ul>
                <Link to={'/'} aria-label="Back to homepage" className="flex items-center p-2">
                    <img className="w-15" src="/assets/img/react.svg" alt="world_logo" />
                </Link>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    {
                        second_half.map((item, i) => <li key={i} className="flex">
                            <Link to={`/region/${item.toLowerCase()}`} className="flex items-center px-4 -mb-1 border-b-2 dark:border-">{item}</Link>
                        </li>)
                    }
                </ul>
                <button title="Button" type="button" className="p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Header
