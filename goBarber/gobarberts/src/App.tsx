import React from 'react'
import GlobalStyle from './styles/global'
import Signin from './pages/Signin'
// import Singup from './pages/Singup/index'
import { AuthProvider } from './context/AuthContext'

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Signin />
    </AuthProvider>
    <GlobalStyle />
  </>
)
export default App
