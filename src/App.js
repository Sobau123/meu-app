import React, { useState } from 'react';
import './Estilos.css';
function App() {
  const [contador, setContador] = useState(0);
  const [soma, setSoma] = useState(0);

  
  return (
    <div>
      <h1 className="titulo">Componente Com Estilo</h1>
      <input type="text" value={contador} />
      <input type="text" value={soma} />
      <button onClick={() => setSoma(soma + 1)}>Clique aqui</button>
      <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
      <button onClick={() => setSoma(soma + contador)}>Somar</button>

      <p>Contagem: {contador}</p>
      <p>Soma: {soma}</p>
    </div>
  );
}

export default App;
