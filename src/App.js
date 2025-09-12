import './App.css';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Services from './components/services/Services';
import About from './components/about us/About';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
    </div>
  );
}

export default App;
