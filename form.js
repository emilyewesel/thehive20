import React, { useState } from "react";
import First_Card from "./cardOne";
import Second_Card from "./cardTwo";



const Form = (props) => {

  const [isFirstCard, setIsFirstCard] = useState(true);
  const [numTrees, setNumTrees] = useState(null);
  const [name, setName] = useState(null);
  const [displayMessage, setDisplayMessage] = useState(null);

  var values = ["0", "0", "0"];
  
  const changeTreeNum = (treeNum) => {
    setNumTrees(treeNum);

  }
  const changeFirstCard = (firstCardMaybe) => {
    setIsFirstCard(firstCardMaybe);
    if (numTrees == null){
      setNumTrees(10);
    }
    //setNumTrees(numTreeee);
    
    //isFirstCard = false;


  }

  const changeSecondCard = (secondCardMaybe, reallyHappening, nameee, mesage) => {
    
    setIsFirstCard(secondCardMaybe);
    if(reallyHappening){
      setName(nameee);
      setDisplayMessage(mesage);
      values[0]= "emily";
      values[1] = numTrees;
      values[2] = displayMessage;
      props.addDonation(values);
    }
  }
  
  //TODO: Your form implementation
  
  if(isFirstCard){
    return <First_Card changeFirstCard={changeFirstCard} changeTreeNum={changeTreeNum}/>;
  }
  return <Second_Card changeSecondCard = {changeSecondCard} />;
  

 }

export default Form;
   