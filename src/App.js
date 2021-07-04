import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./common/components/Navbar";
import Home from "./common/pages/Home/Home";
import Spam from "./common/pages/Spam/Spam";
import Setting from "./common/pages/Setting/Setting";
import Dashboard from "./common/pages/Dashboard/Dashboard";

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Router path="/" exact components={Home} />
					<Router path="/dashboard" components={Dashboard} />
					<Router path="/spam" components={Spam} />
					<Router path="/setting" components={Setting} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
