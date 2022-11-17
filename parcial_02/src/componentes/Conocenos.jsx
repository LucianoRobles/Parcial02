import { Grid, Typography, Link } from '@mui/material';
import { React, Fragment } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

const Conocenos = () => {
  return (
    <Fragment>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        align="center"
      >
        <Grid item xs={12}
        >
          <Typography
            variant="h4"
          >
            Nos dedicamos a la venta de accesorios para tus mascotas podes ver todo en nuestra tienda.<br />Tenemos servicio de peluqeria canina nuestra prioridad es el cuidado de tu mascota reserva tu turno.
          </Typography>
        </Grid>
        <Grid item xs={12}
        >
          <Typography
            variant="h6"
          >
            Ubicacion<br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105070.0156696457!2d-58.71187580811861!3d-34.61837043332667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8d396231f5d%3A0x2eb5499391748177!2sVilla%20Tesei%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1668545935960!5m2!1ses-419!2sar"
              width="80%"
              height="20%"
              frameBorder="0"
              fullWidth
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </Typography>
        </Grid>
        <Grid item xs={12}
        >
          <Typography
            variant="h6"
          >

            Nuestras redes: <br />
          </Typography>
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            underline="hover"
          >
            <FacebookIcon fontSize="large" color="inherit" />

          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            underline="hover"
          >
            <InstagramIcon fontSize="large" color="warning" />
          </Link>
          <Link
            href="https://twitter.com/?lang=es"
            target="_blank"
          >
            <TwitterIcon fontSize="large" color="action" />
          </Link>
          <Typography
            variant="h6"
          >
            Telefono: <br />
            <Link
              href="https://api.whatsapp.com/send?phone=541135417489&text=Hola%20vengo%20de%20la%20pagina%20%22osiris%22%20quiero%20contactarme."
              underline='hover'
            >
              <WhatsAppIcon
                color="success"
                fontSize="small"
              />
              11-3541-7489
              <WhatsAppIcon
                color="success"
                fontSize="small"
              />
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Conocenos;