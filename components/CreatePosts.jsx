import { supabase } from "@/utils/supabaseClients";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";

const CreatePosts = ({ visible, onClose }) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = async (e) => {
        const { data: { session }} = await supabase.auth.getSession()

        e.preventDefault();
        const { data, error } = await supabase
            .from('blog')
            .insert([
                {
                    title,
                    content,
                    user_id: session.user.id
                },
            ])
        handleClose(e)
    }

    const handleClose = (e) => {
        if (e.target.id === 'modal') onClose()
    }

    if (!visible) return null

    return (
        <article id='modal' onClick={handleClose} className="fixed flex items-center justify-center z-50 backdrop-blur-sm w-screen p-4 overflow-x-hidden overflow-y-auto inset-0 h-screen">
            <div className="relative w-full h-full max-w-md md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={onClose} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" >
                        <HiXMark />
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Crear Post</h3>
                        <form className="space-y-6" onSubmit={handleSubmit} >
                            <div>
                                <label htmlFor="titulo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
                                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="titutlo" id="titulo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Escriba aqui su titulo" required />
                            </div>
                            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                    <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Escribe tu post..." required></textarea>
                                </div>
                                <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                                    <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                        Subir Post
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CreatePosts