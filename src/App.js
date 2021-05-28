import React from 'react';
// import ReactDOM from 'react-dom';
import './sass/App.scss';
import Navi from './Navi';
import Calculator from './Calculator';
import Form from './Form';
import Gallery from './Gallery';
import Footer from './Footer';
import Logo from './Logo';
import Oferta from "./oferta";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import {db} from './firebase';
// import {useState, useEffect} from 'react';

function App() {
  return (
    <div className="App">
     <Router>
        <Logo />
        <Navi />
        <Switch>
          <Route path="/Oferta" exact component={Oferta} />
          <Gallery path="/Gallery" component={Gallery} />
          <Route path="/Calculator" component={Calculator}/>
          <Route path="/Form" component={Form}/>
          <Route path="/" component={Home}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

const Home = () => (
  <div>
    <h1 className="homePage">
O NAS
Jesteśmy firmą budowlaną powstałą w Katowicach.
Świadczymy usługi wykończeniowe, remontowe oraz ogólnobudowlane zarówno
dla obiektów komercyjnych jak i osób fizycznych. 
</h1>
<h3 className="homePage1">Na naszej stronie znajdziesz przykładowe realizacje, kalkulator wyceny układania paneli, płytek oraz gładzi.
  W zakładce Kontakt znajdziesz formularz kontaktowy oraz podstawowe dane. A pełną gamę usług wykonywanych przez naszą firmę znajdziesz w Ofercie!
</h3>
  </div>
);
export default App;
