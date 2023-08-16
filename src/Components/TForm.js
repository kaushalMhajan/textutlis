import React, { useState } from 'react'

export default function TForm(props) {

    const [text,setText] = useState(``)

    //ToUpperCase
    const toupCase = () =>{
        let newt = text.toUpperCase();
        setText(newt)
        props.showAlert("Coverted to UpperCase","success")
    
    }

    //tolowerCase function
    const toloCase = () =>{
        let newt = text.toLowerCase();
        setText(newt)
        props.showAlert("Coverted to LowerCase","success")

    }
    const OnChange = (event) =>{
        setText(event.target.value)
    }

    //clear the text
    const Clears = () =>{
        setText("")
        props.showAlert("Text is cleared","success")

    }

    //removes extra spaces
    const extspaces = () =>{
        let newt = text.split(/[ ]+/)
        let nt = newt.join(" ")
        setText(nt)
        props.showAlert("Extra Spaces has been removed","success")

    }
    
    //copy to clip board

    const copytoclipboard = () =>{
      navigator.clipboard.writeText(text)
      props.showAlert("Copied to Clipboard","success")

    }
    
  return (
    <div className='container' style={{color :props.mode===`light`?`black`:`white` }}>
        <div className='container my-3'>
        <h1 className='mb-4'>TextUtils - word Counter | Character counter | ToUpperCase | ToLowerCase</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={OnChange} id="myBox" rows="4" style={{backgroundColor : props.mode===`dark`?`#0b0051`:`white` && props.mode===`red`?`#721212`:`#0b0051` && props.mode===`light`?`white`:`#0b0051` && props.mode===`green`?`green`:`#0b0051`,color : props.mode===`light`?`black`:`white`}}></textarea>
      </div>
      <button disabled= {text.length===0} type="button"  onClick={toupCase}    onChange={onchange} className={`btn btn-${props.mode===`red`?`danger`:`primary` && props.mode===`green`?`success`:`primary`} mx-2 my-2`}>Convert to UpperCase</button>
      <button disabled= {text.length===0} type="button"  onClick={toloCase}    onChange={onchange} className={`btn btn-${props.mode===`red`?`danger`:`primary` && props.mode===`green`?`success`:`primary`} mx-2 my-2`}>Convert to LowerCase</button>
      <button disabled= {text.length===0} type="button"  onClick={Clears}      onChange={onchange} className={`btn btn-${props.mode===`red`?`danger`:`primary` && props.mode===`green`?`success`:`primary`} mx-2 my-2`}>Clear</button>
      <button disabled= {text.length===0} type="button"  onClick={extspaces}   onChange={onchange} className={`btn btn-${props.mode===`red`?`danger`:`primary` && props.mode===`green`?`success`:`primary`} mx-2 my-2`}>Remove Extra Spaces</button>
      <button disabled= {text.length===0} type="button"  onClick={copytoclipboard}   onChange={onchange} className={`btn btn-${props.mode===`red`?`danger`:`primary` && props.mode===`green`?`success`:`primary`} mx-2 my-2`}>Copy Text</button>
      </div>
      <div className='container'> 
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((elements)=>{return elements.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((elements)=>{return elements.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length===0?`Nothing to preview`:text}</p>
      </div>
    </div>
  )
}
