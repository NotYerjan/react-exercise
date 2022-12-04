import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import NotFound from "./NotFound";

function App() {
	return (
		<>
			<div className="links">
				| <Link to='/'>Home</Link> | | <Link to='/counter'>Counter</Link> | |{" "}
				<Link to='/users/YerjanDesign'>Github</Link> |
			</div>
			<Routes>
				<Route path="/" element={<Welcome name="Yerjan" />} />
				<Route path="/counter" element={<Counter />} />
				<Route path="/users/:username" element={<ShowGithubUser />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
