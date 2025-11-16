import { Header } from './components/Header'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </div>
  )
}

export default App
