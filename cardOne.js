import React, { useState, useEffect } from "react";
import { css } from "emotion";
import Form from "./form";
  
  const EnterAmountWidget = (props) =>  {
    return <div> <label class="container1" >10 Trees
    <input type="radio" checked="checked" name="radio"></input>
    <span onClick={() => props.changeTreeNum(10)} class="checkmark"></span>
  </label>
  <label class="container1">20 Trees
    <input type="radio" name="radio"></input>
    <span onClick={() => props.changeTreeNum(20)} class="checkmark"></span>
  </label>
  <label class="container1">50 Trees
    <input type="radio" name="radio" ></input>
    <span onClick={() => props.changeTreeNum(50)} class="checkmark"></span>
  </label></div>
  }
  
  const First_Card = (props) => {
    //const [numTrees1, setNumTrees1] = useState(20);
    const [selectedButton, setSelectedButton] = useState("formOne2");
    const [err, setErr] = useState("");

    
    return <div 
      className={css`
      width: 576px;
      `
      }>
        <div
          className={css`
            display: flex;
            flex-direction: column;
          `}
          >
          <div
            className={css`
              border-radius: calc(.5rem - 1px) calc(.5rem - 1px) 0 0;
              flex-direction: column;
              color: #273654;
              background-color: #e0e0e0;
              padding: 1rem 1.25rem .8rem;
              border-bottom: 1px solid #eee;
              text-transform: uppercase!important;
              text-align: center!important;
              box-sizing: border-box;
              font-size: 1rem;
              font-weight: 600;
            `}
          >JOIN #TEAMTREES. GIFT #TEAMTREES</div>
          <div
            className={css`
              border-radius: calc(.5rem - 1px) calc(.5rem - 1px) 0 0;
              flex-direction: column;
              color: #273654;
              background-color: #f6f6f4;
              padding: 1rem 1.25rem .8rem;
              border-bottom: 1px solid #eee;
              text-transform: uppercase!important;
              text-align: center!important;
              box-sizing: border-box;
              font-size: 1rem;
              font-weight: 600;
            `}
          >$1 plants a tree <br></br> .  .  .</div>
          {/* Hint: You'll be adding props to EnterAmountWidget as you go!*/}
          
          
          <EnterAmountWidget />
          <div
            className={css`
              border-radius: 0 0 calc(.5rem - 1px) calc(.5rem - 1px);
              background-color: #f6f6f4;
              border-top: 1px solid #eee;
              padding: .75rem 1.25rem;
              flex-direction: column;
              font-weight: 400;
              margin-bottom: 0!important;
              text-transform: uppercase!important;
              font-size: 70%;
              text-align: center!important;
              color: #518360;
              
          `}
          >FAQ</div>
           <button onClick={() => props.changeFirstCard(false)} className = "next"
            >Next</button>
        </div>
      </div>
  }

  export default First_Card;
