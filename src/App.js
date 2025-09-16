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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Navbar />
              <Home />
              <Services />
              <About />
              <Popular />
              <Review />
              <Footer />
              <ScrollUp />
            </>
          } />
          <Route path='/About' element={
            <>
              <Navbar />
              <About />
              <Footer />
              <ScrollUp />
            </>
          } />
          <Route path='/Popular' element={
            <>
              <Navbar />
              <Popular />
              <Footer />
              <ScrollUp />
            </>
          } />
          <Route path='/Review' element={
            <>
              <Navbar />
              <Review />
              <Footer />
              <ScrollUp />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
