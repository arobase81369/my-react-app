import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import CircularProgress from '@mui/material/CircularProgress';
import { useContext } from "react";
import { CounterContext } from "./guide/counterContext";



const Productlist = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const category = useContext(CounterContext);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {

    let url = `https://arobasedesigns.in/ecommerce/wp-json/wc/v3/products?consumer_key=ck_41b1857032b50e2e90aebdb30a86bfaca6a9f640&consumer_secret=cs_e38d37febd6bedb12c0a119d8986c09a1dfb2b5c`;

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
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
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
        <Grid container spacing={2}>
          {items.map(item => (
            <Grid item md={4} xs={6} key={item.id}>
              <Link to={item.slug} style={{ textDecoration: 'none' }}>
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
      </>
    );
  }


}

export default Productlist;