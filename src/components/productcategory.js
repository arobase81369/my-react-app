import { Container } from "@mui/system";
import { useState, useEffect } from "react";
import { Routes, Route, useParams, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CategoryProduct from "./categoryproduct";
import Breadcrumbs from "./metrialui/breadcrumbs";


const ProductCategory = () => {

    let { category } = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    console.log("Product Page"+category);

    let url = '';

    if(category == "All") {
        url = `https://arobasedesigns.in/ecommerce/wp-json/wc/v3/products?consumer_key=ck_41b1857032b50e2e90aebdb30a86bfaca6a9f640&consumer_secret=cs_e38d37febd6bedb12c0a119d8986c09a1dfb2b5c`;
    } else {
        url = `https://arobasedesigns.in/ecommerce/wp-json/wc/v3/products?category=${category}&consumer_key=ck_41b1857032b50e2e90aebdb30a86bfaca6a9f640&consumer_secret=cs_e38d37febd6bedb12c0a119d8986c09a1dfb2b5c`; 
    }


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
          setItems(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );

  }, [category]);


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', textAlign: 'center' }}>
          <CircularProgress />
        </Box>
      </Container>
    </>;
  } else {
    return (
      <>
      <Container maxWidth="md">
      <h2>Our Products</h2>
      <Breadcrumbs parent="Home" child="Our Products" />
      <CategoryProduct />
        <Grid container spacing={2}>
          {items.map(item => (
            <Grid item md={4} xs={6} key={item.id}>
              <Link to={`../products/${item.slug}`} style={{ textDecoration: 'none' }}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.images[0].src}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div" sx={{ textDecoration: 'none' }}>
                        {item.name}
                      </Typography>

                      <Typography variant="h6" color="text.secondary">
                        <strong>$ {item.price}</strong>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
        </Container>
      </>
    );
  }


}

export default ProductCategory;