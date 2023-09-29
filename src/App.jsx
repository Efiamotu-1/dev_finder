import { useState } from "react"
import Content from "./components/Content"
import Navbar from "./components/Navbar"
import Search from "./components/Search"

function App() {
  const [user, setUser] = useState('')


  return (
    <>
    <div className='p-5'>
    <Navbar />
    <Search setUser={setUser}/>
    {user && <Content user={user}/>}

    </div>
    </>
  )
}

export default App
