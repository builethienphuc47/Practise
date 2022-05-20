import React from 'react';
import ReactDOM from 'react-dom/client';
// import RenderingCodition from './components/RenderingCodition/RenderingCodition';
// import HandleEvent from './HandlEvent/HandleEvent';
// import Header from './components/Demo/Header';
// import BaiTapThucHanhLayout from './components/Demo/BaiTapThucHanhLayout';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StateDemo from './State/StateDemo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BaiTapThucHanhLayout/> */}
    {/* <Header/> */}
    {/* <HandleEvent/> */}
    {/* <RenderingCodition/> */}
    <StateDemo/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
