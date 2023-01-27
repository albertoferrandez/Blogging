import { useUser } from "@/hooks/useUser"
import { supabase } from "@/utils/supabaseClients"
import { Button, Timeline } from "flowbite-react"
import { TimelineBody } from "flowbite-react/lib/esm/components/Timeline/TimelineBody"
import { TimelineContent } from "flowbite-react/lib/esm/components/Timeline/TimelineContent"
import { TimelineItem } from "flowbite-react/lib/esm/components/Timeline/TimelineItem"
import { TimelinePoint } from "flowbite-react/lib/esm/components/Timeline/TimelinePoint"
import { TimelineTime } from "flowbite-react/lib/esm/components/Timeline/TimelineTime"
import { TimelineTitle } from "flowbite-react/lib/esm/components/Timeline/TimelineTitle"
import { useEffect, useState } from "react"
import { HiOutlineArrowLongRight, HiCalendar } from "react-icons/hi2";


const Main = () => {

    const { user } = useUser()
    const [posts, setPosts] = useState([])


    useEffect(() => {
        const getPosts = async () => {
            let { data: blog, error } = await supabase
                .from('blog')
                .select('*')
            setPosts(blog)
        }
        getPosts()
    }, [])


    return (
        <div className="w-[65%] sm:ml-[50px] lg:ml-[70px] mr-[50px] lg:mr-[300px] md:mr-[300px] p-4 border-dashed border-gray-200 dark:border-gray-700 border-2 rounded-lg">
            <div className="w-[65%] mx-auto">
                <div>
                    <h1 className="dark:text-white text-gray-800 text-2xl">Posts de {user}</h1>
                </div>
                {
                    posts.map(post => (
                        <Timeline key={post.id} className="mt-6">
                            <TimelineItem>
                                <TimelinePoint icon={HiCalendar} />
                                <TimelineContent>
                                    <TimelineTitle>
                                        {post.title}
                                    </TimelineTitle>
                                    <TimelineTime>
                                        {post.created_at}
                                    </TimelineTime>
                                    <TimelineBody>
                                        {post.content}
                                    </TimelineBody>
                                    <Button color="gray">
                                        Leer Mas . . .
                                        <HiOutlineArrowLongRight className="ml-2 h-3 w-3" />
                                    </Button>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    )) 
                }
            </div>
        </div>
    )
}

export default Main