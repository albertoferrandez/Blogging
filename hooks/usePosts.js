import { supabase } from "@/utils/supabaseClients"
import { useEffect, useState } from "react"

export const usePosts = () => {

    const [posts, setPosts] = useState({})

    useEffect(() => {
        const getPost = async () => {
            let { data, error } = await supabase
                .from('blog')
                .select()

            const { data: { session }} = await supabase.auth.getSession()
            
            data.forEach(u => {
                if(session === null) return
                if (u.user_id === session.user.id) {
                    setPosts(u)
                }
            });
        }

        getPost()
    }, [])

    return {
        posts
    }
}

