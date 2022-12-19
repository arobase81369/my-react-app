import { useState, useEffect, useContext } from "react";
import { Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import { Container } from "@mui/system";
import { Box } from "@mui/system";
import CircularProgress from '@mui/material/CircularProgress';
import { Outlet, Link} from "react-router-dom";

const CategoryProduct = () => {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [category, setCategory] = useState(0);
    const [categoryitems, setCategoryitems] = useState(0);

    useEffect(() => {

        let url = `https://arobasedesigns.in/ecommerce/wp-json/wc/v3/products/categories?consumer_key=ck_41b1857032b50e2e90aebdb30a86bfaca6a9f640&consumer_secret=cs_e38d37febd6bedb12c0a119d8986c09a1dfb2b5c`;
        
        console.log(category);
    
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
        
              fetch(url, requestOptions)
              .then(res => res.json())
              .then(
                (result) => {
                  setIsLoaded(true);
                  setCategoryitems(result);
                  console.log(categoryitems);
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


    
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <>
    <span>{}</span>
    <Container maxWidth="md">
    <Box sx={{ display: 'flex', textAlign: 'center' }}>
      <CircularProgress />
    </Box>
</Container>
    </>;
  } else {
    return (
        <>
          <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '20px',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
      {categoryitems.map(item => (
          <Link to={`../product-category/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>{item.name}</Link>
      ))}
      </ButtonGroup>
    </Box>
    </>
    );
  }


}

export default CategoryProduct;