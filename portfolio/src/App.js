
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import NavBar from './components/NavBar';
import { HashRouter as Router } from 'react-router-dom';
// ... rest of your code using <

function App() {
  return (
    <Router>
        <div className="App">
          <h1 className='heading'>Portfolio</h1>
          <NavBar />
          <Main />
          <Footer />
        </div>
    </Router>
  );
}

export default App;
