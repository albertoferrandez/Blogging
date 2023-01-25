import Link from "next/link";
import { useEffect, useState } from "react";
import {supabase} from "../utils/supabaseClients"

export default function RegistrarUser() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignUp = async(e) => { 
        e.preventDefault();
        try {
            const { data, session, error } = await supabase.auth.signUp({
                email,
                password
            })

            console.log(session)

            if(error) throw new Error
            alert('Check your email')
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <article className="container max-w-full mx-auto py-24 px-6">
            <div className="max-w-sm mx-auto px-6">
                <h1 className="text-center font-semibold text-black mb-4">Registrar cuenta</h1>
                <form onSubmit={handleSignUp}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="email" name="email"
                            id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} required
                        />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="password" name="floating_password"
                            id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <button className="mt-4 text-lg font-semibold 
                bg-gray-800 w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                        Registrarse</button>
                </form>
                <div className="mt-4">
                    Ya tiene una cuenta? 
                    <Link href='/login'>Iniciar Sesión</Link>
                </div>
            </div>
        </article>
    )
}