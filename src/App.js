import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import routes
import Home from './routes/Home';
// import About from './routes/About';
import HeroDetails from './routes/HeroDetails';

// Import components
import Nav from './components/Nav';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path={'/'} element={<Home />}/>
        {/* <Route path={'/about'} element={<About />}/> */}
        <Route path={'/:id'} element={<HeroDetails />}/>
      </Routes>
    </Router>
   
  );
}

export default App;
