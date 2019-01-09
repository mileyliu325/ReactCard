import React from "react";
import "./bootstrap.css";

class Card extends React.Component {
  render() {
    return (
      <div class="card">
        <img src={this.props.img} class="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">{this.props.title}</h5>
          <p class="card-text">{this.props.subtitle}</p>
        </div>
      </div>
    );
  }
}

export default Card;
