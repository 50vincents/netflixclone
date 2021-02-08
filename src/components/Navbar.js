import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`navbar ${show && 'nav-black'}`}>
      <img 
        onClick={() => history.push('/')}
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
        alt="Netflix Logo" 
        className="navbar-logo"
      />
      <img 
        onClick={() => history.push('/profile')}
        src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/92995677ac0aab719760c33c_rw_600.png?h=c453d5442731bca5c02fcc8a4542af57" 
        alt="Netflix Logo" 
        className="navbar-avatar"
      />
    </div>
  )
}

export default Navbar
