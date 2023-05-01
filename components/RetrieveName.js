import React, { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react"

export default function RetrieveName() {
  const [name, setName] = useState('');

  const user = useUser()
  const supabase = useSupabaseClient()
  var storedName = "Motoqueiro"
//   const storedName = sessionStorage.getItem('person_name');

  useEffect(() => {
    async function fetchName() {
        if (typeof window !== 'undefined') {
            storedName = sessionStorage.getItem('person_name');
            console.log("Got name from session")
            if (storedName) {
              setName(storedName);
            return storedName;
            }
        } 

      try {
        let { data, error, status } = await supabase
          .from('profiles')
          .select(`person_name`)
          .eq('id', user.id)
          .single()

        if (error && status !== 406) {
          throw error
        }
        sessionStorage.setItem('person_name', data.person_name);
        console.log("Saved name for future")
        setName(data.person_name);
        console.log("Set name for future")
      } catch (error) {
        console.log('Error loading user data!')
        console.log(error)
      }
    }
    fetchName();
  }, [storedName, supabase, user]);

  return name;
}
