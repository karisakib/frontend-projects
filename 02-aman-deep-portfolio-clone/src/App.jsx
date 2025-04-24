import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Stack from "./components/Stack"
import Works from "./components/Works"

function App() {
  return (
    <div className="flex flex-col gap-4 items-center min-h-screen">
    <Navbar/>
    <Hero/>
    <Stack/>
    <Works/>
    <Footer/>
    </div>
  )
}

export default App
