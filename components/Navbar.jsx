
import Link from 'next/link'

const Navbar = () => {

    return (
        <nav id="header" className="flex justify-center w-full lg:w-[80vw]  
        my-0 mx-auto bg-white dark:bg-gray-800 h-[10vh]">
            <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
                <div className="flex items-center w-full" id="menu">
                    <nav>
                        <h1>BLOGGING</h1>
                    </nav>
                </div>

                <div className="flex">
                    <button className="bg-transparent text-gray-800 px-6 py-2 rounded border 
                            border-gray-300 mr-4 hover:bg-gray-100">
                        <Link href='/login'>Sign in</Link>
                    </button>
                    <button className="bg-[#334155] text-gray-200 px-6 py-2 rounded">
                        <Link href='/registro'>Sign Up</Link>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
