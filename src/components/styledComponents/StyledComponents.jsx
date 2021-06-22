// import './StyledComponents.css'
import "./StyledComponents.scss";
// import buttonStyle from './ButtonStyle.js'

const StyledComponents = () => (
  <div className="styled-components">
    <h3>Estilos en componentes</h3>

    <button
      className="styled-button"
      // style={buttonStyle}
    >
      1
    </button>
    <button className="styled-button">2</button>
    <button className="styled-button">3</button>
  </div>
);

export default StyledComponents;
