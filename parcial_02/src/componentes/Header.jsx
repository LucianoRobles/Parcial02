import {AppBar,Container,Button,Icon} from '@mui/material';
import { Link } from 'react-router-dom';
import { React } from "react";



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