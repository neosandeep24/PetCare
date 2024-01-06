import React from 'react';
import './home.css'; 

function Home() {
  return (
    <div className="home-container">
      <header className="matter">
        {/* <p className="tagline">Be kind to Trees and animals</p> */}
        <h1>Increase your</h1>
        <h1>Happiness using a</h1>
        <h1>Pet Accomplice</h1>
        <h3>All you need is a FRIEND</h3>
      </header>

        <img
          src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcREj22c-wMNL5IDmU99v8G7voUl17Yxm0JJqMLqttdPT4DnaB99zqVK7HWiNzjP3aZnzCEf-ikAqb2yiDk"
          width="450"
          height="450"
          alt="Dog Img"
          className="maindog"
        />
      
      

      <footer className="footer">
        {/* <div className="headf">
          <h3>Pet Mania</h3>
          <h3>News</h3>
          <h3>Events</h3>
          <h3>Connect</h3>
        </div> */}
   
        <div className="navi">
          <div className="navi-column">
            <p>About</p>
            <p>Contact</p>
            <p>Help</p>
          </div>

          <div className="navi-column">
            <p>Events</p>
            <p>Charity</p>
            <p>Funds</p>
          </div>

          <div className="navi-column">
            <p>Celebrations</p>
            <p>volunteer</p>
            <p>Join us</p>
          </div>

          <div className="navi-column">
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Youtube</p>
          </div>
        </div>

        <div className="lowest">© 2023 Petneo, Inc. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default Home;
