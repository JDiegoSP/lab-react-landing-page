import "./SecundaryText.css";

function SecundaryText() {
  return (
    <>
      <div className="SecundaryText">
        <h1>Crea interfaces de usuario a partir de componentes</h1>
        <p>
        React te permite construir interfaces de usuario a partir de piezas
          individuales llamadas componentes. Crea tus propios componentes de
          React como <span className="thumbnail">Thumbnail</span>,{" "}
          <span className="like-button">LikeButton</span>, y{" "}
          <span className="video">Video</span>. Luego combínalos para formar
          pantallas, páginas y aplicaciones.
        </p>
      </div>
    </>
  );
}

export default SecundaryText;
