import React, { Component } from "react";
import dataFilms from "../Data/DataFilms.json";
import './BaiTapChonPhim.scss';
export default class BaiTapRenderPhim extends Component {
  renderFirm = () => {
    let contentFilms = dataFilms.map((film, index) => {
      return (
        <div className="col-3" key={index}>
          <div class="card text-white bg-dark" style={{height:'600px'}}>
            <img className="card-img-top" src={film.hinhAnh} alt />
              <div className="card-body" style={{height:'40%'}}>
                <h4 className="card-title">{film.tenPhim}</h4>
                <p className="card-text" >{film.moTa.length>120 ? <p>{film.moTa.substring(0,120)} ...</p> : <p>{film.moTa}</p>}</p>
                <p className="card-date">Date: {film.ngayKhoiChieu}</p>
              </div>
            </div>
          </div>
      );
    });
    return contentFilms;
  };
  render() {
    return (
      <div
        className="container col-12"
        style={{
          backgroundImage: "url(./background/avenger.jpg)", backgroundRepeat: "none",
          minHeight: "2000px",
        }}
      >
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, .5)", minHeight: "2000px" }}
        >
          <nav
            className="navbar navbar-expand-sm navbar-dark bg-dark"
            style={{ backgroundColor: "rgba(255, 255, 255, 1.8)" }}
          >
            <a className="navbar-brand" href="#">
              Start Movie
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Category
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#">
                      Film 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Film 2
                    </a>
                  </div>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
         </nav>
          <div className="container-fluid">
            <div className="row">{this.renderFirm()}</div>
          </div>
        </div>
      </div>
    );
  }
}
