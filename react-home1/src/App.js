import { useState } from "react"
import { Form } from "./components/classes/Form"
import { Form as FormFunc } from "./components/func/Form"
import { Message } from "./components/func/Message"

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
        <hr/>
        <Message titleOther='Message From Home'/>
        
        
            </>
       
      
        
    )
}
// export default App