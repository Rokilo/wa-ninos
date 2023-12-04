import Front from './Front';
import Login from './Login';
import Home from './Home';
import Logros from './Logros'
import Aventuras from './Aventuras';
import Retos from './Retos';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Convenios from './Convenios';


function isAuthenticated() {
  return localStorage.getItem('token') !== null;
}

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          
          <Route  path='/' element={<Front/>}/>
          <Route path="" element={isAuthenticated() ? <Layoutcompatidos/> : <Navigate to="/" />} >
            <Route  path='/Solucionintegral' element={<Solucionintegral/>}/>
            <Route  path='/NuevoAfiliado' element={<NuevoAfiliado/>}/>
            <Route  path='/Buscarafiliados' element={<Buscarafiliados/>}/>
            <Route  path='/NuevoPrestador' element={<NuevoPrestador/>}/>
            <Route  path='/BuscarPrestador' element={<BuscarPrestador/>}/>
            <Route  path='/BuscarPrestacion' element={<BuscarPrestacion/>}/>
            <Route  path='/NuevoExpediente' element={<NuevoExpediente/>}/>
            <Route  path='/BuscarExpediente' element={<BuscarExpediente/>} />
            <Route  path='/BuscarReporte' element={<BuscarReporte/>} />
            
            <Route  path='/AsignarPrestaciones' element={<AsignarPrestaciones/>} />
            <Route  path='/SuperAdmin' element={<SuperAdmin/>} />
            
          </Route><Route  path='/VistaDnovalido' element={<VistaDnovalido/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;