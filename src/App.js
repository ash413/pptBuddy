import React from 'react';

import { Footer, Possibility, Features, Whatwebsite, Header } from './containers';
import { CTA, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      
      <Whatwebsite />
      <Possibility /* used as Converter */ />
      <Features />
      <CTA />
      
      <Footer />
    </div>
  )
}

export default App