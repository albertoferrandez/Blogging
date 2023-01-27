import Layout from '@/components/Layout'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/utils/supabaseClients';

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN') {
            router.push('/blog')
        } else {
            router.push('/')
        }
    })
    
}, [router])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp

