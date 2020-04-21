import React, { Component } from "react";
import ReactDOM from "react-dom";

// This is one way to write CSS 
// Read more about it here:
//https://emotion.sh/docs/introduction
// For this assignment we recommend using emotion. 
// The header div below has been styled using the canonical emotion syntax
// Feel free to copy and reuse in all your components.
import { css } from "emotion";

//Here is all the image files that you need
import title_img from "./images/logo-teamtrees-full-alt.svg";
import astronaut from "./images/astronaut-sign.svg";
import spaceship from "./images/spaceship.svg";
import underline from "./images/counter-underline-light.svg";
//const element = <h1>WOOt</h1>;
//ReactDOM.render(element, document.getElementById('root'));

class Header extends Component {
  state = {
    imageUrl: 'https://piscum.photos/200'
    
  };




  render() {
    return (
      <div>
        {/* <div
          className={css`
              font-weight: 600;
              color: #273654;
              background-color: #f6f6f4;
              padding: 1.5rem;
            `}

      > Header</div> */}





<div id="banner">
        <div class="inline-block">
          <img src = {spaceship} width="50" height="60"></img> 
        </div>

        <div class="inline-block">
          <img src = {title_img} width = "800" height = "120"></img>
        </div>

        <div class="inline-block">
          <img src = {astronaut} className = "astronaut"></img>
        </div>

      </div>
            <p
        className={css`
        font-weight: 600;
        color: #f6f6f4;
        `}
      
      >We did it! But that doesn't mean we're done. <br />
       Come back any time you feel like planting a tree!</p>
       
  

       <p
        className="number"

        >21,803,427</p>

       <p
        className={css`
        font-weight: 600;
        color: #f6f6f4;
        `}

        >TREES PLANTED</p>
      
      <img src = {underline} width = "400"></img> <br />

      <button
        className={css`
        font-weight: 600;
        color: #f6f6f4;
        background-color: #273654;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        border-radius: 16px;
        `}
      >Planting Projects</button>


      

    </div>
      

    );

  }

}

export default Header;
