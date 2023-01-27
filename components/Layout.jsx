
import { useSign } from '@/hooks/useSign'
import { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './navbar'
import NavbarUser from './NavbarUser'



export default function Layout({ children }) {

    const { event } = useSign()

    return (
        <>
           { event === 'SIGNED_IN' ?  <NavbarUser/> : <Navbar />   }
            <main className="mt-4 px-4">{children}</main>
            <Footer />
        </>
    )
}
