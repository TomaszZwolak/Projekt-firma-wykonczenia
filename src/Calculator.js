import React, { useState } from 'react';
import './sass/App.scss';
import reactDom from 'react-dom'

const Calculator = () => {
 const [inputs, setInputs] = useState({
  wall1:"",
  wall2:"",
 });
 const [error, setError] = useState("");

  const handleInputChange = e => {
    setInputs(prevInputsState => ({
      ...prevInputsState,
      [e.target.wall1]: e.target.value
    }));
  }
  const handleClick = e => {
    e.preventDefault();
    if(isNaN)
    setError();
  }
  function Count (wall1, wall2) {
    console.log(wall1 * wall2)
  }
  Count();
  return (
        <div>
      <p className="walls">Wprowadź wymiary ścian a dowiesz się ile wyniesie opłata za ułozenie paneli w pomieszczeniu</p>
      <form>
        {error && <p style={{color : "red"}}>{error} </p> }
       <p className="walls">Ściana A:</p>
       <input 
       name=""
       onChange={handleInputChange}
       type="number"
       placeholder="Ściana A" 
       value={inputs.wall1}
       className="inputsCalc"
       />
       <input 
       name=""
       onChange={handleInputChange}
       type="number" 
       min = "1"
       placeholder="Ściana B" 
       value={inputs.wall2}
       className="inputsCalc"
       />
       <button
        onClick={handleClick}
        className="button1"></button>
       </form>
       <p className="walls">Wprowadź wymiary ścian a dowiesz się ile wyniesie opłata za ułozenie płytek w pomieszczeniu</p>
       <form>
        {error && <p style={{color : "red"}}>{error} </p> }
       <p className="walls">Ściana A:</p>
       <input 
       name=""
       onChange={handleInputChange}
       type="number"
       placeholder="Ściana A" 
       value={inputs.wall1}
       className="inputsCalc"
       />
       <input 
       name=""
       onChange={handleInputChange}
       type="number" 
       min = "1"
       placeholder="Ściana B" 
       value={inputs.wall2}
       className="inputsCalc"
       />
       <button
        onClick={handleClick}
        className="button1"></button>
       </form>
       <p className="walls">Wprowadź wymiary ścian a dowiesz się ile wyniesie opłata za połozenie gladzi w pomieszczeniu</p>
       <form>
        {error && <p style={{color : "red"}}>{error} </p> }
       <p className="walls">Ściana A:</p>
       <input 
       name=""
       onChange={handleInputChange}
       type="number"
       placeholder="Ściana A" 
       value={inputs.wall1}
       className="inputsCalc"
       />
       <input 
       name=""
       onChange={handleInputChange}
       type="number" 
       min = "1"
       placeholder="Ściana B" 
       value={inputs.wall2}
       className="inputsCalc"
       />
       <input 
       className="inputsCalc"
       name=""
       onChange={handleInputChange}
       type="number" 
       min = "1"
       placeholder="Wysokość pomieszczenia" 
       value={inputs.wall2}
       />
       <button
        onClick={handleClick}
        className="button1"></button>
       </form>
        </div>
    );
}
const App = () => <Calculator />;
reactDom.render(<App/>, document.getElementById("root"))

  export default Calculator;
