
import Link from 'next/link'

const Navbar = () => {

    return (
        <nav id="header" className="flex justify-center w-full  
        my-0 mx-auto bg-white h-[10vh] border-b-[1px] border-slate-400">
            <div className="w-full lg:w-[80vw] flex items-center justify-between mt-0 px-6 py-2">
                <div>
                    <Link href={'/'}>BLOGGING</Link>
                </div>

                <div className="inline-flex" role="group">
                    <Link className="inline-flex items-center bg-transparent text-gray-800 px-6 py-2 rounded border 
                        border-gray-300 mr-4 hover:bg-gray-100" href='/login'>Iniciar Sesión</Link>
                    <Link className="inline-flex items-center bg-transparent text-gray-800 px-6 py-2 rounded border 
                        border-gray-300 mr-4 hover:bg-gray-100" href='/registro'>Registrarse</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
