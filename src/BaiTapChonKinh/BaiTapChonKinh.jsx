import React, { Component } from 'react'
import './BaiTapChonKinh.scss'
export default class BaiTapChonKinh extends Component {
  render() {
    return (
        <div style={{backgroundImage: 'url(./glassesImage/background.jpg)', backgroundSize: '2000px',minHeight:'2000px'}}>
            <div style={{ backgroundColor: "rgba(0, 0, 0, .5)", minHeight: "2000px" }}>
                <h2 style={{backgroundColor: 'rgba(0,0,0,.3)'}} className="text-center text-light p-5">Try Class This Online</h2>
                <div className="container">
                    <div className="row text-center p-5"> 
                        <div className="col-6">
                            <img className='model' style={{width : '250px'}} src="./glassesImage/model.jpg" alt="model" />
                            <img className='glass' style={{width: '140px'}} src="./glassesImage/v1.png" alt="v1" />
                            <div className="decrip">
                                <p>Tên kinh: </p>
                                <p>Mô tả: </p>
                            </div>
                        </div>
                        <div className="col-6">
                            <img style={{width : '250px'}} src="./glassesImage/model.jpg" alt="model" />
                        </div>

                </div>
                   
                </div>
            </div>
        </div>

    )   
  }
}
