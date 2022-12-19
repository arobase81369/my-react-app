import { Container } from "@mui/system";
import { useState, useEffect } from "react";
import { Routes, Route, useParams, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));


const ProductDetail = () => {

    const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [product, setProduct] = useState([]);
    

    let { id } = useParams();
    let url = `https://arobasedesigns.in/ecommerce/wp-json/wc/v3/products?slug=${id}&consumer_key=ck_41b1857032b50e2e90aebdb30a86bfaca6a9f640&consumer_secret=cs_e38d37febd6bedb12c0a119d8986c09a1dfb2b5c`;
    console.log(id);

    useEffect(() => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    
          fetch(url, requestOptions)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setProduct(result);
              console.log(product);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, []);


    return <>
    <Container maxWidth="md">
        <br />
    <Button variant="contained"><Link to='/products' >Back to Shop</Link></Button>
    <br /><br />
        {product.map(item => (
<Box sx={{ flexGrow: 1 }}>
<Grid container spacing={2}>
  <Grid item xs={6} md={4}>
    <Item><CardMedia
    component="img"
    height="140"
    image={item.images[0].src}
    alt="green iguana"
  /></Item>
  </Grid>
  <Grid item xs={6} md={8}>
    <Item>
    <Typography gutterBottom variant="h6" component="div" sx={{ textDecoration: 'none' }}>
      {item.name}
    </Typography>
    <Typography gutterBottom variant="span" component="div" sx={{ textDecoration: 'none' }}>
     SKU:  {item.sku}
    </Typography>
    <br/>

    <Typography variant="h6" color="text.secondary">
    <strong>$ {item.price}</strong>
    </Typography>
    <Typography gutterBottom variant="span" component="div" sx={{ textDecoration: 'none' }}>
     Category:  {item.categories[0].name}
    </Typography>

    <CardActions>
    <Button variant="contained" startIcon={<DeleteIcon />}>Add to Cart</Button>
    <IconButton color="primary" aria-label="upload picture" component="label">
        <PhotoCamera />
      </IconButton>
      </CardActions>

    </Item>
  </Grid>
</Grid>
</Box>

       
        ))}

    
    </Container>
    </>
}


export default ProductDetail;