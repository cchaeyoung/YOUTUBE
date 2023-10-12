
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Watch from './pages/Watch';
import Search from './pages/Search';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
         <Header  />
          <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;

