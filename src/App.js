import React, { Component } from "react";
import Filter from "./components/Filter";
import Products from "./components/Product";
import Cart from "./components/Cart";
import "./App.css"

export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <div className="content">
            <Filter></Filter>
            <Products></Products>
            <Cart />
        </div>
      </div>
    );
  }
}