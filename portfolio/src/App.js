
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import NavBar from './components/NavBar';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/My_Portfolio">
        <div className="App">
          <h1 className='heading'>Portfolio</h1>
          <NavBar />
          <Main />
          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
