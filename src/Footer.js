import React from 'react';
import './sass/App.scss';
// import logo from './Images/Logo-firmy.png'

function Footer() {
    return (
        <>
        <footer class="footer">
<div className="footer_container">
  <div className="footer__info">
    {/* <img className="logotyp"src={logo} /> */}
    <span className="footer__copy">© 2021 Zwoltec Sp.z.o.o, All Rights Reserved </span>
    <p>NIP 9512244224 KRS 0000299575 REGON 141301028 </p>
    <p>Numer telefonu:666-555-444 </p>
    <p>E-mail: zwoltec@zwoltec.pl </p>
  </div>
</div>
</footer>
        </>
    );
}
export default Footer;