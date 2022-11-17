import ProductItem from "./ProductItem";
import { Grid, Typography} from '@mui/material';

import '../App.css';

const Carrito = ({ carrito, modificarCarrito }) => {

    const eliminarCompra = (product) => {
        let listaAux = carrito.filter(item => item.id != product.id);
        modificarCarrito(listaAux);
    }

    let titulo2 = carrito.length === 0 ? "Aun no tienes nada en el carrito, puedes ir a la tienda" : "Carrito de compras";

    return (
        <Grid
            container
            spacing={2}
            rowSpacing={2}
            columnSpacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            align="center"
        >
            <Grid item xs={12}>
                <Typography
                    variant="h3"
                    align="center"
                >
                    {titulo2}

                </Typography>
            </Grid>
            {
                carrito.map(
                    (product) =>
                        <Grid item auto>
                            <ProductItem
                                product={product}
                                textButton="Eliminar"
                                functBoton={() => eliminarCompra(product)}
                            />
                        </Grid>
                )
            }
        </Grid>
    );
}

export default Carrito;