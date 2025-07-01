import "./MensajeBienvenida.css";

const MensajeBienvenida = (props) => {

    const { name } = props;

  return (
    <div className = "welcome">
      <h1>¡Bienvenido, {name}!</h1>
    </div>
  )
}

export default MensajeBienvenida;
