import React from 'react'
import Signup from './Signup'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'

const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>

        <Route path='/login' element={<Login/>}></Route>

        <Route path='/home' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App

