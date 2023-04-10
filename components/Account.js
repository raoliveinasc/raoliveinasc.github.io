import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import EachMoto from './EachMoto'
import toast, { Toaster } from 'react-hot-toast'
import SelectMotos from './SelectMotos'

export default function Account({ session }) {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [userStatus, setUserStatus] = useState('')
  const [loading, setLoading] = useState(true)
  const [motoModel, setMotoModel] = useState(null)
  const [motoYear, setMotoYear] = useState(null)
  const [motoSpec, setMotoSpec] = useState(null)
  const [personName, setPersonName] = useState(null)
  const [personSurname, setPersonSurname] = useState(null)
  const [fetched, setFetchedStatus] = useState(false)
  const router = useRouter()
  // var userId
  // if (user != null) {
  //   userId = user.id
  //   console.log(user.id)
  // }
  

  useEffect(() => {
    if (!fetched) {
      getProfile()
    } else {
      setPersonName(sessionStorage.getItem("person_name"))
      setPersonSurname(sessionStorage.getItem("person_surname"))
      setMotoModel(sessionStorage.getItem("moto_model"))
      setMotoYear(sessionStorage.getItem("moto_year"))
      setMotoSpec(sessionStorage.getItem("moto_spec"))
    }
  }, [session])

  useEffect(() => {
    setUserStatus(user)
  }, [user])

    function recentUser() {
    let recentAccess = 0
    if (user) {
      recentAccess = user.id
    } else {
      recentAccess = userStatus
    }
    return recentAccess
  }

  async function getProfile() {
      setFetchedStatus(true)
      try {
        setLoading(true)
  
        let { data, error, status } = await supabase
          .from('profiles')
          .select(`moto_model, moto_year, moto_spec, person_name, person_surname`)
          .eq('id', recentUser())
          .single()
  
        if (error && status !== 406) {
          throw error
        }
  
        if (data) {
          sessionStorage.setItem("moto_model", JSON.stringify(data.moto_model))
          setMotoModel(data.moto_model)
          sessionStorage.setItem("moto_year", JSON.stringify(data.moto_year))
          setMotoYear(data.moto_year)
          sessionStorage.setItem("moto_spec", JSON.stringify(data.moto_spec))
          setMotoSpec(data.moto_spec)
          if (sessionStorage.getItem("person_name") != data.person_name) {
            sessionStorage.setItem("person_name", JSON.stringify(data.person_name))
          }
          setPersonName(data.person_name)
          sessionStorage.setItem("person_surname", JSON.stringify(data.person_surname))
          setPersonSurname(data.person_surname)
        }
      } catch (error) {
        console.log('Error loading user data!')
        console.log(error)
      } finally {
        setLoading(false)
      }
    }


  async function updateProfile({ motoModel, motoYear, motoSpec, personName, personSurname }) {
    try {
      setLoading(true)

      const updates = {
        id: recentUser(),
        moto_model: motoModel,
        moto_year: motoYear,
        moto_spec: motoSpec,
        person_name: personName,
        person_surname: personSurname,
        updated_at: new Date().toISOString()
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      toast.success('Perfil atualizado com sucesso!', {position: "top-right"})
    } catch (error) {
      toast.error('Erro ao atualizar perfil.', {position: "top-right"})
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget-display">
      <Toaster />
      <div className='profile-pic-display-account'>
        <svg className="login-svg" data-bbox="0 0 50 50" data-type="shape" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><g><path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path></g></svg>
      </div>
      <div className='title-account-mg'>
        <div className='actual-title-mg'>Configurações de Perfil</div>
        <button className="remove-moto-button enlarged" onClick={() =>    {
          supabase.auth.signOut()
          router.push('/')
          toast.success("Fora da conta com sucesso", {position: "top-right"})
          }}>
          Sair da Conta
        </button>
      </div>
      <div className='label-account'>
        <label htmlFor="person-name">Nome</label>
        <input
          id="person-name"
          type="text"
          value={personName || ''}
          onChange={(e) => setPersonName(e.target.value)}
        />
      </div>
      <div className='label-account'>
        <label htmlFor="person-surname">Sobrenome</label>
        <input
          id="person-surname"
          type="text"
          value={personSurname || ''}
          onChange={(e) => setPersonSurname(e.target.value)}
        />
      </div>
      <div className='label-account'>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session ? session.user.email : "Email padrão"} disabled />
      </div>
      {/* <div className='label-account'>
        <label htmlFor="motoModel">Moto Model</label>
        <input
          id="motoModel"
          type="text"
          value={motoModel || ''}
          onChange={(e) => setMotoModel(e.target.value)}
        />
      </div>
      <div className='label-account'>
        <label htmlFor="motoYear">Moto Year</label>
        <input
          id="motoYear"
          type="text"
          value={motoYear || ''}
          onChange={(e) => setMotoYear(e.target.value)}
        />
      </div>
      <div className='label-account'>
        <label htmlFor="motoSpec">Moto Spec</label>
        <input
          id="motoSpec"
          type="text"
          value={motoSpec || ''}
          onChange={(e) => setMotoSpec(e.target.value)}
        />
      </div> */}
      <div className='select-motos-account'>
      <SelectMotos firstMotoModel={motoModel} firstMotoSpec={motoSpec} firstMotoYear={motoYear} edit={false}/>
      </div>

      <div>
        <button
          className="agendar-ao agendamento-sector config"
          onClick={() => updateProfile({ motoModel, motoYear, motoSpec, personName, personSurname })}
          disabled={loading}
        >
          {loading ? 'ATUALIZANDO ...' : 'ATUALIZAR DADOS'}
        </button>
      </div>
    </div>
  )
}