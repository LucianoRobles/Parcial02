
import { Grid, Typography,Link } from '@mui/material';
import {React, Fragment } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Conocenos = () => {
    return ( 
        <Fragment>
            
            <Grid 
            container
            align = "center"
            alignItems="center"
            //alignContent="center"
            //spacing={1}
            columnSpacing={2}
            rowSpacing={2}
            justifyContent="center"
            
            >
            <Grid item xs={12}
                  align = "justify"
            >
            <Typography 
              variant = "h4"
            
            >
              Nos dedicamos a la venta de accesorios para tus mascotas podes ver todo en nuestra tienda.<br/>Tenemos servicio de peluqeria canina nuestra prioridad es el cuidado de tu mascota reserva tu turno.</Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography 
              variant = "h6"
              >
              Encontramos en<br/>
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105070.0156696457!2d-58.71187580811861!3d-34.61837043332667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8d396231f5d%3A0x2eb5499391748177!2sVilla%20Tesei%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1668545935960!5m2!1ses-419!2sar"
              width="200"
              height="200"
              frameBorder="0"
              
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
              </Typography>                                          
            </Grid>
            <Grid item xs={6}
            
            >
            <Typography 
              variant = "h6"
              align = "center"
              >
            Nuestras redes son: <br/>
            <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        underline="hover"
                        
                    //component={<FacebookIcon/>}
                    >
                        <FacebookIcon fontSize="large" />

                    </Link>
                    <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        underline="hover"
                    >
                        <InstagramIcon fontSize="large"  />
                    </Link>
            
            
            </Typography>  
            </Grid>
            <Grid item xs={6}

            >
            <Typography 
              variant = "h6"
              alignItems={"center"}
              alignContent={"center"}
              alignSelf={"center"}
              >
            Nuestro telefono es: <br/>
             
            <Link
              href="https://api.whatsapp.com/send?phone=541135417489&text=Hola%20vengo%20de%20la%20pagina%20%22osiris%22%20quiero%20contactarme."
            >
              <WhatsAppIcon
              color="success"
            />
            11-3541-7489</Link>
            
            </Typography>  
            </Grid>
           
            </Grid>
        </Fragment>
     );
}
 
export default Conocenos;