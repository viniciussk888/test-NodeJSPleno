import React from "react";
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'

import './styles.css';

export default function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
 
        <main>
          <h1>Projeto de teste para vaga FullStack</h1>
          <p>Por Vinicius Martins</p>
        </main>

        <Link to="/map" className="enter-app">
          <FaArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}