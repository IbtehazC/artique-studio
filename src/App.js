import './App.css';
import Navbar from '../src/components/NavBar';
import Profile from '../src/components/Profile';
import Section from '../src/components/Section';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Profile />
      <Navbar />
      <Section />
    </Router>
  );
}

export default App;
