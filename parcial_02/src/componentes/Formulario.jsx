import { useState, Fragment } from 'react';
import { Grid, Button, TextField, Autocomplete, Typography, Select,MenuItem } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Formulario = () => {
    //Hook
    const [reserva, editarReserva] = useState({
        nombre: "",
        email: "",
        telefono: "",
        fecha: "",
        nombreMascota: "",
        tamanio: "",
        fechaDeCarga: new Date()
    });

    const { nombre, email, telefono, fecha, nombreMascota, tamanio } = reserva;

    const handleChange = (e) => {
        editarReserva({
            ...reserva,
            [e.target.name]: e.target.value,
        })
    };

    const clearForm = () => {
        editarReserva({
            nombre: "",
            email: "",
            telefono: "",
            fecha: "",
            nombreMascota: "",
            tamanio: "",
        });
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(reserva)
        clearForm();
    };

    return (
        <Fragment>
            <form onSubmit={submitForm}>
                <Grid
                    container
                    spacing={2}
                    rowSpacing={4}
                    align="center"
                >
                    <Grid item xs={12}>
                        <Typography variant= "h3" >Reservar turno</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="nombre"
                            onChange={(e) => handleChange(e)}
                            value={nombre}
                            placeholder="Ingrese el nombre"
                            label="Nombre"
                            fullWidth
                            required

                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="email"
                            onChange={handleChange}
                            value={email}
                            placeholder="Email"
                            type="email"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="telefono"
                            onChange={handleChange}
                            value={telefono}
                            placeholder="Telefono personal"
                            type="tel"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="fecha"
                            onChange={handleChange}
                            value={fecha}
                            placeholder="Fecha"
                            type="date"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="nombreMascota"
                            onChange={handleChange}
                            value={nombreMascota}
                            placeholder="Nombre mascota"
                            fullWidth
                            required

                        />
                    </Grid>                    
                    <Grid item xs={6}>
                        <Select
                            name="tamanio"
                            onChange={handleChange}
                            value={tamanio}
                            placeholder="Tamaño de la mascota"
                            required
                            fullWidth
                        >   
                            <MenuItem value={"Chico"}>Chico</MenuItem>
                            <MenuItem value={"Mediano"}>Mediano</MenuItem>
                            <MenuItem value={"Grande"}>Grande</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} align="center">
                        <Button
                            type='submit'
                            variant="contained"
                            size="large"
                            endIcon={<SendIcon />}
                            sx={{
                                width:"80%",
                            }}

                        >
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </form>

        </Fragment>
    );
}

export default Formulario;