import { useUser } from "@/hooks/useUser"

const NavbarUser = () => {

    const { user } = useUser()

    return (
        <nav id="header" className="flex justify-center w-full lg:w-[80vw]  
        my-0 mx-auto bg-white dark:bg-gray-800 h-[10vh]">
            <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
                <div className="flex items-center w-full" id="menu">
                    <nav>
                        <h1>BLOGGING</h1>
                    </nav>
                </div>


                <div className="flex items-center space-x-4">
                    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt=""/>
                        <div className="font-medium dark:text-white">
                            <div>{user}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                        </div>
                </div>

            </div>
        </nav>
    )
}

export default NavbarUser