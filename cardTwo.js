import React, { useState } from "react";
import { css } from "emotion";

const DonationDetails = (props) =>  {

    return <div></div>
  }
  
  
  
  const Second_Card = (props) => {
    const displayNamePlaceHolder = "Display Name";
    const emailPlaceHolder = "Email";
    const messagePlaceHolder = "My #TeamTrees message is..";
    
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
              background-color: #f6f6f4;
              padding: 1rem 1.25rem .8rem;
              border-bottom: 1px solid #eee;
              text-transform: uppercase!important;
              text-align: center!important;
              box-sizing: border-box;
              font-size: 1rem;
              font-weight: 600;
            `}
          >Details</div>
          {/* Hint: You'll be adding props to DonationDetails as you go!*/}
          <DonationDetails />

          <textarea id="name111"
            className={css`
            border-radius: calc(.5rem - 1px) calc(.5rem - 1px) 0 0;
            color: gray;
            height: 40px;
            border: 10px solid #f6f6f4;
            padding: 1rem 1.25rem .8rem;
            
          `}
          >
            {displayNamePlaceHolder}
          </textarea>

          <textarea
            className={css`
            border-radius: calc(.5rem - 1px) calc(.5rem - 1px) 0 0;
            color: gray;
            height: 40px;
            border: 10px solid #f6f6f4;
            padding: 1rem 1.25rem .8rem;
            
          `}
          >
            {emailPlaceHolder}
          </textarea>

          <textarea 
             className={css`
             border-radius: calc(.5rem - 1px) calc(.5rem - 1px) 0 0;
             color: gray;
             height: 40px;
             border: 10px solid #f6f6f4;
             padding: 1rem 1.25rem .8rem;
            
           `}
          //name="comment"
          >
            {messagePlaceHolder}
          </textarea>
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
          
          <div class = "buttons" >
            <button onClick={() => props.changeSecondCard(true, false, displayNamePlaceHolder, messagePlaceHolder)} className={css`
              font-weight: 600;
              color: white;
              background-color: gray;
              padding: 15px 32px;
              text-align: center;
              text-decoration: none;
              font-size: 16px;
              border-radius: 16px;
              width: 150px;
            `}>Previous</button> 

            <button onClick={() => props.changeSecondCard(true, true, displayNamePlaceHolder, messagePlaceHolder)} className={css`
              font-weight: 600;
              color: white;
              background-color: #518360;
              padding: 15px 32px;
              text-align: left;
              text-decoration: none;
              font-size: 16px;
              border-radius: 16px;
              width: 100px;
              numTrees = numTrees+1;
            `}>Submit</button>

          </div>
          
          
        </div>
      </div>
  }

export default Second_Card;