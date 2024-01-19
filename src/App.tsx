import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Cards from './components/Cards';
import History from './components/History';
import Why from './components/Why';
import Success from './components/Success';
import Chefs from './components/Chefs';
import Partners from './components/Partners';
import './App.css';

const App = () => {
  return (
    <>
      <Header/>
      <div className="main-img-section">
        <div className="main-img"></div>
        <div className="main-img-section-txt">Об ассоциации</div>
      </div>
      <Main/>
      <Cards/>
      <History/>
      <Why/>
      <Success/>
      <Chefs/>
      <Partners/>
      <Footer/>
    </>
  );
}

export default App;
