import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleDownClick = () => { 
        let newText = text.toLowerCase();
            setText(newText);
        
    }
    const handleSenClick = () => {
        let newText = text.toLowerCase().replace(/(^\s*\w|[|.|!|?]\s*\w)/g, function(c) {
            return c.toUpperCase();
          });
        setText(newText);
    }
    const handleCapClick = () => {
        if (!text.length) {
            return
        }
        let newText = text.split(" ");
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i][0].toUpperCase() + newText[i].slice(1).toLowerCase();
        }
        setText(newText.join(" "));
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleClearClick = () => {
        setText("");
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here")
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>Convert to UPPER CASE</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to lower Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleSenClick}>Convert to Sentence case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCapClick}>Convert to Capitalized Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to read (0.008 for every letter)</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}

