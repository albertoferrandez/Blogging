import PostCard from "@/components/PostCard"
import { useSign } from "@/hooks/useSign"
import { useUser } from "@/hooks/useUser"
import { supabase } from "@/utils/supabaseClients"
import { useRouter } from "next/router"
import { useEffect } from "react"


const MisPosts = ({ posts = {} }) => {

    const {user}  = useUser()
    const { event } = useSign()
    const router = useRouter()

    useEffect(() => {
        if (event === 'SIGNED_IN') {
            router.push('/')
        }
    }, [router])

    return (
        <>
            <div>
                <h1 className="text-gray-800 text-2xl mb-6">Posts de {user}</h1>
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
        </>
    )
}

export default MisPosts

export async function getServerSideProps({ params }) {

    const { data: posts, error } = await supabase
        .from('blog')
        .select('*')
        .eq('user_id', params.id)

    if (error) {
        console.log(error.message);
    }

    return {
        props: {
            posts,
        },
    };
}