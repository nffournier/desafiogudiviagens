import Image1 from "./images/mural-images/image-grade-1.png";
import Image2 from "./images/mural-images/image-grade-2.png";
import Image3 from "./images/mural-images/image-grade-3.png";
import Image4 from "./images/mural-images/image-grade-4.png";
import Image5 from "./images/mural-images/image-grade-5.png";
import Image6 from "./images/mural-images/image-grade-6.png";

import Cidades from "./images/icons/cidades.svg";
import Brasil from "./images/icons/brasil.svg";
import PontosTur from "./images/icons/pontos.svg";
import Restaurante from "./images/icons/restaurant.svg";

import "./styles/GradeGallery.scss";

function GradeGallery() {
  return (
    <>
      <section className="wrapper-mural">
        <div className="title-mural">
          <p>use a hashtag #brasilisverigudi</p>
          <h2>Nosso mural de Experiências</h2>
        </div>
        <div className="images-mural">
          <img src={Image1} alt="" />
          <img src={Image2} alt="" />
          <img src={Image3} alt="" />
          <img src={Image4} alt="" />
          <img src={Image5} alt="" />
          <img src={Image6} alt="" />
        </div>
        <section className="frames-icones">
          <div className="box-gray">
            <img src={Brasil} alt="Icone Brasil" />
            <p>O melhor do Brasil</p>
          </div>
          <div className="box-blue">
            <img src={Cidades} alt="Icone Cidades" />
            <p>Cidades mais frequentadas</p>
          </div>
          <div className="box-gray">
            <img src={PontosTur} alt="Icones Pontos Turisticos" />
            <p>Pontos turísticos</p>
          </div>
          <div className="box-blue">
            <img src={Restaurante} alt="Icone Restaurante" />
            <p>Restaurantes</p>
          </div>
        </section>
      </section>
    </>
  );
}

export default GradeGallery;
