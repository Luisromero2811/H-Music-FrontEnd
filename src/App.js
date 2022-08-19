
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reproductor from './components/componentes/player/audio.js';
import FilterTableMusic from './components/componentes/admin/admin.js';
import RouterPaths from './components/componentes/Router/Router';
import HomeLogin from './components/componentes/player/HomeLogin/Homelogin.js';
const music = [
  {nombre:"track1/mp3"},
  {nombre:"track2/opus"},
  {nombre:"track3/mp3"}
]


function App() {
  return (
    <div className="App">

      <HomeLogin/>
      {/* <Reproductor music={music}/>
      <RouterPaths/> */}
      {/*<Reproductor music={music}/>*/}
      <RouterPaths/>
    </div>
  );
}

export default App;
