import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./layout"
import Home from './pages/Home'
import Blogs from './pages/blogs'
import Donate from './pages/donate'
import Pets from './pages/pets'
import Details from './pages/Contactus'
import Pethelper from './pages/Pethelper'
import Market from './pages/market'
import Protection from './pages/Protection'

function App() {


  return (
    <div className="App">

      <div className="backgg">
       <BrowserRouter>
          <Link to="/">
          </Link>
          <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Blogs" element={<Blogs/>}/>
          <Route path="Protection" element={<Protection/>}/>
          <Route path="Donate" element={<Donate/>}/>
		      <Route path="Pets" element={<Pets/>}/>
         <Route path="Contact" element={<Details/>}/>
         <Route path="petCare" element={<Pethelper/>}/>
         <Route path="Market" element={<Market/>}/>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>

  
    </div>
  );
}

export default App;
