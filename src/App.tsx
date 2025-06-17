
import './App.css'
import Navbar from './app/Navbar'
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicesPage from './components/ServicesPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
function App() {


  return (
    <div className="flex flex-col min-h-screen">
    <Router>
       <Navbar/>
         <main className="pt-20">
       <Routes>
        <Route  path="/" element={<HomePage/>} />
        <Route path='/about' element ={<AboutPage/>}/>
        <Route path='/service' element ={<ServicesPage/>}/>
        <Route path='/project' element ={<ProjectsPage/>}/>
        <Route path='/contact' element = {<ContactPage/>}/>
       </Routes>
      
    
        </main>
    
        <Footer/>
     
 
 </Router> 
 </div>
  )
}

export default App
