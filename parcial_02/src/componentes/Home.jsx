import { Card, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment, useEffect, useState } from 'react';


const Home = () => {

    const [imgMascota,setImgMascota] = useState("");
    const [hasChange,setHasChange] = useState(false);
    

    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        async function get(){
            const mascota =  await fetch('https://dog.ceo/api/breeds/image/random');
            const image = await mascota.json();
            setImgMascota(image.message);
        };
        if(!hasChange){
            get();
            setHasChange(true);
        }
        
    },[]);
    
    return (
        <Fragment>
            <Box
                align="center"
                sx={{
                    padding: '2rem'
                }}
            >
                <Typography variant="h3">
                    Bienvenidos al Pet Shop "Osiris"
                </Typography>
                <Card>
                    <CardMedia
                      component="img"
                      height="400rem"
                      image={imgMascota}
                      alt="Mascota"
                    />
                </Card>
                <Typography variant="h6">
                    En nuestra pagina conoceras nuestra tienda, podras reservar un turno para peluqueria, conocernos y mucho mas.
                </Typography>
            </Box>
        </Fragment>
    );
}

export default Home;