import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Sec2 from './components/section2/Sec2';
import Sec3 from './components/section3/Sec3';
import Sec4 from './components/section 4/Sec4';
import Sec5 from './components/section5/Sec5';
import Sec6 from './components/section6/Sec6';
import Sec7 from './components/section7/Sec7';
import Sec8 from './components/section8/Sec8';


function App() {
  return (
    <div className="App">
      <Header />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Sec6 />
      <Sec7/>
      <Sec8/>
    </div>
  );
}

export default App;
