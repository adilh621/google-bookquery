import React from "react";
import "./style.css"

function Card({ icon, title, children }) {
  return (
    <div className="card mt-4" style={{backgroundColor:"#5F4B8BFF"}}>
      <div className="card-header">
        <h3>
          <strong style={{color:"#E69A8DFF"}}>
            <i style={{color:"#E69A8DFF"}}className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div style={{color:"#E69A8DFF"}} className="card-body">{children}</div>
    </div>
  );
}

export default Card;
