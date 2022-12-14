import { useState, useEffect } from "react";


const Productlist = () => {

    const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch("https://arobasedesigns.in/ecommerce/wp-json/wc/v3/products?consumer_key=ck_41b1857032b50e2e90aebdb30a86bfaca6a9f640&consumer_secret=cs_e38d37febd6bedb12c0a119d8986c09a1dfb2b5c", requestOptions)
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
      )
  }, [items]);



  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        <>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.slug}  - {item.images[0].src}
          </li>
        ))}
      </ul>
      </>
    );
  }


}

export default Productlist;