import './App.css'
import About from './components/About'
import BottomNavbar from './components/BottomNavbar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import MyWork from './components/MyWork'
import TechStack from './components/TechStack'

function App() {

  return (
    <>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="tech"><TechStack/></section>
      <section id="contact"><Contact /></section>
      <section id="mywork"><MyWork/></section>
      <section id="footer"><Footer/></section>
      <BottomNavbar/>
    </>
  )
}

export default App
