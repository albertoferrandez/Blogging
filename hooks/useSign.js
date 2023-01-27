
import { supabase } from '@/utils/supabaseClients'
import { useEffect, useState } from 'react'

export const useSign = () => {
    const [event, setEvent] = useState('SIGNET_OUT')

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            setEvent(event)
            console.log(event)
        })
    }, [event])

    return {
        event
    }
}
