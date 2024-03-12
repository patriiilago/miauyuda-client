import React from "react"
import Navigation from './components/Navbar/Navbar'
import AppRoutes from "./routes/AppRoutes"



function App() {


  return (

    <div className='App'>
      <Navigation />
      <AppRoutes />
    </div>

  )
}

export default App