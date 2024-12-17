
import {Routes , Route } from 'react-router-dom'
import './App.css'
import HomeComponent from './Home/HomeComponent'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" />
        <Route path="*"  /> 
      </Routes>
    </>
  )
}

export default App
