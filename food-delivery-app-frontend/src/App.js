import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './container/Login';
import Main from './container/Main';


function App() {
  return (
    <div className='w-screen min-h-screen h-auto flex flex-col items-center justify-center'>
      <Routes>
        <Route path='/login'  element={<Login />}/>
        <Route path='/*' element={<Main />} />
      </Routes>
    </div>
  )
}

export default App;