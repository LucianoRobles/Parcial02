import React from 'react';
import { Grid, Link, Box, Typography } from '@mui/material';
import "../App.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box sx={{
            display: "flex",
            backgroundColor: 'primary.dark',
            width: "100%",
            height: "8rem"
            //Arreglar
            // position: 'absolute',
            // bottom: 0,
        }}
        >
            <Grid container
                alignItems="center"
                align="center"

            >
                <Grid item xs={12}>
                    <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        underline="hover"
                    >
                        <FacebookIcon fontSize="large" sx={{ color: 'white' }} />
                    </Link>
                    <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        underline="hover"
                    >
                        <InstagramIcon fontSize="large" sx={{ color: 'white' }} />
                    </Link>
                </Grid>
                <Grid item xs={12}
                >
                    <Typography variant='h6' sx={{ color: 'white' }} >
                        Todos los derechos reservados ©
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;