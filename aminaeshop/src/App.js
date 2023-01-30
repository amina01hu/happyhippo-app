import './App.css';
import Navbar from './components/Navbar/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import Account from './components/pages/Account/Account';
import About from './components/pages/About/About';
import Post from './components/pages/Post';
import Error from './components/pages/Error';



function App() {
  return (
    <div className="App">
      <Router>
              <Navbar />
              <Routes>
                 <Route exact path='/' element={< Homepage />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/post' element={< Post/>}></Route>
                 <Route exact path='/account' element={< Account/>}></Route>
                 <Route element={< Error/>}></Route>
              </Routes>
          </Router>
    </div>
  );
}

export default App;
