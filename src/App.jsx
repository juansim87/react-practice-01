import "./App.css";
import BotonPersonalizado from "./components/BotonPersonalizado/BotonPersonalizado";
import Producto from "./components/Producto/Producto";
import TarjetaUsuario from "./components/TarjetaUsuario/TarjetaUsuario";

function App() {
  return (
    <>
      <TarjetaUsuario name="Juan Simón" age="37" city="Salamanca" />
      <BotonPersonalizado message="¡Haz click aquí!" />

      <h2>Lista de la compra</h2>
      <Producto titulo="Teclado" precio= {45} descripcion="Teclado mecánico con lucecitas"/>
      <Producto titulo="Monitor" precio={100} descripcion="27 pulgadas, pantalla HD, se ve top"/>
      
    </>
  );
}

export default App;
