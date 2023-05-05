import "./styles/Form.scss";
function Form() {
  return (
    <section className="form-contacts">
      <div className="container-form">
        <h2>Fale Conosco</h2>
        <input
          type="email"
          id="email"
          placeholder="Diga o seu melhor email:"
          required
        />
        <input type="text" id="assunto" placeholder="Assunto" required />
        <textarea
          name="mensagem"
          cols="15"
          rows="5"
          placeholder="Escreva sua mensagem:"
        ></textarea>
      </div>
    </section>
  );
}

export default Form;
