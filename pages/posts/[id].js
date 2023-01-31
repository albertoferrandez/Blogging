import Post from "@/components/Post";
import { supabase } from "@/utils/supabaseClients";


export default function PostPage({ post = {} }) {

  return (
    <>
      {
        post.map(post => (
          <Post
          key={post.id}
            title={post.title}
            date={post.created_at}
            content={post.content}
          />
        ))
      }
    </>

  );
}

export async function getServerSideProps({ params }) {

  console.log(params.id)

  const { data: post, error } = await supabase.from('blog')
    .select('*')
    .eq('id', params.id)

  if (error) {
    console.log(error.message);
  }

  return {
    props: {
      post,
    },
  };
}
