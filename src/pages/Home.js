import React, { useEffect } from 'react';
import './home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="home-container">
      <header className="matter" data-aos="fade-up">
        <h1 className="headh1">Boost Happiness</h1>
        <h1 className="headh1">with a Pet Companion</h1>
        <h3 className="headh3">All you need is a FRIEND</h3>
      </header>

      <img
        src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcREj22c-wMNL5IDmU99v8G7voUl17Yxm0JJqMLqttdPT4DnaB99zqVK7HWiNzjP3aZnzCEf-ikAqb2yiDk"
        alt="Dog Img"
        className="maindog"
        data-aos="fade-up"
      />

      <div className="bento-container" data-aos="fade-up">
        <h2 className="section-title">Our Features</h2>
        <div className="bento-box">
          <div className="bento-item" style={{ backgroundImage: 'url(https://www.animalmedicalcenterav.com/uploads/1/3/0/7/130711658/animalmedicalcenteroftheantelopevalley-112039-full-service-vet-blogbanner1_orig.jpg)' }}>Veterinary Services</div>
          <div className="bento-item" style={{ backgroundImage: 'url(https://dm6g3jbka53hp.cloudfront.net/static-images/adopt-me-pet-02032021.jpg)' }}>Adoption Services</div>
          <div className="bento-item" style={{ backgroundImage: 'url(https://thevillageanimalclinic.com/wp-content/uploads/2023/07/Diagnostics-Image.jpg)' }}>Diagnostic Services</div>
          <div className="bento-item" style={{ backgroundImage: 'url(https://m.media-amazon.com/images/I/81EcWEdRBkL._SX522_.jpg)' }}>Pet Products</div>
        </div>
      </div>

      <div className="services-container" data-aos="fade-up" style={{ backgroundImage: 'url(https://therunexperience.com/blog/content/images/size/w2000/wordpress/2020/07/Featured-Image-4.png)' }}>
        <h1 className="servicessectiontitle">Our Services</h1>
        <div className="services">
          <div className="service-item">Training</div>
          <div className="service-item">Exercise</div>
          <div className="service-item">Checkups</div>
          <div className="service-item">Vaccination and Treatment</div>
        </div>
      </div>

      <footer className="footer">
        <div className="navi">
          <div className="navi-column"><p>About Us</p></div>
          <div className="navi-column"><p>Contact</p></div>
          <div className="navi-column"><p>Privacy Policy</p></div>
          <div className="navi-column"><p>Terms of Service</p></div>
        </div>
        <div className="lowest">© 2023 Petneo, Inc. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default Home;
