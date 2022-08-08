import {useState} from "react"

function FormFunctionalComponent(){
    const [fName, setfName] = useState("sahil")
    const [lName, setlName] = useState("khan")
    const [numOne, setNumOne]  =useState(0)
    const [numTwo, setNumTwo]  =useState(0)
    const [btn, setBtn] = useState(0)

function addition(){
    setBtn((+numOne)+(+numTwo))
}

function subtraction(){
    setBtn((numOne)-(numTwo))
}

function multiplication(){
    setBtn((numOne)*(numTwo))
}

function division(){
    setBtn(((numOne)/(numTwo)).toFixed(2))
}
    return(
        <>
        <label>Firstname -</label>
        <input type="text" name="fName" value={fName} onChange={(e)=>{setfName(e.target.value)}}/>
        <label>Lastname -</label>
        <input type="text" name="lName" value={lName} onChange={(e)=>{setlName(e.target.value)}}/><br/><br/>
        <span>My name is {fName} {lName}</span> <br/><br/>
        <p>Number 1</p>
        <input type="number" name="" value={numOne} onChange={(e)=>{setNumOne(e.target.value)}}/><br/><br/>
        <p>Number 2</p>
        <input type="number" name="" value={numTwo} onChange={(e)=>{setNumTwo(e.target.value)}}/><br/><br/>
        <span>{btn}</span> <br/>
        <button onClick={addition}>Add</button>
        <button onClick={subtraction}>Subtract</button>
        <button onClick={multiplication}>Multiply</button> 
        <button onClick={division}>Divide</button>
        <p>Total is - {btn}</p>
        </>
    )
}

export default FormFunctionalComponent;