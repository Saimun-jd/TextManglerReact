import React, {useState} from 'react'               

export default function TextForms(props) {
    const handleClick = (event) => {
        let newText = text.toUpperCase();
        setText(newText);
        props.alertFunc("Here is your capitalized text sire....", "success")
        event.preventDefault();
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
        event.preventDefault();
    }
    const handleCpy2Clip = (event) => {
        navigator.clipboard.writeText(text);
        props.alertFunc("text copied to clipboard.", "success")
        event.preventDefault();

    }
    const removeExtraSpaces = (event) => {
        let newTxt = text.split(/[ ]+/);
        setText(newTxt.join(" "));
        props.alertFunc("extra spaces removed.", "success")
        event.preventDefault();
    }
    const [text, setText] = useState();
  return (
    <form>
        <div className="mb-3">
            <textarea value={text} className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='light' ? 'white': 'grey'}} id="mytext" placeholder={props.boxtext} rows="8"></textarea>
        </div>
        <button className="btn btn-outline-primary mx-2" onClick={handleClick}>Capitalize</button>
        <button className="btn btn-outline-primary mx-2" onClick={handleCpy2Clip}>Copy to clipboard</button>
        <button className="btn btn-outline-primary" onClick={removeExtraSpaces}>Remove spaces</button>

    </form>
  )
}

