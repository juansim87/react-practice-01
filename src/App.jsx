import "./App.css";
import Alerta from "./components/Alerta/Alerta";
import BotonPersonalizado from "./components/BotonPersonalizado/BotonPersonalizado";
import CitaFrase from "./components/CitaFrase/CitaFrase";
import ContadorClicks from "./components/ContadorClicks/ContadorClicks";
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

      <Alerta message= "ERROR GRAVE QUE TE CAGAS" type= "error"/>
      <Alerta message= "Tremendo éxito, vamos a por unas papas" type= "success"/>
      <Alerta message= "Este mensaje es informativo de absolutamente nada" type= "info"/>

      <ContadorClicks quantity = {1} message= "Incrementar"/>

      <CitaFrase quote= "Citadme diciendo que me han citado mal" author= "Groucho Marx"/>
      
    </>
  );
}

export default App;
