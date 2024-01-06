import { Outlet, Link } from "react-router-dom";
import './App.css'

const layout = () => {
  return (
    <>
      <nav className="nav">
        <h1>Pet Care</h1>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/market">Market</Link>
          </li>
          <li>
            <Link to="/Blogs">Purchases</Link>
          </li>
          <li>
            <Link to="/Protection">Protection</Link>
          </li>
          <li>
            <Link to="/Donate">Donate</Link>
          </li>
          <li>
            <Link to="/Pets">Pets</Link>
          </li>
          <li>
            <Link to="/PetCare">PetCare</Link>
          </li>
          <li>
            <Link to="/Contact">ContactUs</Link>
          </li>
        </ul>
      </nav>

    <Outlet/>
    </>
  )
};

export default layout;