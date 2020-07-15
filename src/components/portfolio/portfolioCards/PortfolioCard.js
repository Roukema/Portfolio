import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = (props) => {
  let style = {
    backgroundImage: `url(${props.backgroundImage})`,
    "background-size": `${props.backgroundsize}`,
  };

  return (
    <div className="CardContainer" ontouchstart="touchFunctie">
      <div className="FlipCard">
        <div className="PortfolioCard" id={props.title} style={style}>
          <div className="CardText">
            <h3> {props.title} </h3>
          </div>
        </div>
        <div className="CardBack">
          <p> {props.description} </p>
          <div className="buttonWrap">
            {props.githubLink && (
              <a href={props.githubLink} target="_blank">
                <div className="linkButton">Code</div>
              </a>
            )}
            {props.netlifyLink && (
              <a href={props.netlifyLink} target="_blank">
                <div className="linkButton">Result</div>
              </a>
            )}
          </div>
        </div>
      </div>
      <script>
        function touchFunctie()
        {
          ((document.getElementsByClassName("PortfolioCard").style.transform =
            "rotateY(180deg)"),
          (document.getElementsByClassName("CardBack").style.transform =
            "rotateY(0deg)"))
        }
      </script>
    </div>
  );
};

export default PortfolioCard;
