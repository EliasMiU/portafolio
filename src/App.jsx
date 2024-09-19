import Header from "./components/Header/Header"
import Hero from "./components/hero/Hero"
import Proyectos from "./components/Proyectos/Proyectos"
import './App.css'
import Skill from "./components/Herramientas/Skill"
import NewProyect from "./components/Proyectos/NewProyect"
import Footer from "./components/Footer/Footer"
import Cuadricula from "./components/Cuadricula/Cuadricula"


function App() {
  return (
    <>
      <Header />
      <Hero />
      <NewProyect />
      <Cuadricula />
      <Proyectos />
      <Skill />
      <Footer />
    </>
  )
}

export default App
