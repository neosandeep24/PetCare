import '../App.css';

function Collage() {
  return (
    <div className="gallery">
      <div className="gallery__column">
        <a className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg"
              alt=""
              className="gallery__image"
            />
          </figure>
        </a>

        <a className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-cat-sitting-on-sofa-at-home-royalty-free-image-1574708553.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*"
              alt=""
              className="gallery__image"
            />
          </figure>
        </a>
      </div>

      <div className="gallery__column">
        <a className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src="https://www.thesprucepets.com/thmb/MJyQhM528MJizLJFFlKqqlI68H0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/exotic-pets-for-apartment-living-1238589-hero-6bd87a75363e4da4b38f6c244644b1db.jpg"
              alt=""
              className="gallery__image"
            />
          </figure>
        </a>

        <a className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src="https://i.pinimg.com/originals/b2/f3/a8/b2f3a893435f74436e3bd8f1733a7d76.jpg"
              alt="Portrait by Ethan Haddox"
              className="gallery__image"
            />
          </figure>
        </a>
      </div>

      <div className="gallery__column">
        <a className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src="https://fish.splashyfin.com/wp-content/uploads/2022/10/Ryukin-gold-fish-300x300.jpeg"
              alt="Portrait by Jasmin Chew"
              className="gallery__image"
            />
          </figure>
        </a>

        <a className="gallery__link">
          <figure className="gallery__thumb">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGjBa24T44eOrj3Q0MAAxP14VZvKpgWtDeKw&usqp=CAU"
              alt="Portrait by Dima DallAcqua"
              className="gallery__image"
            />
          </figure>
        </a>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <div>
      <h1 className="headb">Previous Purchases</h1>
      <Collage />
    </div>
  );
}

export default Blog;
