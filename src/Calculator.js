import React, { useState } from 'react';
import './sass/App.scss';
import reactDom from 'react-dom'

const Calculator = () => {
  const [wall1, setWall1] = useState();
  const [wall2, setWall2] = useState();
  const [wall3, setWall3] = useState();
  const [wall4, setWall4] = useState();
  const [height, setHeight] = useState();
  const [error, setError] = useState();
   
  const handleChangeNumber1 = e =>{
    setWall1(e.target.value);
  }
 const handleChangeNumber2 = e => {
  setWall2(e.target.value);
 }
  const handleChangeNumber3 = e =>{
    setWall3(e.target.value);
  }
 const handleChangeNumber4 = e => {
  setWall4(e.target.value);
 }
 const handleChangeHeight = e => {
  setHeight(e.target.value);
 }
 const handleSubmit = (e) =>{
   e.preventDefault();
   if(wall1 !=="number")
   setError();
 } 
 const panele = 40;
 const listwy = 3.15;
 const malowanie = 15;
 
  return (
    <>
    <div className="container">
    <form onSubmit={handleSubmit}className="Wynik">
      {error && <p style={{color: "red"}} >{error}</p>}
      <h1>Kalkulator usługi układania paneli(40zł/1m2</h1>
      <p>Zmierz długość ścian w centymentrach, a następnie wprowadź wymiary: </p>
      <label className="wynik">Długość ściany A</label>
      <input onChange={handleChangeNumber1}name="wall1" placeholder="Ściana A" value={wall1} className="inputCalc"/>
      <label className="wynik">Długość ściany B</label>
      <input onChange={handleChangeNumber2}name="wall2" placeholder="Ściana B"
      value={wall2} className="inputCalc"/>
      <p className="Wynik">Przyblizona cena za ułozenie paneli w tym pokoju wynosi:{
      Math.round(wall1*wall2)*panele || 0} zł</p>
      <p className="Wynik"> Cena za ułozenie listw w tym pokoju wynosi {Math.round((wall1+wall2)*2)*listwy || 0} zł</p>
    </form>
    <form onSubmit={handleSubmit}className="Wynik">
      <h1>Kalkulator usługi malowania pokoju(15zł/1m2)</h1>
      <p>Zmierz długość ścian w centymentrach, a następnie wprowadź wymiary: </p>
      <label className="wynik">Długość ściany A</label>
      <input onChange={handleChangeNumber3}name="wall3" placeholder="Ściana A" value={wall3} className="inputCalc"/>
      <label className="wynik">Długość ściany B</label>
      <input onChange={handleChangeNumber4}name="wall3" placeholder="Ściana B" value={wall4} className="inputCalc"/>
      <label className="wynik">Wysokość:</label>
      <input onChange={handleChangeHeight}name="height" placeholder="Wysokość"
      value={height}
      className="inputCalc"/>
      <p className="Wynik">Przyblizona cena za pomalowanie ścian w tym pokoju wynosi: {Math.round(wall3*height)*2+(wall4*height)*2*malowanie || 0} zł</p>
    </form>
    <h1 className="Wynik">Przyblizona cena za ułozenie paneli + listwy oraz pomalowanie tego pokoju wynosi: {Math.round((wall1*wall2) * panele )+((wall3*height)*2+(wall4*height)*2*malowanie) +((wall1 + wall2)*2)*15 || 0} zł  </h1>
    </div>
    </>
  )
  }
const App = () => <Calculator />;
reactDom.render(<App/>, document.getElementById("root"))

  export default Calculator;
