import React ,{useState} from "react";
// hooks & state & event handling in react

export default function Form(props) {
    const[text, setText] = useState('This is an example text, try on it.'); //its nessasery to use state - text have 'enter here' - cant't change directily so we use 
    const handeleOnChange = (event)=>{
        //console.log('OnChange');
        setText(event.target.value); //event handling - (event.target.value) allows to input in textarea
    }
    const handleUpClick = ()=>{
        let upText = text.toUpperCase();
        setText(upText);
    }
    const handleLoClick = ()=>{
        let loText = text.toLowerCase();
        setText(loText);
    }
    const handleCfClick = ()=>{
        let words = text.split(" ")
        let x = ''
         words.forEach(element => {
           x += element.charAt(0).toUpperCase() + element.slice(1) + " "
         });
        setText(x)
    }
    const handleClearClick = ()=>{
        let xText = "";
        setText(xText);
    }
    const handleCopyClick = ()=>{
        let text = document.getElementById('exampleFormControlTextarea1')
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert('Your Content copied to clipbord', 'success');
    }
    const handleEsClick = ()=>{
        setText(text.replace(/\s+/g,' ').trim())
    }
  return (
    <div className="mb-3 container my-5">
        <h2>{props.heading}</h2>
        <textarea className={`form-control text-${props.mode==='light'?'dark':'light'}`} style={{backgroundColor : props.mode==='light'?'#f1f1f1':'grey'}} id="exampleFormControlTextarea1" rows="6" value={text} onChange={handeleOnChange}></textarea>
        <br/>
        <button className="btn btn-danger mx-1 mb-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-success mx-1 mb-2" onClick={handleCopyClick}>Copy</button>
        <button className="btn btn-primary mx-1 mb-2" onClick={handleUpClick}>UpperCase</button>
        <button className="btn btn-primary mx-1 mb-2" onClick={handleLoClick}>LowerCase</button>
        <button className="btn btn-primary mx-1 mb-2" onClick={handleCfClick}>Justified</button>
        <button className="btn btn-primary mx-1 mb-2" onClick={handleEsClick}>RemoveExtraSpace</button>
        <hr/>
        <div className="container my-3 text-center">
            <h3>Your Text Summary</h3>
            <p>{text.length>0 ? text.split(" ").length : '0'} Words and {text.length} characters</p>
            <p>It takes approx {text.length>0 ? 0.008* text.split(" ").length : '0'} Minutes to read</p>
            <p><b>Note : </b>Justified converts first letter of each words into Capital letters</p>
        </div>
    </div>
  );
}

Form.defaultProps = {
    wordl : '0',
    charl : '0',
    heading : 'Heading'
};