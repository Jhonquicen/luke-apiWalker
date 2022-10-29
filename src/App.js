import React from "react";

import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Id from "./Componentes/Id/Id";
import Api from "./Componentes/Api/Api";


class App extends React.Component {


  render() {

    return(
      <div className="container">
        <h1> Api sobre el universo START WARS</h1>
        
        <BrowserRouter>

            {/* <Link to="/">Home</Link> 
            <Link to="/id">Menu</Link>  */}
          

          <Switch>
            <Route path="/" exact render={() => <Api/>} />
            <Route path="/:id" exact render={(routeProps) => <Id {...routeProps} />}  /> {/* routeProps para enviar el Id */} 

            
      
          </Switch>

        </BrowserRouter>
        
        
      </div>
    );
  }
}

export default App;
