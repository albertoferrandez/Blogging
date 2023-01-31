
const Post = ({ title, date, content }) => {

    let fecha = new Date(date).toDateString()


    return (
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">{title}</h1>
                    <p><time>{fecha}</time></p>
                    <p>{content}</p>
                </article>
            </div>
        </main>
    )
}

export default Post