import './App.css';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Services from './components/services/Services';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
    </div>
  );
}

export default App;
