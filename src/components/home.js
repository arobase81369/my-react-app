import { Container } from "@mui/material";

const Home = () => {

    const Time = (a) => {
        alert("Alert Clicked "+a);
    }


    return <>
    <Container maxWidth="md">
    <h2 className="title" onClick={() => Time("New Click")}>Home Page Content</h2>
    </Container>
    </>
}

export default Home;