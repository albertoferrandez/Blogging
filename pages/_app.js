import Layout from '@/components/Layout'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/utils/supabaseClients';
import { useSign } from '@/hooks/useSign';

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const { event } = useSign()

  useEffect(() => {
    if (event === 'SIGNED_IN') {
      router.push('/')
    }
  }, [event])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp

