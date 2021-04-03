import React from "react";
import Map from '../../components/Map';

import './styles.css';

export default function OrphanagesMap() {

  return (
    <div id="page-map">
      <aside>
        <header>
          <h2>Pontos no Mapa</h2>
          <p>Este mapa exibe pontos e faz o agrupamento!</p>
        </header>
      </aside>
      <Map />
    </div>
  );
}

