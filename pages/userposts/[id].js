import { useSign } from "@/hooks/useSign"
import { supabase } from "@/utils/supabaseClients"
import { useEffect } from "react"

const MisPosts = ({ posts = {} }) => {

    const { event } = useSign()

    useEffect(() => {
      if (event === 'SIGNED_IN') {
        router.push('/')
      }
    }, [event])

    console.log(posts)
    return (
        <div>misposts</div>
    )
}

export default MisPosts

export async function getServerSideProps({ params }) {

    console.log(params.id)

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