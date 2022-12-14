import { useState } from "react"


const Todos = () => {
    
    const [list, setList] = useState(["new1", "new2"]);

    const setincrement = () => {
         setList((list) => [...list, "New"]);
    }

    return <>
    {list.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={setincrement}>Add Todos List</button>
    </>

}

export default Todos;