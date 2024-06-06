// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// // import Predictor from './Components/Predictor';
// import Navbar from './Components/Navbar.jsx'
// import Data from './Components/Data';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Navbar/>
//     <Data/>
//     <App />
//     {/* <Predictor/> */}
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// CODE 2
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar.jsx';
import Data from './Components/Data';
import WaterTracker from './Components/WaterTrack.jsx';
import Footer from './Components/Footer.jsx'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Components/Home.jsx';
import AboutMe from './Components/AboutMe.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar className="navbar" />
    <Home id="home"/>
    <div className="main-content">
      <div className="left-section">
        <Data id="meal-track"/>
      </div>
      <div className="right-section cards shadows">
        <WaterTracker id="water"/>
        <hr></hr>
        <App />
        
      </div>
    </div>
    <AboutMe/>
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
