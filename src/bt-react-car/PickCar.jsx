import React, { Component } from "react";
import listCar from "./arrayFeatures.json";
import listWheel from "./wheels.json";

export default class PickCar extends Component {
  state = {
    listCar: listCar[0],
    folder: listCar[0].srcImg,
  };

  handleOnClick = (id = null, isActive, idWheel = null) => {
    if (isActive) {
      const index = listCar.findIndex((item) => item.id === id);
      this.setState({
        listCar: listCar[index],
        folder: listCar[index].srcImg,
      });
    } else {
      const { listCar } = this.state;
      const index = listCar.wheels.findIndex(
        (item) => item.idWheel === idWheel
      );
      this.setState({
        ...this.state,
        folder: listCar.wheels[index].srcImg,
      });
    }
  };
  // Render màu xe
  renderListColor = () => {
    return listCar.map((listCar, index) => {
      return (
        <li
          className="list-group-item px-3"
          style={{
            cursor: "pointer"
          }}
          key={index}
          onClick={() => this.handleOnClick(listCar.id, true)}
        >
          <div className="d-flex align-items-center">
            <div className="col-2">
              <img src={listCar.img} width={50} alt="" />
            </div>
            <div className="col-10 pl-3">
              <h1 style={{ fontSize: "15px" }} className="mb-0">
                {listCar.title}
              </h1>
              <span style={{ fontSize: "15px" }}>{listCar.type}</span>
            </div>
          </div>
        </li>
      );
    });
  };
  // Render Lốp xe
  renderWheelsColor = () => {
    return listWheel.map((item, index) => {
      return (
        <li
          className="list-group-item px-0"
          style={{ cursor: "pointer" }}
          key={index}
          onClick={() => this.handleOnClick(null, false, item.idWheel)}
        >
          <div className="d-flex align-items-center">
            <div className="col-2">
              <img src={item.img} width={50} alt="" />
            </div>
            <div className="col-10 pl-4">
              <h1 style={{ fontSize: "15px", marginBottom: "0" }} >
                {item.title}
              </h1>
            </div>
          </div>
        </li>
      );
    });
  };
  render() {
    const { folder } = this.state;
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-9">
            <img
              src={`./images/${folder}civic-1.jpg`}
              alt=""
              className="w-100"
            />
          </div>
          <div className="col-3">
            <div className="card" style={{ width: "18rem" }}>
                {/* List màu xe */}
              <ul className="list-group list-group-flush">
                {this.renderListColor()}
              </ul>
              <div className="card-footer">Wheels</div>
                {/* List lốp xe */}
              <ul className="list-group list-group-flush">
                {this.renderWheelsColor()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
