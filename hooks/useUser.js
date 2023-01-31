import { supabase } from "@/utils/supabaseClients"
import { useEffect, useState } from "react"

export const useUser = () => {

    const [user, setUser] = useState()
    const [userId, setUserId] = useState()


    useEffect(() => {
        const getUser = async () => {
            let { data, error } = await supabase
                .from('usernames')
                .select()

            const { data: { session }} = await supabase.auth.getSession()
            
            data.forEach(u => {
                if(session === null) return 
                if (u.userid === session.user.id) {
                    setUser(u.username)
                    setUserId(session.user.id)
                }
            });
        }

        getUser()
    }, [])

    return {
        user,
        userId
    }
}

