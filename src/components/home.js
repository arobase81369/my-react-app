import Car from "./guide/car";

const Home = () => {

    const Time = (a) => {
        alert("Alert Clicked "+a);
    }


    return <>
    <Car />
    <h2 className="title" onClick={() => Time("New Click")}>Home Page Content</h2>
    </>
}

export default Home;