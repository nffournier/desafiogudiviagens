import Logo from "../../assets/Logo.png";
import "./styles/MenuNav.scss";
function NavBar() {
  return (
    <nav className="menuNav">
      <div className="Container">
        <img src={Logo} alt="Logo Gudi" />
        <div className="Links">
          <a href="">Sobre</a>
          <a href="">Benefícios</a>
          <a href="">Contato</a>
        </div>
        <button type="submit">Agendar</button>
      </div>
    </nav>
  );
}
export default NavBar;
