import React from 'react';
import './css/common.css';
import Header from './components/Header';
import PageBody from './components/PageBody';
import Footer from './components/Footer';

function App() {
  return (
    <div className="small-page coming-soon-page">
      <div className="page-content relative-box">
        <Header/>
        <PageBody/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
