import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Rotas() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/contato" component={Contato} />
          <Route component={PaginaNaoEncontrada} />
        </Switch>
      </BrowserRouter>
    );
  }