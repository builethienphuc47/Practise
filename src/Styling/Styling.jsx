import React, { Component } from 'react'
import './Styling.css';
import style from './Styling.module.css';
import Child from './Child'

export default class Styling extends Component {
    render() {
        //Lưu ý: viết dưới dạng thuộc tính document.getElmentById('id').style.backgroundColor
        const styleText = {
            color: 'pink',
            padding: '15px',
            backgroundColor: 'black'
        }

        return (
            <div>
                <Child />
                <p className="txt"> hello Phucbull</p>
                <span className={style.txtStyle}>Hello phuc</span>
                <p style={styleText}>hello phuc 123456</p>
                <p style={{
                    color: 'pink',
                    padding: '15px',
                    backgroundColor: 'black'
                }}>hello phuc 123456</p>

            </div>
        )
    }
}