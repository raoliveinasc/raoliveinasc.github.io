import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

export default function Account({ session }) {
  const supabase = useSupabaseClient()
  let user;
  if (useUser() !== null) {
    user = useUser();
  }
  const [loading, setLoading] = useState(true)
  const [motoModel, setMotoModel] = useState(null)
  const [motoYear, setMotoYear] = useState(null)
  const [motoSpec, setMotoSpec] = useState(null)
  const router = useRouter()
  

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`moto_model, moto_year, moto_spec`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setMotoModel(data.moto_model)
        setMotoYear(data.moto_year)
        setMotoSpec(data.moto_spec)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ motoModel, motoYear, motoSpec }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        moto_model: motoModel,
        moto_year: motoYear,
        moto_spec: motoSpec,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="motoModel">Moto Model</label>
        <input
          id="motoModel"
          type="text"
          value={motoModel || ''}
          onChange={(e) => setMotoModel(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="motoYear">Moto Year</label>
        <input
          id="motoYear"
          type="text"
          value={motoYear || ''}
          onChange={(e) => setMotoYear(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="motoSpec">Moto Spec</label>
        <input
          id="motoSpec"
          type="text"
          value={motoSpec || ''}
          onChange={(e) => setMotoSpec(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() => updateProfile({ motoModel, motoYear, motoSpec })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>


      <div>
        <button className="button block" onClick={() =>    {
          supabase.auth.signOut()
          router.push('/')}}>
          Sign Out
        </button>
      </div>
    </div>
  )
}