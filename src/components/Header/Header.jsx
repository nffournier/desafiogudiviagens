import "./styles/Header.scss";

function Header() {
  return (
    <section className="container-header">
      <h1>Para qual estado você deseja ir?</h1>
      <select id="state">
        <option value="">Pesquisar Estado</option>
      </select>
      <button type="submit">Buscar</button>
    </section>
  );
}

export default Header;
