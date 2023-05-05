import "./styles/MenuFooter.scss";
import Logo from "./styles/logo-footer.svg";

function MenuFooter() {
  return (
    <section className="menu-footer">
      <div className="sobre">
        <img src={Logo} alt="Logo Footer" />
        <ul>
          <a href="">Sobre nós</a>
          <a href="">Mural de memórias</a>
          <a href="">Eventos Gudi</a>
          <a href="">Nosso Blog</a>
        </ul>
      </div>
      <div className="contato">
        <p>Contato</p>
        <ul>
          <a href="">Chat Virtual</a>
          <a href="">SAC Online</a>
          <a href="">Ouvidoria</a>
          <a href="">FAQ</a>
        </ul>
      </div>
      <div className="beneficios">
        <p>Benefícios</p>
        <ul>
          <a href="">Conta digital Gudi</a>
          <a href="">Viaje com Milhas</a>
          <a href="">C6 Átomos</a>
          <a href="">ID Jovem</a>
        </ul>
      </div>
      <div className="lugares">
        <p>Lugares</p>
        <ul>
          <a href="">O melhor do Brasil</a>
          <a href="">Cidades frequentes</a>
          <a href="">Pontos turísticos</a>
          <a href="">Restaurantes</a>
        </ul>
      </div>
      <div className="curiosidades">
        <p>Curiosidades</p>
        <ul>
          <a href="">Cultura e tradições</a>
          <a href="">Pratos típicos</a>
          <a href="">Mitos</a>
          <a href="">Carnaval</a>
        </ul>
      </div>
    </section>
  );
}

export default MenuFooter;
