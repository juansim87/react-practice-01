import "./TarjetaUsuario.css";

const TarjetaUsuario = (props) => {
    
    const {name, age, city} = props;

    return <div className="tarjeta-usuario">
        <h2>Nombre: {name}</h2>
        <h3>Edad: {age}</h3>
        <h3>Ciudad: {city}</h3>
    </div>

}

export default TarjetaUsuario;