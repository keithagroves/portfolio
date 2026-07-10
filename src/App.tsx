import { Header } from './components/Header'
import { Work } from './components/Work'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { ThemeToggle } from './components/ThemeToggle'
import './App.css'

function App() {
  return (
    <div className="app">
      <ThemeToggle />
      <Header />
      <Work />
      <Experience />
      <Footer />
    </div>
  )
}

export default App
