import Link from "next/link"
import { HiCalendar, HiOutlineArrowRight, HiTrash } from "react-icons/hi2"

const PostCard = ({ id, title, content, date, handleDelete }) => {

    let contentPreview = content.substring(0, 100)
    let fecha = new Date(date).toDateString()

    return (

        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md mt-4 w-2/3 mx-auto" >
            <div className="flex justify-between items-center mb-5 text-gray-500">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900"><Link href={`/posts/${id}`}>{title}</Link></h2>
                <span className="text-sm inline-flex">
                    <HiCalendar className="mr-1" />
                    {fecha}
                </span>
            </div>
            <p className="mb-5 font-light text-gray-500">{contentPreview}</p>
            <div className="flex justify-between items-center">
                <Link href={`/posts/${id}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-slate-200 border border-gray-200 rounded-lg">
                    <HiOutlineArrowRight className="mr-1" /> Leer Mas
                </Link>
                {
                    handleDelete &&
                    <button className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(id)}
                    >
                        <HiTrash />
                    </button>
                }
            </div>
        </article >

    )
}

export default PostCard

