import Front from './Front';
import Login from './Login';
import Home from './Home';
import Logros from './Logros'
import Aventuras from './Aventuras';
import Retos from './Retos';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Convenios from './Convenios';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


function isAuthenticated() {
  const Conectado = localStorage.getItem("username")
  console.log("Si")
  console.log(Conectado)
  return Conectado; // Devolver booleano del conectado 
}



const ProtectedRoute = ({component: Component, ...rest }) => {
  const Logueado = isAuthenticated()
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Logueado) return <Component {...props} />;
        if (!Logueado)
          return (
            <Redirect to="/login" />
          );
      }}
    />
  );
};


function App() {
  return (
    <Router>
      <div className='App'>
        
        <div className='content'>
          <Switch>
            <Route exact path="/" component= {Front}/>
            <Route path="/login" component = {Login}/>
            <ProtectedRoute path="/home" component = {Home} />
            <ProtectedRoute path="/logros" component = {Logros} />
            <ProtectedRoute path="/aventuras" component = {Aventuras} />
            <ProtectedRoute path="/retos" component = {Retos} />
            <ProtectedRoute path="/convenios" component = {Convenios} /> 
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;