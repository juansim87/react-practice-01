import Avatar from "../Avatar/Avatar";
import MensajeBienvenida from "../MensajeBienvenida/MensajeBienvenida";
import "./TarjetaUsuario.css";

const TarjetaUsuario = (props) => {
  const { name, age, city } = props;

  return (
    <>
      <MensajeBienvenida name={name} />
      <div className="tarjeta-usuario">
        <h2>Nombre: {name}</h2>
        <h3>Edad: {age}</h3>
        <h3>Ciudad: {city}</h3>
        <Avatar image="/src/assets/images/avatar.jpeg" nickName="Madevolyk" />
      </div>
    </>
  );
};

export default TarjetaUsuario;
