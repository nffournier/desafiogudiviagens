import "./styles/Gallery.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

import RioJaneiro from "./images/image-rj.png";
import RioOstras from "./images/image-rio-das-ostras.png";
import CaldasNovas from "./images/image-caldas-novas.png";
import Amazonia from "./images/image-amazonia.png";

function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      <div className="container">
        <Slider {...settings}>
          <div className="box">
            <img
              src={RioJaneiro}
              alt="Imagem Rio de Janeiro"
              className="image1"
            />
            <a href="#">Rio de Janeiro</a>
          </div>
          <div className="box">
            <img
              src={RioOstras}
              alt="Imagem Rio das Ostras"
              className="image2"
            />
            <a href="#">Rio das Ostras</a>
          </div>
          <div className="box">
            <img
              src={CaldasNovas}
              alt="Imagem Caldas Novas"
              className="image3"
            />
            <a href="#">Caldas Novas</a>
          </div>
          <div className="box">
            <img src={Amazonia} alt="Imagem Amazonia" />
            <a href="#">Amazonia</a>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Gallery;
