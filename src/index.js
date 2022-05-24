import React from 'react';
import ReactDOM from 'react-dom/client';
import BaiTapRenderPhim from './BaiTapRenderPhim/BaiTapChonPhim';
// import BaiTapChonXe from './BaiTapChonXe/BaiTapChonXe';
// import RenderingCodition from './components/RenderingCodition/RenderingCodition';
// import HandleEvent from './HandlEvent/HandleEvent';
// import Header from './components/Demo/Header';
// import BaiTapThucHanhLayout from './components/Demo/BaiTapThucHanhLayout';
import './index.css';
// import RenderWithLoop from './RenderWithLoop/RenderWithLoop';
import reportWebVitals from './reportWebVitals';
// import Styling from './Styling/Styling';
// import StateDemo from './State/StateDemo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BaiTapThucHanhLayout/> */}
    {/* <Header/> */}
    {/* <HandleEvent/> */}
    {/* <RenderingCodition/> */}
    {/* <StateDemo/> */}
    {/* <Styling/> */}
    {/* <BaiTapChonXe/> */}
    {/* <RenderWithLoop/> */}
    <BaiTapRenderPhim/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
