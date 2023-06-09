import React, { Fragment, useState, useEffect } from 'react';
import Perfume from '../src/componentes/perfume'
import './app.css'
import Navegacao from '../src/componentes/navegacao'

const App = () => {
  const [perfumes, setPerfumes] = useState([])

  useEffect(() => {
    fetch('/api/perfumes/')
      .then(response => response.json())
      .then(data => {
        setPerfumes(data)
      });
  }, []);

  return(
    <Fragment>
      <Navegacao getter={perfumes} setter={setPerfumes}/>
      <section>
        <div className='grid-perfumes'>
          {perfumes.map((perfume, index) => {
            return(
              <div key={index}>
                <Perfume
                id={perfume.id}
                imagem={perfume.imagem}
                genero={perfume.genero.nome}
                nome={perfume.nome}
                briefing={perfume.briefing}
                preco={perfume.preco}
                />
              </div>
            )
          })}
        </div>
      </section>
    </Fragment>
  )
}

export default App;
