import React, { useState } from 'react'

export default function Textform(props) {

  const handleUpClick = () => {
    console.log('upper case was clicked' + text)
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert('change to Capital Letter' , 'success')
  }

  const handleDowmClick = () => {
    let newText = text.toLocaleLowerCase()
    setText(newText)
    props.showAlert('change to Small','success')
  }

  const handleClear = () => {
    let newText = ''
    setText(newText)
     props.showAlert('clear text' , 'success')
  }

  const handleCopy = () => {

    navigator.clipboard.writeText(text);
    props.showAlert('Text copy to clipboard !' , 'success')
    

  }

  const handleClearExtraGap = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert('Remove Extra Gap', 'success')
    
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const [text, setText] = useState('')

  return (
    <>
      <div className='container'>

        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control" style={{ backgroundColor: props.mode == 'light' ? 'white' : '#00006c', color: props.mode == 'light' ? 'black' : 'white' }} value={text} onChange={handleOnChange} id="myBox" rows="8" defaultValue={""}>
          </textarea>
        </div>
        <div className="d-flex  flex-wrap ">
          <button disabled={text.length===0} className=" btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>

          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDowmClick}>Convert To LowerCase</button>

          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>

          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearExtraGap}>Remove Extra Gap</button>

          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>

        </div>
      </div>

      <div className="container my-4">
        <h2>your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(' ').filter((element)=>{return element.length!=0}).length} Minuts Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : 'Enter Something in the textBox above to preview it'}
        </p>
      </div>
    </>
  )
}
