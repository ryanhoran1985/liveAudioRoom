import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { MainPage } from './pages/main'
import { SignIn } from './pages/sign-in'
import { Room } from './pages/room'
import { StreamCall } from '@stream-io/video-react-sdk'
import { useUser } from './user-context'

function App() {
  const { call } = useUser();

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/room' element={
          call ? (
            <StreamCall call={call}>
              <Room />
            </StreamCall>
            ) : (
              <Navigate to="/" />
            )
          } 
        />
      </Routes>
    </Router>
  )
}

export default App
