import { supabase } from "@/utils/supabaseClients"
import { useEffect, useState } from "react"

export const useUser = () => {

    const [user, setUser] = useState()

    useEffect(() => {
        const getUser = async () => {
            let { data, error } = await supabase
                .from('usernames')
                .select()
            const {
                data: { session },
            } = await supabase.auth.getSession()
            console.log(session.user);


            data.forEach(u => {
                if (u.userid === session.user.id) {
                    console.log(u.username)
                    setUser(u.username)
                }
            });
        }

        getUser()
    }, [])

    return {
        user
    }
}

