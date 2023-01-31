import PostCard from "./PostCard"

const Main = ({ posts }) => {

    return (
        <div className="grid md:grid-cols-12 gap-5 p-4 m-2 content-center">
            <div className="md:col-span-9 p-4">
                <div>
                    <h1 className="text-gray-800 text-2xl mb-6">Posts de de la comunidad</h1>
                </div>
                {
                    posts && posts.map(post => (
                        <PostCard
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            content={post.content}
                            date={post.created_at}
                        />
                    ))
                }
            </div>
            <aside className="md:col-span-3 md:pt-0 p-2 border-l-[1px]  border-slate-400"></aside>
        </div>
    )
}

export default Main

