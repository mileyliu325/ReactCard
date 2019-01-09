import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.css";
import Card from "./Card";

const title = ["Seer", "Witch", "Villager"];
const subtitle = [
  "Could know character's role",
  "could save one and poision one ",
  "Could vote"
];
const image = [
  "http://ww4.sinaimg.cn/large/006tT5Uqjw1f4xtwynftlj3066066mxp.jpg",
  "http://ww3.sinaimg.cn/large/006tT5Uqjw1f4xtx8e15aj3066066js3.jpg",
  "http://ww1.sinaimg.cn/large/006tT5Uqjw1f4xtw9lzwqj306a06a0tb.jpg"
];

class App extends Component {
  render() {
    return (
      <div>
        <h1 class="text-center align-self-center"> Wolfware Card</h1>
        <br />
        <div class="row container-fluid">
          <div class="col-sm-4 col-md-4 col-lg-4 text-center align-self-center">
            <Card img={image[0]} title={title[0]} subtitle={subtitle[0]} />
          </div>

          <div class="col-sm-4 col-md-4 col-lg-4 text-center align-self-center">
            <Card img={image[1]} title={title[1]} subtitle={subtitle[1]} />
          </div>

          <div class="col-sm-4 col-md-4 col-lg-4 text-center align-self-center">
            <Card img={image[2]} title={title[2]} subtitle={subtitle[2]} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
