import { supabase } from "@/utils/supabaseClients"
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Sidebar from "@/components/Sidebar"

const Blog = () => {
  const router = useRouter()
    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
          console.log(event, session)
            if(!session) {
              router.push('/')
            }else {
              router.push('/blog')
          }
        })
    }, [router])

  return (
    <div>
      <Sidebar/>

      <div className="w-10/12 lg:w-10/12">
        <div className="m-4 p-4 border-dashed border-gray-200 dark:border-gray-700 border-2 rounded-lg">
          <p className="dark:text-white text-gray-800">Main content area</p>
        </div>
      </div>
    </div>
  )
}

export default Blog
