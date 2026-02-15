import { ChevronDown } from "lucide-react"
import Navbar from "./components/Navbar"
import About from "./sections/About"
import Hero from "./sections/Hero"


function App() {
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      <main>
        <Hero/>
        <About/>
      </main>
    </div>
  )
}

export default App
