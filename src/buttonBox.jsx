import { useState } from "react";
import './index.css';

function Button (){
    const [input, setInput] = useState("");

    const handleClick = (value)=>{
        setInput(input + value);

    };
     const backspace = ()=>{
        setInput(input.slice(0,-1));
     }

    const clear = ()=>{
        setInput("");
    };

    const calculate = ()=>{
          try{
            setInput(eval(input).toString());

          }
          catch(err){
            setInput("error");
          }
    };
    return(
        <div className="calc">
            <div className="display">
                {input || "0"}
            </div>
            <div className="button">
                <button className="btns"
                 onClick={clear}>C</button>

                 <button onClick={backspace}> &#9003;</button>

                 <button className="btn"
                 onClick={()=>{
                     handleClick("/")
                 }}>/ </button>

                  
                     
                <button className="btn"
                onClick={()=>{
                     handleClick("/100")
                 }}>%  </button> 

                  
                <button 
                onClick={()=>{
                     handleClick("7")
                 }}>7 
                </button>
                <button 
                onClick={()=>{
                     handleClick("8")
                 }}>8 
                </button>
                <button 
                onClick={()=>{
                     handleClick("9 ")
                 }}>9
                </button>

                 <button className="btn"
                   onClick={()=>{
                     handleClick("-")
                 }}> - </button>
                


                <button 
                onClick={()=>{
                     handleClick("4")
                 }}>4 
                </button>

                <button 
                onClick={()=>{
                     handleClick("5")
                 }}> 5 
                </button>

                <button 
                onClick={()=>{
                     handleClick("6")
                 }}> 6 
                </button>
                 
                <button className="btn"
                onClick={()=>{
                     handleClick("+")
                 }}>+ 
                </button>
                  
                
                
                <button 
                onClick={()=>{
                     handleClick("1")
                 }}> 1
                </button>

                <button 
                onClick={()=>{
                     handleClick("2")
                 }}> 2 
                </button>

                <button 
                onClick={()=>{
                     handleClick("3")
                 }}> 3 
                </button>

                <button className="btn"
                  onClick={()=>{
                     handleClick("*")}}> x </button>


               
               <button 
                onClick={()=>{
                     handleClick("0")
                 }}> 0
                </button>
                
                 <button className="btn"
                onClick={()=>{
                     handleClick(".")
                 }}> . 
                </button>

                  <button className="btn eql"
                onClick={calculate}> =
                </button>

            </div>

        </div>
    )
  

}

export default Button;