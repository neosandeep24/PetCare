import { Outlet, Link } from "react-router-dom";
import Mapo from "../map";

function Home() {
  return (
    <div className="home">
      <p>Be kind to Trees and animals</p>
      <br />
      <br />
      <h1>Increase your</h1>
      <h1>Happiness using</h1>
      <h1>Pets Accomplice</h1>
      <h3>The Key to Your Happiness - Health , Money, and Family!</h3>

      <img
        src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcREj22c-wMNL5IDmU99v8G7voUl17Yxm0JJqMLqttdPT4DnaB99zqVK7HWiNzjP3aZnzCEf-ikAqb2yiDk"
        width="450"
        height="450"
        alt="Dog Img"
        className="maindog"
      />

      <nav className="more">
        <ul>
          <li>
            <Link to="/Started">Get Started</Link>
          </li>
          <li>
            <Link to="/Learn">Learn More</Link>
          </li>
        </ul>
      </nav>
      <Mapo />
      <Outlet />

      <div className="footer">
        <div className="headf">
          <h3>Pet Mania</h3>
          <h3>News</h3>
          <h3>Events</h3>
          <h3>Connect</h3>
        </div>

        <div className="navi">
          <div className="navi1">
            <p>About</p>
            <p>Contact</p>
            <p>Help</p>
          </div>

          <div className="navi2">
            <p>About</p>
            <p>Contact</p>
            <p>Help</p>
          </div>

          <div className="navi3">
            <p>About</p>
            <p>Contact</p>
            <p>Help</p>
          </div>

          <div className="navi4">
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Youtube</p>
          </div>
        </div>

        <footer className="lowest">
          © 2023 PetMania, Inc. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
export default Home;
