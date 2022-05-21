import React, { Component } from "react";

class RenderWithLoop extends Component {
  productList = [
    {
      id: 1,
      name: "Black car",
      price: 1000,
      img: "./carbasic/products/black-car.jpg",
    },
    {
      id: 2,
      name: "Red car",
      price: 2000,
      img: "./carbasic/products/red-car.jpg",
    },
    {
      id: 3,
      name: "Silver car",
      price: 3000,
      img: "./carbasic/products/silver-car.jpg",
    },
    {
      id: 4,
      name: "Steel car",
      price: 4000,
      img: "./carbasic/products/steel-car.jpg",
    },
  ];
  renderTable = () => {
    return this.productList.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img
              src={product.img}
              style={{ width: "200px" }}
              alt={product.id}
            />{" "}
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>image</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RenderWithLoop;