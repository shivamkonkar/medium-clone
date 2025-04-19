import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Blogs } from './pages/Blogs'
import { BlogPage } from './pages/BlogPage'
import { Publish } from './pages/Publish'

function App() {

  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/blog/' element={<Blogs />}/>
        <Route path='/blog/:id' element={<BlogPage />}/>
        <Route path='/publish' element={<Publish />} />
      </Routes>
    </>
  )
}

export default App
