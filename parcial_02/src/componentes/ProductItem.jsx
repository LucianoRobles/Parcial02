import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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