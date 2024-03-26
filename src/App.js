import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Possibility, Features, Whatwebsite, Header, DownloadButton } from './containers';
import { CTA, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Router>
          <Navbar />
          <Header />
          <Whatwebsite />
          <Routes>
            <Route exact path='/' element={<Possibility />} />
            <Route path='/download' element={<DownloadButton />} />
          </Routes>
        </Router>
      </div>
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

export default App;
