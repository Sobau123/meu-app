import React, { useState } from 'react';
import './Estilos.css';
function App() {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);
  const [soma, setSoma] = useState(0);

  
  return (
    <div>
      <h1 className="titulo">Componente Com Estilo</h1>
      <input type="text" value={contador1} />
      <input type="text" value={contador2} />
      <input type="text" value={soma} />
      <button onClick={() => setContador1(contador1 + 1)}>Clique aqui</button>
      <button onClick={() => setContador2(contador2 + 1)}>Clique aqui</button>
      <button onClick={() => setSoma(contador1 + contador2)}>Somar</button>

      <p>Contagem 1: {contador1}</p>
      <p>Contagem 2: {contador2}</p>
      <p>Soma: {soma}</p>
    </div>
  );
}

export default App;
