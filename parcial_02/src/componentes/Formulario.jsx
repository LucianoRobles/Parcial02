import { useState, Fragment } from 'react';
import { MenuItem, Select, FormControl, Grid, InputLabel, Input, Container, FormHelperText, Button, TextField, Autocomplete, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { v4 as uuid } from 'uuid';


const Formulario = ({ agregarAsociado }) => {
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
    /*
    const [error, setError] = useState(false);
    //Funciones

*/

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

    const submitForm = () => {
        console.log(reserva)
        //e.preventDefault();
        //Enviar info al backend

        clearForm();
    };
    //console.log("Usuario agregado");
    /*
    if (nombre.trim() === "" || dni.trim() === "" || email.trim() === "") {
        setError(true)
        return;
    }
    setError(false);
    socio.id = uuid();
    agregarAsociado(socio);*/


    return (
        <Fragment>
            <Grid 
                container 
                spacing={2}
                rowSpacing={4}
                
            >
                <Grid item xs={12}>
                    <Typography fontSize="large">Reservar turno</Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="nombre"
                        onChange={(e) => handleChange(e)}
                        value={nombre}
                        placeholder="Ingrese el nombre"
                        label="Nombre"
                        fullWidth

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
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="nombreMascota"
                        onChange={handleChange}
                        value={nombreMascota}
                        placeholder="Nombre mascota"
                        fullWidth

                    />
                </Grid>
                <Grid item xs={6}>
                    <Autocomplete
                        name="tamanio"
                        onChange={handleChange}
                        value={tamanio}
                        placeholder="Tamaño de la mascota"
                        autoComplete
                        options={["Grande", "Chico", "Mediano"]}
                        renderInput={(params) => 
                            <TextField 
                                {...params} 
                                label="Tamaño" 
                                fullWidth
                            />
                        }

                    />
                </Grid>
                <Grid item xs={12} align="center">
                    <Button
                        onClick={submitForm}
                        variant="contained"
                        size="large"
                        endIcon={<SendIcon/>}
                        fullWidth
                    >
                        Enviar
                    </Button>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Formulario;