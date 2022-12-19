import RecipeReviewCard from "./metrialui/card";
import { Container } from "@mui/system";
import Breadcrumbs from "./metrialui/breadcrumbs";
import CategoryProduct from "./categoryproduct";




const About = () => {
    return <>
     <Container maxWidth="md">
      <h2>About us</h2>
      <Breadcrumbs parent="Home" child="About" />
     </Container>
    </>
}



export default About;