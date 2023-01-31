
import { useSign } from '@/hooks/useSign'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './navbar'
import NavbarUser from './NavbarUser'



export default function Layout({ children }) {

    const router = useRouter()
    const { event } = useSign()

    return (
        <>
            {event === 'SIGNED_IN' ? <NavbarUser /> : <Navbar />}
            <main className="w-full max-w-6xl h-auto mx-auto px-4 m-4">{children}</main>
            <Footer />
        </>
    )
}
