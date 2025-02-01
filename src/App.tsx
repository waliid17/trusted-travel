import './App.css'
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Destinations } from './components/Destinations';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';


const App = ()=>{
  
return(
<>
  <Header/>
  <Home/><br />
  <Destinations/><br /><br /><br />
  <About/>
  <Contact/>
  <Footer/>
</>
  
)

}


export default App
