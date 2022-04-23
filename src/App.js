import './AppStyle.css'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Price from './Price';
import About from './About';
import Contact from './Contact';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/price' element={<Price /> } />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
