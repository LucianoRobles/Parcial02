import { React, Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Grid } from '@mui/material';

import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Home from "./componentes/Home";
import Formulario from "./componentes/Formulario";
import Conocenos from "./componentes/Conocenos";
import Tienda from "./componentes/Tienda";
import Carrito from "./componentes/Carrito";

export default function App() {

  //Hook and Local Storage utilizado para persistir el carrito de compras

  let carritoInicial = JSON.parse(localStorage.getItem('carrito'));
  if (!carritoInicial) {
    carritoInicial = [];
  };

  const [carrito, modificarCarrito] = useState(carritoInicial);

  //Modificacion de staroge

  useEffect(
    () => {
      if (carritoInicial) {
        localStorage.setItem('carrito', JSON.stringify(carrito))
      } else {
        localStorage.setItem('carrito', JSON.stringify([]));
      }
    }, [carritoInicial]
  );

  return (
    <Fragment>
      <Router>
        <Grid
          container
          spacing={2}
        >
          <Grid item xs={12}
          >
            <Header />
          </Grid>
          <Grid item xs={12}
          >
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/reservarTurno">
                <Formulario />
              </Route>
              <Route path="/conocenos">
                <Conocenos />
              </Route>
              <Route path="/tienda">
                <Tienda
                  carrito={carrito}
                  modificarCarrito={modificarCarrito}
                />
              </Route>
              <Route path="/carrito">
                <Carrito
                  carrito={carrito}
                  modificarCarrito={modificarCarrito}
                />
              </Route>
            </Switch>
          </Grid>
          <Grid item xs={12}
          >
            <Footer />
          </Grid>
        </Grid>
      </Router>

    </Fragment>

  );
}