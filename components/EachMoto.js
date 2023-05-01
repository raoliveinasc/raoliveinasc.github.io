import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function EachMoto(props) {
  const user = useUser()
  const supabase = useSupabaseClient()
  const [immediateMoto, setImmediateMoto] = useState("")
  const [immediateYear, setImmediateYear] = useState("")
  const [immediateSpec, setImmediateSpec] = useState("")

  useEffect(() => {
    if (props.nomeMoto) {
      setImmediateMoto(props.nomeMoto)
      setImmediateYear(props.anoMoto)
      setImmediateSpec(props.especMoto)
    } else {
      getMotos()
    }
  }, [])

  async function getMotos() {
    try {
      let { data, error, status } = await supabase
        .from('profiles')
        .select(`moto_model, moto_year, moto_spec`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setImmediateMoto(data.moto_model)
        setImmediateYear(data.moto_year)
        setImmediateSpec(data.moto_spec)
      }
    } catch (error) {
      console.log('Error loading user data!')
      console.log(error)
    }
  }
  return (
    <>
      <div className="moto-modelo">
        <i className="fa-solid fa-motorcycle fa-2x fa-motorcycle-one"></i>
        <div className="moto-specs">
          <div className="nome-moto">{immediateMoto ? immediateMoto.charAt(0).toUpperCase() + immediateMoto.slice(1) : "Selecione a Marca"}</div>
          <div className="moto-modelo-inside">
            <div className="espec-moto">{immediateSpec ? immediateSpec : "Selecione o Modelo"}</div>
            <div className="espec-moto">•</div>
            <div className="ano-moto">{immediateYear ? immediateYear : "Selecione o Ano"}</div>
          </div>
        </div>
        {!props.edit ?     <div className="remove-moto">
          <button className="remove-moto-button" type="button"><i className="fa-solid fa-x fa-lg"></i></button>
        </div> : 
        <div className="remove-moto">
          <Link className="remove-moto-button" href="/profile"><i class="fa-solid fa-pen-to-square fa-2x"></i></Link>
        </div>}
      </div>
      </>
  );
}
