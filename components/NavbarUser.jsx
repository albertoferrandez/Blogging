import { useUser } from "@/hooks/useUser"
import CreatePosts from "./CreatePosts"
import { useState } from "react";
import { supabase } from "@/utils/supabaseClients";
import Link from "next/link";
import { HiArrowDown, HiArrowRightOnRectangle, HiDocumentPlus, HiUser } from "react-icons/hi2"
import { useRouter } from "next/router";

const NavbarUser = () => {

    const { user, userId } = useUser()
    const router  = useRouter()
    const [openModal, setModal] = useState(false)
    const [show, setShow] = useState('opacity-0')


    const closeModal = () => {
        setModal(false)
    }

    const handleDropdown = () => {
        setShow('opacity-1')
        if (show === 'opacity-1') {
            setShow('opacity-0')
        }
    }

    return (
        <>
            <nav id="header" className="flex justify-center w-full lg:w-[80vw]  
        my-0 mx-auto bg-white h-[10vh] border-b-[1px]  border-slate-400">
                <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
                    <div className="flex items-center w-full" id="menu">
                        <nav>
                            <Link href={'/'}>BLOGGING</Link>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="font-medium inline-flex">
                            <div className="mr-2">{user}</div>
                            <button onClick={handleDropdown}><HiArrowDown /></button>
                        </div>

                        <div id="dropdown" className={`z-99 ${show} fixed top-24 
                        right-16 rounded-lg shadow w-44 bg-gray-700`}>
                            <ul className="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li className="hover:bg-slate-500 rounded-t-lg">
                                    <button onClick={() => router.push('/userposts/' + userId)} type="button" className="inline-flex items-center px-6 py-4 text-sm font-medium">
                                        <HiUser />
                                        <span className="ml-2 inline-flex">Mis Posts</span>
                                    </button>
                                </li>
                                <li className="hover:bg-slate-500">
                                    <button onClick={() => setModal(true)} type="button" className="inline-flex items-center px-6 py-4 text-sm font-medium">
                                        <HiDocumentPlus />
                                        <span className="ml-2 inline-flex">Crear Post</span>
                                    </button>
                                </li>
                                <li className="hover:bg-slate-500 rounded-b-lg">
                                    <button onClick={() => supabase.auth.signOut()}
                                        type="button"
                                        className="inline-flex items-center px-6 py-4 text-sm font-medium"
                                    >
                                        <HiArrowRightOnRectangle />
                                        <span className="ml-2 inline-flex">Cerrar Sesión</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <CreatePosts onClose={closeModal} visible={openModal} />

        </>
    )
}

export default NavbarUser