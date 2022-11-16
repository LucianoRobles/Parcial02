import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { React, Fragment } from "react";
import Icon from '@mui/material/Icon';



function Header() {
    const pages = [
        { field: 'Home', path: '/home', icono: "home" },
        { field: 'Conocenos', path: '/conocenos', icono: "face" },
        { field: 'Reservar Turno', path: '/reservarTurno', icono: "pets" },
        { field: 'Tienda', path: '/tienda', icono: "store" },
        { field: 'Carrito', path: '/carrito', icono: "add_shopping_cart" },
    ];

    return (
        
            <AppBar
                position="static"
               
            >
                <Container
                    
                >
                    {pages.map(page =>
                        <Link
                            to={page.path} >
                            <Button
                                color='error'
                            >
                                {page.field}

                                {<Icon
                                    fontSize="small"
                                >
                                    {page.icono}
                                </Icon>}
                            </Button>
                        </Link>
                    )}
                </Container>
            </AppBar>
        
    );
}
export default Header;