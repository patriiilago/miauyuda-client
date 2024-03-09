import React from "react"
import Navigation from './components/Navbar/Navbar'
import AppRoutes from "./routes/AppRoutes"
import Footer from "./components/Footer/Footer"



function App() {


  return (

    <div className='App'>
      <Navigation />
      <Footer />
      <AppRoutes />
    </div>

  )
}

export default App