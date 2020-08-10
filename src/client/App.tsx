import * as React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./views/Home";
import Compose from "./views/Compose";
import Details from "./views/Details";
import Admin from "./views/Admin";
import NavBar from "./components/NavBar";


 
const App: React.FC<AppProps> = (props) => {
  return (
    <BrowserRouter>
	<NavBar />
	<Switch>
		<Route exact path="/">
			<Home />
		</Route>
		<Route exact path="/newchirp">
			<Compose />
		</Route>
		<Route exact path="/:id/chirpdetails">
			<Details />
		</Route>
		<Route exact path="/:id/chirpadmin">
			<Admin />
		</Route>
	</Switch>
	</BrowserRouter>
  );
};

interface AppProps{

}

export default App;