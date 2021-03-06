import React, { createContext, useCallback, useState, useContext } from 'react'
import api from '../services/api'

interface AuthState {
  token: string
  user: object
}

interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  name: string
  user: object
  signIn(credentials: SignInCredentials): Promise<void>
  singOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Gobarber:token')
    const user = localStorage.getItem('@Gobarber:user')
    if (token && user) {
      return { token, user: JSON.parse(user) }
    }
    return {} as AuthState
  })
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    })
    const { token, user } = response.data
    localStorage.setItem('@Gobarber:token', token)
    localStorage.setItem('@Gobarber:user', JSON.stringify(user))
    setData({ token, user })
  }, [])

  const singOut = useCallback(() => {
    localStorage.removeItem('@Gobarber:token')
    localStorage.removeItem('@Gobarber:user')
    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider
      value={{ name: 'chloe', signIn, singOut, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export { AuthContext, AuthProvider, useAuth }
