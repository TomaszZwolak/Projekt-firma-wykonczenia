import React, {useState} from 'react';
import reactDom from 'react-dom';
import {db} from './firebase';

const Form = () => {
  const [inputs, setInputs] = useState({
    userName:"",
    surname:"",
    email:"",
    select: "Pan"
  });
  db.collection("Users").doc("Users").set({
    select: inputs.select,
    name: inputs.userName,
    surname: inputs.surname,
    
    email: inputs.email,
    
})
.then(() => {
    console.log("Wysłano!");
})
.catch((error) => {
    console.error("Error: ", error);
});
  const [number, setNumber] = useState("");
  const [error, setError] = useState();
  

  const handleInputChange = e => {
    setInputs(prevInputsState => ({
      ...prevInputsState,
      [e.target.name]: e.target.value
    }));
  }
 
  const handleChangeNumber = e => {
    if(isNaN(e.target.value)){
      return;
    }
    setNumber(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputs.userName.length < 3){
      setError("Wpisane imię jest za krótkie");
      return;
    }
    if(inputs.surname.length < 3){
      setError("Wpisane nazwisko jest za krótkie");
      return;
    }
  
    if(inputs.email.length < 3){
      setError("Wpisany adres e-mail jest za krótki");
      return;
    }
  }
  
  return (
    <div className= "">
    <form onSubmit={handleSubmit} className="formularz">
      { error && <p style={{color:"red"}}>{error}</p>}
  <select className="selector"
  name="select" 
  value={inputs.select} 
  onChange={handleInputChange}
  >
    <option value="pan">Pan</option>
    <option value="pani">Pani</option>
  </select>
    <div className="inputs">
      <p>Wpisz imię:</p>
       <input 
       type="text"
       placeholder="Wpisz imię" 
       value={inputs.userName}
       onChange={handleInputChange}
       name="userName"
       />

       <p>Wpisz nazwisko:</p>
       <input 
       type="text"
       placeholder="Wpisz nazwisko"
       value={inputs.surname} 
       onChange={handleInputChange}
       name="surname"
       />

       <p>Zostaw nam numer telefonu:</p>
       <input
      placeholder="Zostaw numer telefonu"
      value={number} 
      onChange={handleChangeNumber}
      name="number"
      />

       <p>Podaj adres e-mail:</p>
       <input 
       type="email"
       placeholder="Podaj adres e-mail"
       value={inputs.email} 
       onChange={handleInputChange}
       name="email"
       />
       
       <button className="button1"> Wyślij </button>
     </div>
  </form>
  </div>

  );
  }
  const App = () => <Form/>;
reactDom.render(<App/>, document.getElementById("root"))

  export default Form;
