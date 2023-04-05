import { useState } from "react";
import "../styles/Panel.css";
import PatternDividerImageDesktop from "../assets/pattern-divider-desktop.svg";
import PatternDividerImageMobile from "../assets/pattern-divider-mobile.svg";
import DiceImage from "../assets/icon-dice.svg";
import axios from "axios";

const Panel = () => {
   const [advice, setAdvice] = useState([]);

   const getAdvice = () => {
      const apiURL = "https://api.adviceslip.com/advice";
      axios
         .get(`${apiURL}?timestamp=${new Date().getTime()}`)
         .then((response) => {
            setAdvice(response.data.slip);
         });
   };

   window.onload = () => {
      getAdvice();
   };

   return (
      <div>
         <div className="panel">
            <h4>Advice #{advice.id}</h4>
            <h2 key={advice.id}>“{advice.advice}”</h2>
            <img
               className="desktop"
               src={PatternDividerImageDesktop}
               alt="Pattern Divider Image"
            />
            <img
               className="mobile"
               src={PatternDividerImageMobile}
               alt="Pattern Divider Image"
            />
         </div>
         <div className="dice-positioning">
            <div onClick={getAdvice} className="dice">
               <img src={DiceImage} alt="Dice Image" />
            </div>
         </div>
      </div>
   );
};

export default Panel;
