import React from 'react';
import { Routes ,Route} from 'react-router-dom';


import Header from './Components/Header';

import Home from './Components/Home';
import CreateAccount from './Components/Login/CreateAccount';
import Login from './Components/Login/Login';
import Profile from './Components/Login/Profile';
// import './App.css';


function App() {
  return (
    <div className="App">
      <Header />

      <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/createAccount' element={<CreateAccount />} />
            <Route exact path ='/Login' element={<Login />} />
            <Route exact path ='/Profile' element={<Profile />} />

          </Routes>
      </main>
    </div>
  );
}

export default App;


