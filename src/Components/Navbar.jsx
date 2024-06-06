import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const setupNavbarAnimation = () => {
      var tabsNewAnim = document.getElementById('navbarSupportedContent');
      var activeItemNewAnim = tabsNewAnim.querySelector('.active');
      var activeWidthNewAnimHeight = activeItemNewAnim.clientHeight;
      var activeWidthNewAnimWidth = activeItemNewAnim.clientWidth;
      var itemPosNewAnimTop = activeItemNewAnim.offsetTop;
      var itemPosNewAnimLeft = activeItemNewAnim.offsetLeft;

      var horiSelector = document.querySelector('.hori-selector');
      horiSelector.style.top = itemPosNewAnimTop + "px";
      horiSelector.style.left = itemPosNewAnimLeft + "px";
      horiSelector.style.height = activeWidthNewAnimHeight + "px";
      horiSelector.style.width = activeWidthNewAnimWidth + "px";

      tabsNewAnim.addEventListener("click", function (e) {
        var target = e.target.closest("li");
        if (!target) return;
        var activeWidthNewAnimHeight = target.clientHeight;
        var activeWidthNewAnimWidth = target.clientWidth;
        var itemPosNewAnimTop = target.offsetTop;
        var itemPosNewAnimLeft = target.offsetLeft;

        document.querySelectorAll('#navbarSupportedContent ul li').forEach(li => {
          li.classList.remove("active");
        });
        target.classList.add('active');

        horiSelector.style.top = itemPosNewAnimTop + "px";
        horiSelector.style.left = itemPosNewAnimLeft + "px";
        horiSelector.style.height = activeWidthNewAnimHeight + "px";
        horiSelector.style.width = activeWidthNewAnimWidth + "px";
      });
    };

    setupNavbarAnimation();
    window.addEventListener('resize', setupNavbarAnimation);

    return () => {
      window.removeEventListener('resize', setupNavbarAnimation);
    };
  }, []);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg">
      <a className="navbar-brand navbar-logo mr-auto colorss" href="#">Aahaar Parikalak</a>
      <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className={`collapse navbar-collapse ${isActive ? 'show' : ''}`} id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
          <li className="nav-item active">
            <a className="nav-link" href="#home"><i className="fas fa-home"></i>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#insights"><i className="fas fa-lightbulb"></i>Insights</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#meal-track"><i className="fas fa-utensils"></i>Meal Track</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#history"><i className="fas fa-history"></i>History</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#water"><i className="fas fa-tint"></i>Water Intake</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#body-stats"><i className="fas fa-dumbbell"></i>Body Stats</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
