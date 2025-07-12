function Card({image, description, title}) {
    // const item = elems.item
    // const { item } = elem
    // const {image, description, title} = item;
    return (
        <>
            <article className="flex flex-col bg-gray-900 dark:bg-gray-50">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                    <img alt="" className="object-cover w-full h-52 bg-gray-500 dark:bg-gray-500" src={image} />
                </a>
                <div className="flex flex-col flex-1 p-6">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                    <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400 dark:text-violet-600">Convenire</a>
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{description}</h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400 dark:text-gray-600">
                        <span>June 1, 2020</span>
                        <span>2.1K views</span>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Card
