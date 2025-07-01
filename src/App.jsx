import "./App.css";
import BotonPersonalizado from "./components/BotonPersonalizado/BotonPersonalizado";
import TarjetaUsuario from "./components/TarjetaUsuario/TarjetaUsuario";

function App() {
  return (
    <>
      <TarjetaUsuario name="Juan Simón Abad" age="37" city="Salamanca" />
      <BotonPersonalizado message="¡Haz click aquí!" />
    </>
  );
}

export default App;
