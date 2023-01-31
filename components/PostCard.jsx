import Link from "next/link"
import { HiCalendar, HiOutlineArrowRight } from "react-icons/hi2"

const PostCard = ({ id, title, content, date }) => {

    let contentPreview = content.substring(0, 100)
    let fecha = new Date(date).toDateString()
    
    return (

        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md mt-4" >
            <div className="flex justify-between items-center mb-5 text-gray-500">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900"><Link href={`/posts/${id}`}>{title}</Link></h2>
                <span className="text-sm inline-flex">
                    <HiCalendar />
                    {fecha}
                </span>
            </div>
            <p className="mb-5 font-light text-gray-500">{contentPreview}</p>
            <div className="flex justify-between items-center">
                <Link href={`/posts/${id}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                    <HiOutlineArrowRight /> Leer Mas
                </Link>
            </div>
        </article >

    )
}

export default PostCard

