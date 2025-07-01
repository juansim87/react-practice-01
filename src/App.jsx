import './App.css'
import Avatar from './components/Avatar/Avatar';
import BotonPersonalizado from './components/BotonPersonalizado/BotonPersonalizado'
import TarjetaUsuario from './components/TarjetaUsuario/TarjetaUsuario'

function App() {
  

  return (
    <>
      <TarjetaUsuario name= "Juan Simón" age= "37" city= "Salamanca"/>
      <BotonPersonalizado message= "¡Haz click aquí!"/>
      <Avatar image= "/src/assets/images/avatar.jpeg" nickName= "Madevolyk"/>
    </>
  )
}

export default App;
