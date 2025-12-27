import React, { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AuthProviderPropType } from '../types/authProviderTypes'

export type HospitalAddressType = {
  area: string
  city: string
  state: string
  pincode: number
}

type AuthContextProps = {
  hospitalId: string
  hospitalName: string
  hospitalAddress: HospitalAddressType
  userRole: string
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setHospitalAddress: React.Dispatch<React.SetStateAction<HospitalAddressType>>
  setHospitalName: React.Dispatch<React.SetStateAction<string>>
  setHospitalId: React.Dispatch<React.SetStateAction<string>>
  setUserRole: React.Dispatch<React.SetStateAction<string>>
}

const AuthContext = createContext({} as AuthContextProps)
const AuthProvider = ({ children, auth }: AuthProviderPropType) => {
  const router = useRouter()
  const [hospitalId, setHospitalId] = useState('')
  const [userRole, setUserRole] = useState('')
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [isLock, setIsLock] = useState(true)
  const [hospitalName, setHospitalName] = useState('')
  const [hospitalAddress, setHospitalAddress] = useState({
    area: '',
    city: '',
    state: '',
    pincode: 0,
  })

  useEffect(() => {
    setEmail(localStorage.getItem('email') || '')
    setToken(localStorage.getItem('accessToken') || '')
    setHospitalId(localStorage.getItem('hospitalId') || '')
    setUserRole(localStorage.getItem('role') || '')
    setHospitalAddress(
      JSON.parse(localStorage.getItem('hospitalAddress') || '{}')
    )
    setHospitalName(localStorage.getItem('hospitalName') || '')
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('accessToken') || ''
    if (!auth) {
      setIsLock(false)
      return
    }
    if (auth && !token) {
      setIsLock(false)
      router.push('/login')
    }
    setIsLock(false)
    return
  }, [token, auth, router])

  if (isLock) {
    return null
  }

  return (
    <AuthContext.Provider
      value={{
        hospitalId,
        userRole,
        email,
        setEmail,
        setHospitalId,
        hospitalAddress,
        hospitalName,
        setHospitalAddress,
        setHospitalName,
        setUserRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
const useAuth = () => useContext(AuthContext)
export { useAuth, AuthProvider }
