import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'
import Login from './pages/login'
import Register from './pages/Register'
import Aboutus from './pages/Aboutus'
import Articles from './pages/Articles'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from 'react-bootstrap'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { AuthContext } from './context/AuthContext'
import { useContext } from 'react'
import { ChatContextProvider } from './context/ChatContext'


function App() {
  const {user} = useContext(AuthContext)
  return (
    <>
    <ChatContextProvider user={user}>
      <NavBar/>
      <Container>
        <Routes>
          {/* <Route path='/' element={user? <Chat/> : <Login/>} /> */}
          <Route path='/register' element={user? <Chat/> : <Register/>} />
          <Route path='/login' element={user? <Chat/> : <Login/>} />
          <Route path='*' element={<Navigate to='/home'/>} />
          <Route path='/home' element={user? <Chat/> : <Home/>} />
          <Route path='/aboutus' element={user? <Chat/> : <Aboutus/>} />
          <Route path='/articles' element={user? <Chat/> : <Articles/>} />
        </Routes>
      </Container>

      <Footer />
      
    </ChatContextProvider>
    </>
  )
}

export default App
