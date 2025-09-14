import './App.css';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Services from './components/services/Services';
import About from './components/about us/About';
import Popular from './components/popular/Popular';
import Review from './components/review/Review';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scroll-up/ScrollUp';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Popular />
      <Review />
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
