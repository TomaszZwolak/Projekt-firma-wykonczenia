import React from 'react';
import './sass/App.scss';
import obraz1 from "./Images/obraz1.jpeg";
import obraz2 from "./Images/obraz2.jpeg";
import BG from "./Images/BG.jpeg";

function Gallery() {
    return (
        <div className="Gallery">
            <img src={obraz1} alt="realizacja"/>
            <img src={obraz2} alt="realizacja"/>
            <img src={BG} alt="realizacja"/>
        </div>
    );
}
export default Gallery;