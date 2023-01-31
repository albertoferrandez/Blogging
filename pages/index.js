import Main from "@/components/Main"
import { supabase } from "@/utils/supabaseClients";
import { Suspense, useEffect } from "react";

export async function getStaticProps() {

  const { data, error } = await 
  supabase
    .from('blog')
    .select('*')
    
  if (error) {
    throw new Error(error);
  }

  return {
    props: {
      data,
    },
  };
}

const Home = ({data}) => {
  
  return (
    <>
      <Main posts={data} />
    </>
  )
}

export default Home
