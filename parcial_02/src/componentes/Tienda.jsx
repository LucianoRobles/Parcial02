import { Typography, Grid } from '@mui/material';
import { React } from "react";
import ProductItem from './ProductItem';
import { v4 as uuidv4 } from 'uuid';

const Tienda = ({ carrito, modificarCarrito }) => {

    const listaProductos = [
        {
            srcImg: "https://http2.mlstatic.com/D_NQ_NP_608050-MLA48082894720_102021-O.webp",
            altImg: "Pretal de perro",
            titulo: "Pretal para perro",
            descripcionImg: "Pretal para perro, ideal para sacarlo a pasear, tenemos todos los talles.",
            precio: "$2500",
            idProducto: "001"

        },
        {
            srcImg: "https://http2.mlstatic.com/D_NQ_NP_2X_792727-MLA43971156607_112020-F.webp",
            altImg: "Collar de perro",
            titulo: "Collar para perro",
            descripcionImg: "Collar de colocación rápida para Perros Regulable.",
            precio: "$1100 ",
            idProducto: "002",
        },
        {
            srcImg: "https://http2.mlstatic.com/D_NQ_NP_2X_733120-MLA50131748752_052022-F.webp",
            altImg: "Comida de perro",
            titulo: "Comida para perro",
            descripcionImg: "Bolsa de alimento premiun canino, marca Sieger, 15 kilo.",
            precio: "$10500",
            idProducto: "003",
        },
        {
            srcImg: "https://http2.mlstatic.com/D_NQ_NP_2X_766325-MLA50997787968_082022-F.webp",
            altImg: "Hueso de goma",
            titulo: "Hueso de goma",
            descripcionImg: 'Hueso de goma recreativo para su mascota unisex. Tamaño "L" ',
            precio: "$3500",
            idProducto: "004",
        },
        {
            srcImg: "https://http2.mlstatic.com/D_NQ_NP_644560-MLA49203124137_022022-O.webp",
            altImg: "Collar Isabelino",
            titulo: "Collar Isabelino",
            descripcionImg: "Collar isabelino Para Perros y Gatos, tenemos todos los talles. ",
            precio: "$3300",
            idProducto: "005"
        },
        {
            srcImg: "https://http2.mlstatic.com/D_NQ_NP_2X_710999-MLA50060313814_052022-F.webp",
            altImg: "Juguete de peluche",
            titulo: "Juguete de peluche",
            descripcionImg: "Juguete de peluche con flecos, start wars Darth Vader.",
            precio: "$3500",
            idProducto: "006"
        }

    ];

    const seleccionarProducto = (producto) => {
        const productAux = { ...producto, id: uuidv4() }
        modificarCarrito([...carrito, productAux]);
        console.log(carrito)
    }



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
                <Typography variant='h4'>
                    Tienda
                </Typography>
            </Grid>

            {listaProductos.map(product =>
                <Grid item auto>
                    <ProductItem
                        product={product}
                        functBoton={() => seleccionarProducto(product)}
                        textButton="Comprar"
                    />
                </Grid>
            )}
        </Grid>
    );
};
export default Tienda;