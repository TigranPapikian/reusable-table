import React, { useEffect } from 'react';
import InitPage from './page/InitPage';
import { checkInit } from './utils/checkInit';
import { useDispatch } from 'react-redux';
import keygen from 'keygenerator';
import Login from './page/Login';
import { setSecret } from './features/app/appSlice';
import { AppContainer } from './globalStyles';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CreatePassword from './page/CreatePassword';
import UserPage from './page/UserPage'

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initStatus = checkInit()
  useEffect(() => {
    if (initStatus) {
      dispatch(setSecret(keygen._()))
      navigate('/')
    } else {
      navigate('/login')
    }
  }, [])
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<InitPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<CreatePassword />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </AppContainer>
  )
}

export default App;
