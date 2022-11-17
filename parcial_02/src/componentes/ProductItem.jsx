import * as React from 'react';
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const ProductItem = ({product,functBoton,textButton}) =>  {
  return (
    <Card sx={{ maxWidth: 345 }}>

      <CardMedia
        component="img"
        height="300"       
        image= {product.srcImg}
        alt={product.altImg}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.titulo} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.descripcionImg} 
        </Typography>
      </CardContent>

      <CardActions sx={{padding:"1rem"}}  >        
        <Typography gutterBottom ><strong> Precio {product.precio}</strong></Typography>
        <Button 
          fullWidth 
          variant="contained" 
          endIcon={<ShoppingCartIcon/>} 
          size="medium"
          onClick={functBoton}
          >{textButton}</Button>  
      </CardActions>
    </Card>
  );
}

export default ProductItem;