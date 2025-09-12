import './App.css';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Services from './components/services/Services';
import About from './components/about us/About';
import Popular from './components/popular/Popular';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Popular />
    </div>
  );
}

export default App;
