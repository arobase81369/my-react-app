import { useState } from "react";

const Count = () => {

    const [count, setCount] = useState(0);


    const incrementCount = () => {
        
        if(count >= 10) {
          setCount((count) => 0 );
        }
        setCount((count) => count + 1);
    }

    return <>
    <h2>My Count {count}</h2>
    <button onClick={incrementCount}>Plus</button>
    </>
}

export default Count;