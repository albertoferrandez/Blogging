
import { supabase } from '@/utils/supabaseClients'
import Link from 'next/link'
import { useEffect, useState } from 'react'


const Navbar = () => {

    const [session, setSession] = useState(null)

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            setSession(session)
        })
    }, [session])

    return (
        <nav id="header" className="w-full z-30 top-10 py-1 bg-white dark:bg-gray-800 shadow">
            <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
                <div className="flex items-center w-full" id="menu">
                    <nav>
                        <h1>BLOGGING</h1>
                    </nav>
                </div>

                {
                    session && session ?

                        <h1>User name</h1>

                        :

                        <>
                            <button className="bg-transparent text-gray-800 px-6 py-2 rounded border 
                            border-gray-300 mr-4 hover:bg-gray-100">
                                <Link href='/login'>Sign in</Link>
                            </button>
                            <button className="bg-[#334155] text-gray-200 px-6 py-2 rounded">
                                <Link href='/registro'>Sign Up</Link>
                            </button>
                        </>
                }

            </div>
        </nav>
    )
}

export default Navbar
