import React from "react"
import NavBar from "./components/NavBar"

import Socialinks from "./components/Socialinks"
import About from "./components/About"
import Profilepage from "./components/Profilepage"
import Home from "./components/Home"
import Exp from "./components/Exp"





function App() {
  

  return (
    <div>
      <NavBar/>
      <Home />
     

      <Socialinks/>
      <About/>
      <Profilepage/>
      <Exp/>
    </div>
  )
}

export default App
