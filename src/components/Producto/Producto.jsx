const Producto = (props) => {

    const { titulo, precio, descripcion } = props;

  return (
    <div>
      <h2>Título: {titulo}</h2>
      <p>Precio: {precio}€</p>
      <p>Descripción: {descripcion}</p>
    </div>
  )
}

export default Producto;
