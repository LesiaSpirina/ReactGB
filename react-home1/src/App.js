import { useState } from "react"
import { Form } from "./components/classes/Form"
import { Form as FormFunc } from "./components/func/Form"

export function App() {
    const [toggle,setToggle] = useState(true)
    const [arr, setArr] = useState([{name:'one'}, {name:'two'}, {name:'three'}, {name:'four'}])
    return (
        <>
        <Form />
        <hr/>
        <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide' : 'Show'}</button>
        {toggle && <FormFunc title='Function Component++++++'/>}
        <ul>
            {arr.map((el) => (
                <li>{el.name}</li>
            ))}
        </ul>
        
        
            </>
       
      
        
    )
}
// export default App