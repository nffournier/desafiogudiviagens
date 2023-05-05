import "./styles/GradeArea.scss";

function GradeArea() {
  return (
    <>
      <section className="containerGrade">
        <div className="imageFirst"></div>
        <div className="gradientGrade">
          <div className="textGrade">
            <div className="subtitleGrade">
              <hr />
              <p> VIAGENS NACIONAIS</p>
            </div>
            <h2>O clima perfeito, no lugar perfeito</h2>
            <p>
              Planeje sua viagem com a sua paquera, compartilhar momentos
              preciosos juntos não tem preço.
            </p>
            <button className="buttomAgendar">Agendar</button>
          </div>
        </div>

        <div className="imageSecond"></div>
        <div className="whiteGrade">
          <div className="textGrade">
            <div className="subtitleGrade">
              <hr />
              <p> VIAGENS NACIONAIS</p>
            </div>
            <h2>Curta uma nova vibe entre amigos</h2>
            <p>
              Rachando a conta ou rachando o bico, a melhor hora pra curtir é
              entre amigos. Conheça nossos Planos Multi.
            </p>
            <button className="buttomAgendar">Agendar</button>
          </div>
        </div>
        <div className="imageThird"></div>
        <div id="gradientBlue">
          <div className="textGrade">
            <div className="subtitleGrade">
              <hr />
              <p> VIAGENS NACIONAIS</p>
            </div>
            <h2>Algumas experiências são inexplicáveis</h2>
            <p>
              Conheça as fontes termais de Caldas Novas, Goiás. Águas quentes,
              num clima sereno, relaxante e natural.
            </p>
            <button className="buttomAgendar">Agendar</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default GradeArea;
